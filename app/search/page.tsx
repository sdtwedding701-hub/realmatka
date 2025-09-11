"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const KEYWORDS = [
  "satta matka",
  "satta matta matka",
  "kalyan satta matka",
  "satta matta matka 143",
  "matka satta",
  "satta matka result",
  "madhur satta matka",
  "satta matka satta matka",
  "satta matka dp box",
  "satta matka dpboss",
];

// कुछ useful internal pages (CTA)
const INTERNAL_LINKS = [
  { href: "/trick/hybrid-95-tool", label: "Top 20 Hot Jodi (Hybrid-95)" },
  { href: "/trick/final-number-chart", label: "Final Number Chart" },
  { href: "/trick/ai-jodi-predictor", label: "AI 3D Jodi Predictor" },
];

// कुछ keywords को direct relevant पेज से map कर दें (optional लेकिन useful)
const RELATED_MAP: Record<string, string> = {
  "satta matka result": "/trick/hybrid-95-tool",
  "kalyan satta matka": "/trick/final-number-chart",
  "satta matta matka 143": "/trick/hybrid-95-tool",
  "matka satta": "/trick/hybrid-95-tool",
};

export default function SearchPage() {
  const params = useSearchParams();
  const rawQ = params.get("q") || "";
  const q = rawQ.trim().slice(0, 120); // safety

  const mapped = RELATED_MAP[q.toLowerCase()];

  return (
    <div className="min-h-[80vh] max-w-4xl mx-auto px-4 py-10 text-white">
      <h1 className="text-2xl font-bold">
        🔍 Search: <span className="text-orange-400">{q || "Browse"}</span>
      </h1>

      {/* अगर mapping मिली तो एक prominent CTA दिखाएँ */}
      {q && mapped && (
        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm text-white/80 mb-2">
            Related page we recommend:
          </div>
          <Link
            href={mapped}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 font-semibold hover:bg-white/20 transition"
          >
            Open {mapped} ↗
          </Link>
        </div>
      )}

      {/* Helpful internal resources */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-3">Useful on RealMatka:</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {INTERNAL_LINKS.map((x) => (
            <li key={x.href}>
              <Link
                href={x.href}
                className="block rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                {x.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick keyword chips (re-search) */}
      <section className="mt-8">
        <div className="text-sm text-white/70 mb-2">Try these:</div>
        <div className="flex flex-wrap gap-2">
          {KEYWORDS.map((k) => (
            <Link
              key={k}
              href={`/search?q=${encodeURIComponent(k)}`}
              className="px-3 py-1 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition text-sm"
            >
              {k}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
