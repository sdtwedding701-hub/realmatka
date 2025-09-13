// app/matka-tips/[slug]/page.js
import { notFound } from "next/navigation";

const ARTICLES = {
  "satta-matka-kanuni-niyam": {
    title: "⚖️ Satta Matka के कानूनी नियम",
    content: [
      "सट्टा मटका भारत का एक बेहद लोकप्रिय लेकिन विवादित खेल है। इसकी शुरुआत 1960 के दशक में मुंबई से हुई थी। तब इसे 'अंक जुगार' कहा जाता था...",
      "कानूनी दृष्टिकोण से देखा जाए तो सट्टा मटका भारत में ज्यादातर राज्यों में अवैध है। इसका कारण है कि यह 'Public Gambling Act, 1867' के अंतर्गत आता है।",
      "भारत में जुए को नियंत्रित करने के लिए पहला बड़ा कानून ब्रिटिश सरकार ने 1867 में बनाया था। Public Gambling Act आज भी कई राज्यों में लागू है।",
      "महाराष्ट्र जैसे राज्यों में सट्टा मटका पूरी तरह प्रतिबंधित है, वहीं सिक्किम और नागालैंड ने कुछ हद तक ऑनलाइन गेमिंग को कानूनी मान्यता दी है।",
      "पिछले 10-15 सालों में ऑनलाइन सट्टा तेजी से बढ़ा है, लेकिन भारत में ऑनलाइन जुए पर कोई स्पष्ट कानून नहीं है।",
      "सुप्रीम कोर्ट ने कहा है कि 'Game of Skill' और 'Game of Chance' में फर्क किया जाना चाहिए। सट्टा मटका किस्मत आधारित खेल है, इसलिए इसे अवैध माना गया।",
      "यदि कोई व्यक्ति सट्टा मटका खेलते पकड़ा जाता है तो उसे जुर्माना और जेल दोनों हो सकते हैं।",
      "दुनिया के कई देशों जैसे अमेरिका, मकाऊ और यूके में जुए को कानूनी मान्यता दी गई है। भारत में फिलहाल इसे वैध बनाने की संभावना कम है।",
      "सट्टा मटका का सामाजिक असर गहरा है — कई परिवार आर्थिक संकट में डूब जाते हैं और अपराध बढ़ता है।",
      "निष्कर्ष: सट्टा मटका भारत में कानूनी रूप से प्रतिबंधित है। इसे केवल शैक्षिक और ऐतिहासिक दृष्टिकोण से समझें, खेलना अपराध है।",
    ],
  },
};

export default async function PostPage({ params }) {
  const { slug } = await params; // ✅ Next.js 15 fix
  const article = ARTICLES[slug];

  if (!article) return notFound();

  return (
    <div className="min-h-[100dvh] w-full bg-[#0b0b0f] text-white">
      <main className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-amber-300 via-rose-300 to-orange-400 bg-clip-text text-transparent">
            {article.title}
          </h1>
          <p className="mt-4 text-sm text-white/70">
            Published on:{" "}
            <span className="font-semibold text-orange-300">
              {new Date().toLocaleDateString("hi-IN")}
            </span>
          </p>
        </header>

        {/* Article content */}
        <article className="space-y-6">
          {article.content.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition"
            >
              <p className="text-[15px] leading-relaxed text-white/90">{p}</p>
            </div>
          ))}
        </article>

        {/* Highlight Note */}
        <div className="mt-10 rounded-xl border border-amber-400/30 bg-amber-500/10 p-5 text-amber-200 text-sm shadow-md">
          ⚠️ <b>Disclaimer:</b> यह लेख केवल शैक्षिक और ऐतिहासिक जानकारी के लिए है।  
          सट्टा मटका खेलना/खिलाना भारतीय क़ानून के तहत अपराध है।  
          इसे केवल पढ़ें, इसमें भाग न लें।
        </div>
      </main>
    </div>
  );
}
