import Link from "next/link";

const topics = [
  {
    slug: "satta-matka-kya-hai",
    title: "📌 Satta Matka क्या है?",
    preview:
      "सट्टा मटका भारत का एक पुराना नंबर गेम है, जो कपास रेटिंग से शुरू हुआ और आज ऑनलाइन प्लेटफ़ॉर्म तक पहुँच चुका है...",
  },
  {
    slug: "satta-matka-kaise-kaha-khelen",
    title: "🎯 Satta Matka कैसे और कहाँ खेल सकते हैं?",
    preview:
      "आज के समय में मटका ज़्यादातर ऑनलाइन ऐप्स और वेबसाइट्स पर खेला जाता है। मार्केट जैसे – Sita, Kamal, Andra, Star Tara बहुत मशहूर हैं...",
  },
  {
    slug: "satta-matka-kanuni-niyam",
    title: "⚖️ Satta Matka के कानूनी नियम",
    preview:
      "भारत में जुआ और सट्टा अधिकतर राज्यों में अवैध है, लेकिन कुछ राज्यों में ऑनलाइन गेमिंग के तहत छूट दी जाती है...",
  },
  {
    slug: "satta-matka-online-savdhani",
    title: "🔐 Online खेलते समय सावधानियां",
    preview:
      "ऑनलाइन मटका खेलते समय हमेशा trusted वेबसाइट चुनें, secure payment करें और अपनी personal details कभी share न करें...",
  },
];

export default function MatkaTipsPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold text-orange-400 mb-8 text-center">
        🎯 Matka Tips & Articles
      </h1>

      {/* Compact vertical boxes */}
      <div className="grid gap-6 md:grid-cols-3">
        {topics.map((topic) => (
          <div
            key={topic.slug}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-4 text-left shadow-md"
          >
            <h2 className="text-lg font-semibold text-emerald-400 mb-2">
              {topic.title}
            </h2>
            <p className="text-gray-300 text-sm">
              {topic.preview}{" "}
              <Link
                href={`/matka-tips/${topic.slug}`}
                className="text-orange-400 font-medium hover:underline"
              >
                See More →
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
