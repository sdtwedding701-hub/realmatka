export default function SattaMatkaKyaHai() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      {/* Title */}
      <h1 className="text-3xl font-bold text-orange-400 mb-4">
        📌 Satta Matka क्या है?
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        Published on: {new Date().toLocaleDateString("hi-IN")}
      </p>

      {/* Intro */}
      <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-700/10 border border-emerald-500/20 rounded-xl p-6 mb-8">
        <p className="text-gray-200 leading-relaxed">
          Satta Matka भारत का एक पारंपरिक नंबर गेम है जिसकी शुरुआत 1960 के दशक में हुई।
          पहले इसे कपास (Cotton) के ओपनिंग और क्लोज़िंग रेट्स पर खेला जाता था,
          लेकिन समय के साथ यह एक{" "}
          <span className="text-emerald-400 font-semibold">
            नंबर-बेस्ड लॉटरी सिस्टम
          </span>{" "}
          में बदल गया। आज यह खेल देशभर में “Matka” के नाम से जाना जाता है।
        </p>
      </div>

      {/* Section: कैसे खेला जाता है */}
      <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
        🎲 Satta Matka कैसे खेला जाता है?
      </h2>
      <ul className="list-disc list-inside text-gray-300 mb-6 leading-relaxed">
        <li>खेल में 0 से 9 तक के अंक उपयोग किए जाते हैं।</li>
        <li>इन अंकों से <b>Jodi</b> (दो अंकों का जोड़) और <b>Panna</b> (तीन अंकों का सेट) बनता है।</li>
        <li>हर दिन/सेशन (Morning, Day, Night) में एक <b>Open Digit</b> और <b>Close Digit</b> घोषित होता है।</li>
        <li>खिलाड़ियों का काम इन Digits या Jodi/Panna का अंदाज़ा लगाना होता है।</li>
      </ul>
      <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-8 text-sm text-gray-300">
        <p>
          👉 Example: अगर Open = <b>3</b> और Close = <b>7</b> है → तो उस दिन की Jodi = <b>37</b> मानी जाएगी।
        </p>
      </div>

      {/* Section: इतिहास */}
      <h2 className="text-2xl font-semibold text-emerald-400 mb-3">🕰️ इतिहास</h2>
      <p className="text-gray-300 mb-8 leading-relaxed">
        शुरुआत <b>Ratan Khatri</b> नाम के व्यापारी ने की थी। पहले इसे{" "}
        <i>Ankada Jugar</i> कहा जाता था और इसमें लोग New York Cotton Exchange के रेट्स पर सट्टा लगाते थे।
        जब यह सिस्टम बंद हुआ, तब “Satta Matka” अपने वर्तमान रूप में आ गया।
      </p>

      {/* Section: शब्द */}
      <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
        📊 Satta Matka में प्रयोग होने वाले शब्द
      </h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <p><b>Open Digit:</b> दिन की पहली संख्या</p>
          <p><b>Close Digit:</b> दिन की आखिरी संख्या</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <p><b>Jodi:</b> Open + Close का जोड़ (जैसे 4 और 6 → 46)</p>
          <p><b>Panna:</b> तीन अंकों का समूह (जैसे 128, 469, 780)</p>
        </div>
      </div>

      {/* Section: कानूनी पहलू */}
      <h2 className="text-2xl font-semibold text-emerald-400 mb-3">⚖️ कानूनी पहलू</h2>
      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-8">
        <p className="text-gray-300 leading-relaxed">
          भारत में अधिकतर राज्यों में <b>जुआ और सट्टेबाज़ी अवैध</b> मानी जाती है।
          हालांकि कुछ राज्यों में Online Gaming के तहत छूट दी जाती है।
          इसलिए खेलने से पहले अपने राज्य के कानून को समझना ज़रूरी है।
        </p>
      </div>

      {/* Section: क्यों खेलते हैं */}
      <h2 className="text-2xl font-semibold text-emerald-400 mb-3">🔑 क्यों लोग खेलते हैं?</h2>
      <ul className="list-disc list-inside text-gray-300 mb-8 leading-relaxed">
        <li>जल्दी पैसा कमाने की चाह</li>
        <li>Luck आज़माने का शौक</li>
        <li>दोस्तों या समाज में Trend</li>
      </ul>
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-8">
        <p className="text-gray-200">
          ⚠️ लेकिन याद रखो: <b>Satta Matka एक high-risk game है।</b>  
          इसमें समझदारी और Limit दोनों ज़रूरी हैं।
        </p>
      </div>

      {/* निष्कर्ष */}
      <h2 className="text-2xl font-semibold text-emerald-400 mb-3">✅ निष्कर्ष</h2>
      <p className="text-gray-300 leading-relaxed">
        Satta Matka भारत के इतिहास से जुड़ा एक लोकप्रिय नंबर गेम है।
        आज यह online platforms तक पहुँच चुका है और लाखों लोग इसे रोज़ खेलते हैं।
        लेकिन इसके साथ जुड़ी कानूनी पाबंदियों और सावधानियों को समझना बहुत ज़रूरी है।
      </p>

      <p className="text-gray-300 leading-relaxed mt-4">
        👉 हमेशा ध्यान रखो:
        <br />• Responsible तरीके से खेलो
        <br />• Limit तय करो
        <br />• और Fake Fix Number वालों से बचो
      </p>
    </div>
  );
}
