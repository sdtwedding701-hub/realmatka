// app/api/predict/route.ts

import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import csv from 'csv-parser';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const market = searchParams.get('market') || 'sita';

  const filePath = path.join(process.cwd(), 'public', 'data', `${market}_chart_cleaned.csv`);

  // ✅ Wrap the whole logic in try-catch
  try {
    // File not found
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    const data: { date: string; jodi: string }[] = [];

    // ✅ Return promise from async/await
    const result = await new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          if (row.date && row.jodi) {
            data.push({ date: row.date, jodi: row.jodi });
          }
        })
        .on('end', () => {
          const flat = data.map((r) => r.jodi);
          const freq: Record<string, number> = {};
          flat.forEach((j) => {
            freq[j] = (freq[j] || 0) + 1;
          });

          const GH10 = Object.entries(freq)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([j]) => j);

          const recent = data.slice(-7);
          const recentFreq: Record<string, number> = {};
          recent.forEach((r) => {
            recentFreq[r.jodi] = (recentFreq[r.jodi] || 0) + 1;
          });

          const RH5 = Object.entries(recentFreq)
            .filter(([j]) => !GH10.includes(j))
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([j]) => j);

          const B5 = Object.entries(freq)
            .filter(
              ([j]) =>
                !recent.map((r) => r.jodi).includes(j) &&
                !GH10.includes(j) &&
                !RH5.includes(j)
            )
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([j]) => j);

          const final20 = Array.from(new Set([...GH10, ...RH5, ...B5])).slice(0, 20);

          resolve({ GH10, RH5, B5, final20 });
        })
        .on('error', (err) => reject(err));
    });

    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
