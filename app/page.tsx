"use client";
import Link from "next/link";
import { useState } from "react";

/** ====== DAILY MANUAL INPUT ====== */
const MARKETS = [
  { name: "Sita", digits: ["*", 1, "*"], play: "Morning / Day" },
  { name: "Kamal", digits: ["*", "*", "*"], play: "Morning / Day" },
  { name: "Andhra", digits: ["*", "*", "*"], play: "Morning / Day" },
  { name: "Star Tara", digits: ["*", "*", "*"], play: "Morning / Day" },
  { name: "Sridevi", digits: ["*", "*", "*"], play: "Morning / Day" },
  { name: "Mahadevi", digits: ["*", "*", "*"], play: "Morning / Day" },
];

/** ====== RELATED TRICKS (links) ====== */
const MORE_TRICKS = [
  {
    href: "/trick/hybrid-95-tool",
    title: "Top 20 Hot Jodi (Hybrid-95)",
    tagline: "GH10 + RH5 + B5 से 20 मज़बूत जोड़ियाँ",
    icon: "🔥",
    gradient: "from-orange-500/20 via-rose-500/10 to-transparent",
    enabled: true,
  },
  {
    href: "/trick/ai-jodi-predictor",
    title: "AI 3D जोड़ी Predictor",
    tagline: "सुबह/दिन/रात की जोड़ियों से AI आधारित top 3 digit",
    icon: "🤖",
    badge: "New",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    enabled: true,
  },
  {
    href: "/trick/final-number-chart",
    title: "Final Number Chart",
    tagline: "कल की जॉडी → final digit → play map",
    icon: "📊",
    gradient: "from-sky-500/20 via-cyan-500/10 to-transparent",
    enabled: true,
  },
];

/** ====== 3-Digit ₹200 Fixed Profit Table (auto-calc) ====== */
const PAYOUT = 9.8;
const DIGITS = 3;
const FACTOR = PAYOUT - DIGITS; // 6.8

type Row = { stage: number; bet: string; total: string; loss: string; ret: string; net: string };

function toMoney(n: number) {
  return "₹" + n.toFixed(2).replace(/\.00$/, "");
}
function build3DigitPlan(target = 200, stages = 6): Row[] {
  const rows: Row[] = [];
  let loss = 0;
  for (let i = 1; i <= stages; i++) {
    const betPer = (target + loss) / FACTOR;
    const total = betPer * DIGITS;
    const nextLoss = loss + total;
    const ret = nextLoss + target;
    rows.push({
      stage: i,
      bet: toMoney(betPer),
      total: toMoney(total),
      loss: toMoney(nextLoss),
      ret: toMoney(ret),
      net: toMoney(target),
    });
    loss = nextLoss;
  }
  return rows;
}

export default function HomePage() {
  // === Indian date format DD/MM/YY ===
  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    timeZone: "Asia/Kolkata",
  });

  const [plan, setPlan] = useState<Row[]>(build3DigitPlan(200, 6));

  // === अगर आज कोई prediction नहीं है ===
  const noPrediction = true; // <- इसे true रखोगे तो message दिखेगा, false करोगे तो नहीं

  async function shareSite() {
    const url = typeof window !== "undefined" ? window.location.href : "https://your-site.example";
    const title = "Real Matka — आज की भविष्यवाणियाँ";
    const text = "Open/Close और 3 Prediction Digits देखें।";
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
      } else {
        await navigator.clipboard.writeText(url);
        alert("लिंक कॉपी हो गया ✅");
      }
    } catch {
      /* user cancelled */
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#0b0b0f] text-white overflow-x-hidden">
      {/* soft bg */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[35rem] w-[35rem] rounded-full bg-gradient-to-br from-orange-500/20 via-pink-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-6xl px-4 py-8 sm:py-10">
        {/* ===== Top Branding Bar ===== */}
        <div className="mb-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-rose-400 text-black font-extrabold">
              R
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold tracking-tight">Real Matka</div>
              <div className="text-[11px] uppercase tracking-wider text-white/60">
                EN · HI • Results • Charts • Guides
              </div>
            </div>
          </div>

          {/* Icon actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              title="Login"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 hover:border-white/20"
            >
              <span aria-hidden>🔐</span>
            </Link>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%20Real%20Matka%20Team"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 hover:border-white/20"
            >
              <span aria-hidden>🟢</span>
            </a>
            <button
              title="Share"
              onClick={shareSite}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 hover:border-white/20"
            >
              <span aria-hidden>🔗</span>
            </button>
          </div>
        </div>

        {/* ===== Page Headline + Date ===== */}
        <header className="mb-10 text-center px-2">
          <h1 className="mx-auto max-w-3xl text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight sm:leading-[2] bg-gradient-to-r from-amber-200 via-rose-200 to-orange-300 bg-clip-text text-transparent">
            आज की भविष्यवाणियाँ
          </h1>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm">
            <span className="text-white/70">Date:</span>
            <span className="font-semibold">{today}</span>
          </div>

          {noPrediction && (
            <p className="mt-4 text-center text-lg font-bold text-red-400">
              *** आज कोई prediction उपलब्ध नहीं है ***
            </p>
          )}
        </header>

        {/* ===== Market cards ===== */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MARKETS.map((m) => (
            <div
              key={m.name}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.06] p-6 backdrop-blur-sm hover:border-white/20 hover:shadow-[0_0_25px_-6px_rgba(255,255,255,0.2)] transition-all"
            >
              <h2 className="text-xl font-extrabold text-center mb-5 bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent uppercase tracking-wide">
                {m.name}
              </h2>

              {/* OPEN/CLOSE capsule */}
              <div className="mb-4 flex justify-center">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
                  <span className="text-[12px] font-extrabold uppercase tracking-wide text-orange-300">OPEN</span>
                  <span className="h-4 w-[1px] bg-white/15" />
                  <span className="text-[12px] font-extrabold uppercase tracking-wide text-sky-300">CLOSE</span>
                </div>
              </div>

              {/* 3 digits */}
              <div className="flex justify-center gap-2 mb-4 flex-wrap">
                {m.digits.map((d, i) => (
                  <span
                    key={i}
                    className="rounded-xl border border-white/20 bg-gradient-to-br from-orange-400/25 via-rose-400/20 to-amber-400/25 px-4 py-2 text-lg sm:text-2xl font-extrabold text-amber-100 shadow-[0_8px_24px_-10px_rgba(255,199,120,0.35)]"
                  >
                    {d}
                  </span>
                ))}
              </div>

              {/* play note */}
              <div className="flex justify-center">
                <p className="text-center text-sm font-bold text-orange-300 bg-orange-500/10 px-3 py-1 rounded-full inline-block">
                  इस मार्केट में खेलें: {m.play}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* ===== 3-Digit ₹200 Fixed Profit Plan ===== */}
        <section className="mt-12">
          <h3 className="text-xl font-extrabold mb-3 text-center">
            3-Digit 6-Stage Fixed Profit Plan (1:9.8 payout)
          </h3>

          {/* Profit Target Input */}
          <div className="mb-6 flex justify-center gap-3">
            <label className="text-sm font-semibold text-white/80 flex items-center gap-2">
              🎯 Target Profit (₹):
              <input
                type="number"
                defaultValue={200}
                min={50}
                step={50}
                className="w-24 px-2 py-1 rounded bg-white/10 border border-white/20 text-center text-white"
                onChange={(e) => {
                  const newTarget = parseInt(e.target.value) || 200;
                  setPlan(build3DigitPlan(newTarget, 6));
                }}
              />
            </label>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#12131a]">
            <table className="w-full min-w-[600px] text-sm">
              <thead className="bg-white/[0.06] text-white/80">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold uppercase text-[11px]">Stage</th>
                  <th className="px-3 py-2 text-left font-semibold uppercase text-[11px]">Bet Per Digit (₹)</th>
                  <th className="px-3 py-2 text-left font-semibold uppercase text-[11px]">Total Bet (₹)</th>
                  <th className="px-3 py-2 text-left font-semibold uppercase text-[11px]">Cumulative Loss (₹)</th>
                  <th className="px-3 py-2 text-left font-semibold uppercase text-[11px]">Return on Win (₹)</th>
                  <th className="px-3 py-2 text-left font-semibold uppercase text-[11px]">Net Profit (₹)</th>
                </tr>
              </thead>
              <tbody>
                {plan.map((r) => (
                  <tr key={r.stage} className="odd:bg-white/[0.02]">
                    <td className="px-3 py-2">{r.stage}</td>
                    <td className="px-3 py-2">{r.bet}</td>
                    <td className="px-3 py-2">{r.total}</td>
                    <td className="px-3 py-2">{r.loss}</td>
                    <td className="px-3 py-2">{r.ret}</td>
                    <td className="px-3 py-2">{r.net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== More Tricks ===== */}
        <section className="mt-12" aria-label="और ट्रिक्स">
          <h3 className="text-xl font-bold mb-4 text-center">लेटेस्ट ट्रिक्स (सीधे खोलें)</h3>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MORE_TRICKS.filter((t) => t.enabled).map((t) => (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-5 hover:border-white/20 focus-visible:ring-2 focus-visible:ring-orange-400/70 transition-all"
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${t.gradient}`} />
                  <div className="relative z-[1] flex items-start gap-4">
                    <div className="text-3xl">{t.icon}</div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-bold">{t.title}</h4>
                      <p className="mt-1 line-clamp-2 text-sm text-white/80">{t.tagline}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/5">
                    <div className="h-full w-0 bg-gradient-to-r from-orange-400/70 to-amber-300/70 transition-all duration-300 group-hover:w-full" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Real Matka. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
}
