"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

/** उपलब्ध मार्केट्स */
const MARKET_OPTIONS = [
  { key: "sita", label: "Sita" },
  { key: "andra", label: "Andra" },
  { key: "star-tara", label: "Star Tara" },
  { key: "kamal", label: "Kamal" },
];
/** इस पेज से direct जाने के लिए और tricks */
const MORE_TRICKS = [
  {
    href: "/trick/progressive-hybrid-95",
    title: "Progressive Hybrid-95",
    tagline: "Rolling window + bounce logic booster",
    icon: "🚀",
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
  },
  {
    href: "/trick/final-number-chart",
    title: "Final Number Chart",
    tagline: "Yesterday → final digit → play map",
    icon: "📊",
    gradient: "from-sky-500/20 via-cyan-500/10 to-transparent",
  },
  {
    href: "/trick/top-bottom-never-5",
    title: "Top-5 / Bottom-5 / Never-Seen-5",
    tagline: "Frequency bands + exclusion filters",
    icon: "🎯",
    gradient: "from-lime-500/20 via-emerald-500/10 to-transparent",
  },
  {
    href: "/trick/fire-logic",
    title: "Fire Logic",
    tagline: "Minimal set, aggressive confidence",
    icon: "🔥",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
];

type Labeled = {
  jodi: string;
  set: "GH10" | "RH5" | "B5";
};

type ApiResult = {
  predictions: string[];               // सिर्फ नंबरों की सूची (backward-compat)
  labeled?: Labeled[];                 // हर जोड़ी के साथ उसका सेट (GH10/RH5/B5)
  matched: boolean;
  matchedSessions: string[];
  actualOfDate: Record<string, string | null> | null;
  info: string[];
  error?: string;
} | null;

export default function Top20HotJodiPage() {
  const todayISO = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [market, setMarket] = useState("sita");
  const [date, setDate] = useState(todayISO);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ApiResult>(null);

  async function handlePredict() {
    try {
      setLoading(true);
      setResult(null);
      const res = await fetch(`/api/top20-hot-jodi?market=${market}&date=${date}`);
      const data = await res.json();
      setResult(data);
    } catch (e: any) {
      setResult({
        predictions: [],
        matched: false,
        matchedSessions: [],
        actualOfDate: null,
        info: [],
        error: e?.message || "Failed",
      });
    } finally {
      setLoading(false);
    }
  }

  /** बैज का रंग (GH10/RH5/B5) */
  function badgeClass(s: Labeled["set"]) {
    if (s === "GH10") return "border-amber-400/40 bg-amber-400/10 text-amber-200";
    if (s === "RH5")  return "border-sky-400/40 bg-sky-400/10 text-sky-200";
    return "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"; // B5
  }

  return (
    <div className="min-h-[100dvh] w-full bg-[#0b0b0f] text-white">
      {/* soft gradient bg */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-orange-500/15 via-rose-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-transparent blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        {/* header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-amber-200 via-rose-200 to-orange-300 bg-clip-text text-transparent">
              Top 20 Hot Jodi
            </h1>
            <p className="mt-2 text-sm text-white/80">
              (Hybrid-95 का नया नाम) — GH10 + RH5 + B5 लॉजिक से रोज़ की <span className="font-semibold">20 सबसे मज़बूत जोड़ियाँ</span>।
            </p>
          </div>
          <Link
            href="/trick"
            className="text-sm text-white/80 hover:text-white underline/30 hover:underline"
          >
            ← Back to Tricks
          </Link>
        </div>

        {/* hero info – ये ट्रिक क्या है */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/10 via-rose-500/5 to-transparent" />
          <div className="relative z-[1] space-y-3">
            <h2 className="text-xl font-bold">ये ट्रिक क्या है?</h2>
            <p className="text-white/90">
              यह विधि तीन सेट बनाती है — <span className="font-semibold">GH10</span> (Global Hot 10),
              <span className="font-semibold"> RH5</span> (Recent Hot 5), और
              <span className="font-semibold"> B5</span> (Bounce 5)। फिर इनका यूनियन लेकर
              <span className="font-semibold"> Top 20 Hot Jodi</span> बनती है। इससे कवरेज अच्छा रहता है —
              long-term strength + recent momentum + comeback chances, तीनों का संतुलन।
            </p>

            <div className="grid gap-3 sm:grid-cols-3 text-sm">
              <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-3">
                <div className="text-xs uppercase text-amber-200/80 mb-1">GH10</div>
                <p className="text-white/90">पूरे इतिहास में सबसे ज़्यादा बार आई 10 जोड़ियाँ।</p>
              </div>
              <div className="rounded-xl border border-sky-400/30 bg-sky-400/5 p-3">
                <div className="text-xs uppercase text-sky-200/80 mb-1">RH5</div>
                <p className="text-white/90">पिछले 7 दिनों की सबसे गरम 5 जोड़ियाँ (GH10 के बाहर)।</p>
              </div>
              <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-3">
                <div className="text-xs uppercase text-emerald-200/80 mb-1">B5</div>
                <p className="text-white/90">7 दिनों से गायब लेकिन इतिहास में मज़बूत 5 जोड़ियाँ।</p>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm">
              <div className="font-semibold mb-1">फ़ॉर्मूला (सिंपल):</div>
              <div className="text-white/90">
                <code className="rounded bg-white/10 px-2 py-0.5">Top20 = Unique(GH10 ∪ RH5 ∪ B5)</code>
              </div>
              <div className="mt-2 text-white/70">
                RH5 सिर्फ पिछले 7 दिनों के डेटा से आता है (GH10 exclude), और B5 वो जोड़ियाँ हैं
                जो 7 दिनों से नहीं आईं (पर इतिहास में आई हैं), GH10 व RH5 से अलग।
              </div>
            </div>
          </div>
        </section>
        

        {/* controls */}
           <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="flex flex-col gap-1 text-sm">
              <span className="text-white/80">मार्केट</span>
              <select
                className="rounded-xl bg-[#14141c] border border-white/10 p-2 outline-none focus:ring-2 focus:ring-orange-400/60"
                value={market}
                onChange={(e) => setMarket(e.target.value)}
              >
                {MARKET_OPTIONS.map((m) => (
                  <option key={m.key} value={m.key}>{m.label}</option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1 text-sm">
              <span className="text-white/80">दिनांक</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="rounded-xl bg-[#14141c] border border-white/10 p-2 text-white [color-scheme:dark] outline-none focus:ring-2 focus:ring-orange-400/60"
              />
            </label>

            <div className="flex items-end">
              <button
                onClick={handlePredict}
                disabled={loading}
                className="w-full rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-60 px-4 py-2 font-semibold"
              >
                {loading ? "Predicting…" : "Get Prediction"}
              </button>
            </div>
          </div>
        </section>

        {/* results */}
        <section className="mt-8">
          <h2 className="text-xl font-bold">आज की भविष्यवाणी</h2>
          <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/90">
            {!result ? (
              <div className="text-white/70">
                ऊपर से मार्केट और तारीख चुनें, फिर <b>Get Prediction</b> दबाएँ।
              </div>
            ) : result.error ? (
              <div className="text-red-300">{result.error}</div>
            ) : (
              <div className="space-y-6">
                {/* info */}
                {result.info?.length ? (
                  <ul className="text-white/70 list-disc pl-5 space-y-1">
                    {result.info.map((x, i) => <li key={i}>{x}</li>)}
                  </ul>
                ) : null}

                {/* actuals (केवल जानकारी, कोई FAIL बैज नहीं) */}
                {result.actualOfDate ? (
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <div className="text-xs text-white/60 mb-1">चुनी हुई तारीख का Actual</div>
                    <div className="flex flex-wrap gap-3 text-sm">
                      {Object.entries(result.actualOfDate).map(([k, v]) => (
                        <div key={k} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1">
                          <span className="uppercase text-white/60 text-xs">{k}</span>
                          <span className="font-semibold">{v ?? "—"}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/* Top 20 + badges */}
                <div>
                  <div className="text-xs text-white/60 mb-2">Top 20 Hot Jodi (GH10/RH5/B5 बैज के साथ)</div>
                  <div className="flex flex-wrap gap-2">
                    {(result.labeled ?? result.predictions.map((j) => ({ jodi: j, set: "GH10" as const }))).map((x) => (
                      <span key={`${x.jodi}-${x.set}`} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm">
                        <span className="font-semibold">{x.jodi}</span>
                        <span className={`text-[10px] px-2 py-[2px] rounded-full border ${badgeClass(x.set)}`}>
                          {x.set}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* कैसे खेलें (Play Guide) */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-base font-semibold mb-2">कैसे खेलें (Guided Plan)</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-white/85">
                    <li>
                      <span className="font-semibold">Focus Set चुनें:</span> GH10 से 3–6 जोड़ियाँ लें।
                      RH5/B5 को “backup rotation” में रखें।
                    </li>
                    <li>
                      <span className="font-semibold">Session Targeting:</span> जिस सेशन (Morning/Day/Night)
                      में हाल में stability दिखी हो, वहीं फोकस करें।
                    </li>
                    <li>
                      <span className="font-semibold">Staking:</span> 1× base से शुरुआत। Pass पर same,
                      miss पर stake double <i>न</i> करें — 1.0 → 1.2× gradual बढ़ोतरी रखें।
                    </li>
                    <li>
                      <span className="font-semibold">Rotation Rule:</span> 2–3 draws में न आए तो bench कर
                      RH5/B5 से replace करें; कुल active 8–12 जोड़ियाँ max रखें।
                    </li>
                    <li>
                      <span className="font-semibold">Risk Guard:</span> Daily stop-loss = bankroll का 3–5%,
                      stop-win = 5–8% — जो पहले हिट हो, दिन बंद।
                    </li>
                    <li>
                      <span className="font-semibold">नोट्स:</span> GH10 = long-range strength, RH5 = recent momentum, B5 = comeback chance.
                    </li>
                  </ol>
                </div>

                {/* डिस्क्लेमर */}
                <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-white/70">
                  यह एक सांख्यिकीय रणनीति है — निश्चित जीत की गारंटी नहीं। ज़िम्मेदारी से खेलें।
                </div>
              </div>
            )}
          </div>
        </section>
        {/* more tricks (related) */}
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

            {/* Final Number Chart */}
            <li>
              <Link
                href="/trick/final-number-chart"
                className="group block rounded-xl border border-white/10 bg-white/5 p-3 hover:border-white/20 transition"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🔢</span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold">Final Number Chart</h4>
                    <p className="text-xs text-white/70">जोडी से final digit</p>
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

      </main>
    </div>
  );
}
