import Link from "next/link";

type Trick = {
  slug: string;          // page route under /trick
  title: string;         // card title
  tagline: string;       // short description
  badge?: string;        // e.g. "New", "Coming Soon"
  emoji: string;         // simple icon (no extra package)
  enabled: boolean;      // if false -> disabled/coming soon look
};

const TRICKS: Trick[] = [
  {
    slug: "hybrid-95-tool",
    title: "Top 20 Hot Jodi (Hybrid-95)",
    tagline: "GH10 + RH5 + B5 से 20 जड़ी का daily prediction",
    badge: "New",
    emoji: "🎯",
    enabled: true,
  },
    {
    slug: "final-number-chart",
    title: "Final Number Chart",
    tagline: "कल की जॉडी → final digit → Open/Close play map",
    badge: "New",
    emoji: "🔢",
    enabled: true,
  },
 {
  slug: "ai-jodi-predictor",
  title: "AI 3D जोड़ी Predictor",
  tagline: "सुबह/दिन/रात की जोड़ियों से AI आधारित top 3 digit",
  emoji: "🤖",
  badge: "New",
  enabled: true,
},


  {
    slug: "digit-cluster",
    title: "Digit Cluster Filter",
    tagline: "close-digit based refine (accuracy boost)",
    badge: "Coming Soon",
    emoji: "🔢",
    enabled: false,
  },
  {
    slug: "smart-bounce-v2",
    title: "Smart Bounce v2",
    tagline: "recent-absent strong jodis का उन्नत logic",
    badge: "Coming Soon",
    emoji: "🧠",
    enabled: false,
  },
];


export default function TrickHomePage() {
  return (
    <div className="min-h-[100vh] bg-[#0b0b10] text-white">
      {/* header */}
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-orange-400">
          🔥 Matka Trick Section
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-300">
          नीचे से trick चुनें — कार्ड पर क्लिक करते ही पेज खुल जाएगा. नए tools जोड़ते ही यहाँ दिखेंगे.
        </p>
      </div>

      {/* grid */}
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {TRICKS.map((t) => {
            const CardInner = (
              <div
                className={[
                  "relative h-full rounded-2xl border transition",
                  "p-5 sm:p-6",
                  t.enabled
                    ? "border-neutral-800 bg-[#12121a] hover:border-neutral-600 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:translate-y-[-1px]"
                    : "border-neutral-900 bg-[#0f0f16] opacity-60 cursor-not-allowed",
                ].join(" ")}
              >
                {/* badge */}
                {t.badge && (
                  <span
                    className={[
                      "absolute top-3 right-3 text-[11px] px-2 py-[3px] rounded-full border",
                      t.badge.toLowerCase().includes("new")
                        ? "bg-orange-500/15 text-orange-300 border-orange-500/30"
                        : "bg-neutral-700/30 text-gray-300 border-neutral-600/50",
                    ].join(" ")}
                  >
                    {t.badge}
                  </span>
                )}

                {/* icon */}
                <div className="text-3xl mb-3">{t.emoji}</div>

                {/* title */}
                <h2 className="text-lg md:text-xl font-semibold">
                  {t.title}
                </h2>

                {/* tagline */}
                <p className="mt-1 text-sm text-gray-300">{t.tagline}</p>

                {/* CTA line */}
                <div
                  className={[
                    "mt-4 inline-flex items-center gap-2 text-sm font-semibold",
                    t.enabled ? "text-orange-400" : "text-gray-500",
                  ].join(" ")}
                >
                  {t.enabled ? (
                    <>
                      Open trick
                      <span aria-hidden>↗</span>
                    </>
                  ) : (
                    <>Not available yet</>
                  )}
                </div>
              </div>
            );

            // enabled → puri card clickable (Link wrap)
            return t.enabled ? (
              <Link
                key={t.slug}
                href={`/trick/${t.slug}`}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-2xl"
              >
                {CardInner}
              </Link>
            ) : (
              <div key={t.slug} className="block">{CardInner}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
