// components/SeoKeywords.tsx
import Link from "next/link";

export default function SeoKeywords() {
  const KEYWORDS: { text: string; href: string }[] = [
    { text: "satta matka", href: "/trick/hybrid-95-tool" },
    { text: "satta matta matka", href: "/trick/final-number-chart" },
    { text: "kalyan satta matka", href: "/trick/ai-jodi-predictor" },
    { text: "satta matta matka 143", href: "/trick/hybrid-95-tool" },
    { text: "matka satta", href: "/trick/final-number-chart" },
    { text: "satta matka result", href: "/trick/hybrid-95-tool" },
    { text: "madhur satta matka", href: "/trick/final-number-chart" },
    { text: "satta matka satta matka", href: "/trick/ai-jodi-predictor" },
    { text: "satta matka dp box", href: "/trick/hybrid-95-tool" },
    { text: "satta matka dpboss", href: "/trick/final-number-chart" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-300">
        {KEYWORDS.map((k) => (
          <Link
            key={k.text}
            href={k.href}
            className="px-3 py-1 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
          >
            {k.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
