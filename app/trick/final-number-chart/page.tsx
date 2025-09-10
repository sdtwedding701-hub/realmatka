"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

/* Final → 4 digits map (Open/Close) */
const MAP: Record<string, string[]> = {
  "0": ["2", "3", "5", "9"],
  "1": ["4", "5", "7", "9"],
  "2": ["0", "2", "6", "8"],
  "3": ["0", "1", "8", "9"],
  "4": ["1", "3", "6", "7"],
  "5": ["2", "4", "6", "7"],
  "6": ["0", "3", "6", "8"],
  "7": ["1", "2", "4", "7"],
  "8": ["2", "5", "6", "8"],
  "9": ["1", "4", "7", "8"],
};

/* Digit chip colors */
const DIGIT_STYLE: Record<string, string> = {
  "0": "bg-cyan-500/15 border-cyan-400/30 text-cyan-200",
  "1": "bg-rose-500/15 border-rose-400/30 text-rose-200",
  "2": "bg-emerald-500/15 border-emerald-400/30 text-emerald-200",
  "3": "bg-violet-500/15 border-violet-400/30 text-violet-200",
  "4": "bg-amber-500/15 border-amber-400/30 text-amber-200",
  "5": "bg-indigo-500/15 border-indigo-400/30 text-indigo-200",
  "6": "bg-fuchsia-500/15 border-fuchsia-400/30 text-fuchsia-200",
  "7": "bg-sky-500/15 border-sky-400/30 text-sky-200",
  "8": "bg-teal-500/15 border-teal-400/30 text-teal-200",
  "9": "bg-lime-500/15 border-lime-400/30 text-lime-200",
};

/* Helper: previous-day jodi → (sum) last digit */
function finalFromJodiSum(jodi: string): string {
  const only = (jodi || "").replace(/[^0-9]/g, "");
  if (!only) return "";
  const two = only.length === 1 ? only.padStart(2, "0") : only.slice(-2);
  const a = Number(two[0] || "0");
  const b = Number(two[1] || "0");
  return String((a + b) % 10);
}

/* Money format */
function Rs(n: number) {
  const x = Math.round(n);
  return `₹${x.toLocaleString("en-IN")}`;
}

export default function FinalNumberChartPage() {
  // Calculator
  const [jodi, setJodi] = useState("");
  const [showSet, setShowSet] = useState(false);
  const [error, setError] = useState("");

  // Copy feedback
  const [copied, setCopied] = useState(false);

  // Stage table config
  const [target, setTarget] = useState<number>(200);
  const payout = 9.8;
  const digits = 4; // ✅ 4 digit base
  const factor = payout - digits; // 9.8 - 4 = 5.8

  // derive final + 4 digits
  const finalDigit = useMemo(() => finalFromJodiSum(jodi), [jodi]);
  const playSet = finalDigit && MAP[finalDigit] ? MAP[finalDigit] : null;

  function onGetSet() {
    setError("");
    setCopied(false);
    if (!finalDigit || !playSet) {
      setShowSet(false);
      setError("कृपया previous day की वैध जोड़ी दर्ज करें.");
      return;
    }
    setShowSet(true);
  }

  async function copySet() {
    if (!playSet) return;
    try {
      await navigator.clipboard?.writeText(playSet.join(", "));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }

  // Build Stage table (1–6)
  const stages = useMemo(() => {
    let rows: Array<{
      stage: number;
      per: number;
      total: number;
      cumLoss: number;
      onWinReturn: number;
      netProfit: number;
    }> = [];
    let cumLoss = 0;
    for (let i = 1; i <= 6; i++) {
      const betPerDigit = (target + cumLoss) / factor;
      const total = betPerDigit * digits;
      const nextLoss = cumLoss + total;
      const onWin = nextLoss + target;
      rows.push({
        stage: i,
        per: betPerDigit,
        total,
        cumLoss: nextLoss,
        onWinReturn: onWin,
        netProfit: target,
      });
      cumLoss = nextLoss;
    }
    return rows;
  }, [target, factor, digits]);

  return (
    <div className="min-h-[100vh] bg-[#0b0b10] text-white">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-10">
        {/* Breadcrumb + What's New CTA */}
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/trick"
            className="inline-flex items-center gap-2 text-sm text-orange-300 hover:text-orange-200"
          >
            <span>←</span> Back to Trick Section
          </Link>

          <Link
            href="/trick/hybrid-95-tool"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold hover:border-white/20"
            title="New Trick"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400/60"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-400"></span>
            </span>
            <span>New Trick: Hybrid-95 Tool</span>
          </Link>
        </div>

        {/* Title */}
        <header className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <span aria-hidden className="text-lg">🔢</span>
            <span className="text-xs font-semibold tracking-wide text-white/80">
              Final Number Calculator
            </span>
          </div>
          <h1 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-orange-400">
            Simple Use — First-time Friendly
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            बस <span className="font-semibold">Previous Day की जोड़ी</span> भरें और “Get Play Set” दबाएँ —
            calculator calculation करके आपको <span className="font-semibold">4 predictable digits</span> दिखाएगा
            जो अगले दिन market में आ सकते हैं; इन्हीं पर आप Open/Close में play करेंगे।
          </p>
        </header>

        {/* Market & Stage rules */}
        <section className="mb-6 rounded-2xl border border-neutral-800 bg-[#12121a] p-5">
          <h2 className="text-lg font-semibold mb-2">Market & Stage Rules</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
            <li>
              <span className="font-semibold">एक ही market</span> चुनें और पूरे दिन वही रखें —
              Stage-mix/market-mix बिल्कुल <span className="font-semibold">नहीं</span>।
            </li>
            <li>
              यह trick तभी काम करेगी जब आप हर दिन{" "}
              <span className="font-semibold">Morning से Stage-1</span> शुरू करें।
              अगर Morning से शुरुआत नहीं हो पाती है तो उसी दिन इस market को skip करें।
            </li>
            <li>
              किसी भी stage पर <span className="font-semibold text-orange-300">PASS</span> मिले तो तुरंत दिन बंद;
              अगला दिन फिर Stage-1 से।
            </li>
          </ul>
        </section>

        {/* Tip Box */}
        <div className="mb-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-sm">
          <h4 className="font-semibold text-emerald-300 mb-2">Tip</h4>
          <p className="text-emerald-100 leading-relaxed">
            यह trick <span className="font-bold">सभी markets</span> के लिए काम करती है।
            सही तरीके से Stage-wise play करने पर लगभग{" "}
            <span className="font-bold">99% सफलता</span> मिलती है।
          </p>
        </div>

        {/* Calculator */}
        <section className="mb-6 rounded-2xl border border-neutral-800 bg-[#12121a] p-5">
          <h2 className="text-lg font-semibold mb-3">Calculator</h2>

          <label className="block text-xs font-semibold mb-1 text-white/80">
            Previous Day Jodi
          </label>
          <input
            value={jodi}
            onChange={(e) => {
              setJodi(e.target.value);
              setShowSet(false);
              setCopied(false);
            }}
            placeholder="e.g., 88, 63"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-white/20"
            inputMode="numeric"
          />

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={onGetSet}
              className="rounded-xl border border-white/10 bg-orange-500 px-4 py-2 text-sm font-semibold hover:bg-orange-600"
            >
              Get Play Set
            </button>
            {error && <div className="text-sm text-rose-300">{error}</div>}
          </div>

          {showSet && playSet && (
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center gap-2 text-xs">
                <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2 py-1 text-emerald-200 font-semibold">
                  OPEN
                </span>
                <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-500/15 px-2 py-1 text-sky-200 font-semibold">
                  CLOSE
                </span>
                <span className="text-white/50">• किसी भी side पर digit आए तो PASS</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {playSet.map((d) => (
                  <span
                    key={d}
                    className={`rounded-xl border px-3 py-1.5 text-sm font-semibold ${DIGIT_STYLE[d]}`}
                  >
                    {d}
                  </span>
                ))}
                <button
                  onClick={copySet}
                  className={`ml-auto rounded-lg border px-3 py-1.5 text-sm font-semibold ${
                    copied
                      ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-200"
                      : "border-white/10 bg-white/10 hover:border-white/20"
                  }`}
                >
                  {copied ? "Copied!" : "Copy set"}
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Stage Plan */}
        <section className="mb-8 rounded-2xl border border-neutral-800 bg-[#12121a] p-5">
          <h3 className="text-base font-semibold mb-3">
            Stage-wise Fixed Profit Plan (Morning → Day → Night)
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <label className="text-xs text-white/70">Target Profit</label>
            <input
              type="number"
              value={target}
              onChange={(e) => setTarget(Math.max(1, Number(e.target.value) || 200))}
              className="w-24 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-sm outline-none"
            />
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0f0f16]">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.06] text-white/80">
                <tr>
                  <th className="px-3 py-2">Stage</th>
                  <th className="px-3 py-2">Bet Per Digit</th>
                  <th className="px-3 py-2">Total Bet (×4)</th>
                  <th className="px-3 py-2">Cumulative Loss</th>
                  <th className="px-3 py-2">Return on Win*</th>
                  <th className="px-3 py-2">Net Profit</th>
                </tr>
              </thead>
              <tbody>
                {stages.map((r) => (
                  <tr key={r.stage} className="odd:bg-white/[0.02]">
                    <td className="px-3 py-2">{r.stage}</td>
                    <td className="px-3 py-2">{Rs(r.per)}</td>
                    <td className="px-3 py-2">{Rs(r.total)}</td>
                    <td className="px-3 py-2">{Rs(r.cumLoss)}</td>
                    <td className="px-3 py-2">{Rs(r.onWinReturn)}</td>
                    <td className="px-3 py-2">{Rs(r.netProfit)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-white/60">
            *Bet per digit = (Target + Previous Loss) ÷ (9.8 − 4) = ÷ 5.8
          </p>
        </section>

        {/* More Tricks */}
         <section className="mt-12 mb-16" aria-label="More Tricks">
          <h3 className="text-lg font-bold mb-3 text-center text-white/80">और ट्रिक्स</h3>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {/* Hybrid-95 Tool */}
            <li>
              <Link
                href="/trick/hybrid-95-tool"
                className="group block rounded-xl border border-white/10 bg-white/5 p-3 hover:border-white/20 transition"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🔥</span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold">Hybrid-95 Tool</h4>
                    <p className="text-xs text-white/70">20 हॉट जोड़ियाँ</p>
                  </div>
                </div>
              </Link>
            </li>

  

            {/* AI Jodi Predictor */}
            <li>
              <Link
                href="/trick/ai-jodi-predictor"
                className="group block rounded-xl border border-white/10 bg-white/5 p-3 hover:border-white/20 transition"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🤖</span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold">AI 3D Predictor</h4>
                    <p className="text-xs text-white/70">सुबह/दिन/रात से AI top 3 digit</p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <div className="pt-2">
          <Link
            href="/trick"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:border-white/20"
          >
            <span>←</span> Back to Trick Section
          </Link>
        </div>
      </div>
    </div>
  );
}
