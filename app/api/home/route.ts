import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import * as XLSX from "xlsx";
import Papa from "papaparse";

export const dynamic = "force-dynamic"; // no caching

type HomeRow = { key: string; name: string; open: string; close: string; offDay?: string | boolean };

async function fetchCSV(url: string) {
  const res = await fetch(url, { cache: "no-store" });
  const text = await res.text();
  const parsed = Papa.parse(text.trim(), { header: true });
  return parsed.data as any[];
}

function readExcel(file: string) {
  const buf = fs.readFileSync(file);
  const wb = XLSX.read(buf);
  const metaRows = XLSX.utils.sheet_to_json(wb.Sheets["meta"]) as any[];
  const homeRows = XLSX.utils.sheet_to_json(wb.Sheets["home"]) as HomeRow[];
  const trickRows = XLSX.utils.sheet_to_json(wb.Sheets["trick_points"]) as { point: string }[];

  const meta: Record<string, any> = {};
  for (const row of metaRows) {
    const k = String(row.key ?? "").trim();
    if (!k) continue;
    meta[k] = row.value;
  }

  const markets = (homeRows || []).map(r => ({
    key: String(r.key).trim(),
    name: String(r.name).trim(),
    open: String(r.open ?? "").trim().split(/\s+/).filter(Boolean),
    close: String(r.close ?? "").trim().split(/\s+/).filter(Boolean),
    offDay: String(r.offDay ?? "").toLowerCase() === "true" || r.offDay === true,
  }));

  return {
    date: String(meta.date ?? "").trim(),
    tagline: String(meta.tagline ?? "").trim(),
    offDay: String(meta.offDay ?? "").toLowerCase() === "true",
    markets,
    trick: {
      title: String(meta.trick_title ?? "Trick").trim(),
      points: trickRows.map(t => String(t.point ?? "").trim()).filter(Boolean),
      disclaimer: String(meta.trick_disclaimer ?? "").trim(),
    },
  };
}

async function readLocalCSV() {
  const root = process.cwd();
  const metaCsv = path.join(root, "data", "meta.csv");
  const homeCsv = path.join(root, "data", "home.csv");
  const trickCsv = path.join(root, "data", "trick_points.csv");

  const metaRows = Papa.parse(fs.readFileSync(metaCsv, "utf8").trim(), { header: true }).data as any[];
  const homeRows = Papa.parse(fs.readFileSync(homeCsv, "utf8").trim(), { header: true }).data as HomeRow[];
  const trickRows = Papa.parse(fs.readFileSync(trickCsv, "utf8").trim(), { header: true }).data as { point: string }[];

  const meta: Record<string, string> = {};
  for (const r of metaRows) meta[String((r as any).key).trim()] = String((r as any).value ?? "").trim();

  const markets = (homeRows || []).map(r => ({
    key: String(r.key).trim(),
    name: String(r.name).trim(),
    open: String(r.open ?? "").trim().split(/\s+/).filter(Boolean),
    close: String(r.close ?? "").trim().split(/\s+/).filter(Boolean),
    offDay: String(r.offDay ?? "").toLowerCase() === "true" || (r.offDay as any) === true,
  }));

  return {
    date: meta.date ?? "",
    tagline: meta.tagline ?? "",
    offDay: String(meta.offDay ?? "").toLowerCase() === "true",
    markets,
    trick: {
      title: meta.trick_title ?? "Trick",
      points: (trickRows || []).map((r: any) => String(r.point ?? "").trim()).filter(Boolean),
      disclaimer: meta.trick_disclaimer ?? "",
    },
  };
}

export async function GET() {
  try {
    // 1) Google Sheets via env (best for Vercel)
    const SHEET_META = process.env.SHEET_META_CSV;
    const SHEET_HOME = process.env.SHEET_HOME_CSV;
    const SHEET_TRICK = process.env.SHEET_TRICK_CSV;
    if (SHEET_META && SHEET_HOME && SHEET_TRICK) {
      const [metaRows, homeRows, trickRows] = await Promise.all([
        fetchCSV(SHEET_META),
        fetchCSV(SHEET_HOME),
        fetchCSV(SHEET_TRICK),
      ]);

      const meta: Record<string, string> = {};
      for (const r of metaRows) meta[String((r as any).key).trim()] = String((r as any).value ?? "").trim();

      const markets = (homeRows as HomeRow[]).map(r => ({
        key: String(r.key).trim(),
        name: String(r.name).trim(),
        open: String(r.open ?? "").trim().split(/\s+/).filter(Boolean),
        close: String(r.close ?? "").trim().split(/\s+/).filter(Boolean),
        offDay: String(r.offDay ?? "").toLowerCase() === "true" || (r.offDay as any) === true,
      }));

      return NextResponse.json({
        date: meta.date ?? "",
        tagline: meta.tagline ?? "",
        offDay: String(meta.offDay ?? "").toLowerCase() === "true",
        markets,
        trick: {
          title: meta.trick_title ?? "Trick",
          points: (trickRows || []).map((r: any) => String(r.point ?? "").trim()).filter(Boolean),
          disclaimer: meta.trick_disclaimer ?? "",
        },
      });
    }

    // 2) Local Excel
    const excelPath = path.join(process.cwd(), "data", "home.xlsx");
    if (fs.existsSync(excelPath)) {
      return NextResponse.json(readExcel(excelPath));
    }

    // 3) Local CSV fallback
    const csvMeta = path.join(process.cwd(), "data", "meta.csv");
    const csvHome = path.join(process.cwd(), "data", "home.csv");
    const csvTrick = path.join(process.cwd(), "data", "trick_points.csv");
    if (fs.existsSync(csvMeta) && fs.existsSync(csvHome) && fs.existsSync(csvTrick)) {
      return NextResponse.json(await readLocalCSV());
    }

    return NextResponse.json({ error: "No data source found." }, { status: 404 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message ?? "Parse error" }, { status: 500 });
  }
}
