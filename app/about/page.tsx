"use client";

import { Sparkles, ShieldCheck, Trophy, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b10] via-[#12121a] to-black text-white">
      {/* ===== Hero Section ===== */}
      <section className="relative py-16 sm:py-24 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500/20 via-pink-500/10 to-transparent blur-3xl" />
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">
          About Real Matka
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed">
          RealMatka.in सिर्फ एक website नहीं, बल्कि{" "}
          <span className="font-semibold text-orange-300">India का सबसे trusted platform</span>{" "}
          है Matka lovers के लिए। हमारा mission है — आपको सटीक{" "}
          <strong>predictions, charts और winning strategies</strong> देना ताकि आप
          केवल luck नहीं बल्कि data और logic के साथ खेलें।
        </p>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="py-16 bg-white/[0.03] border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-400/20">
            <Trophy className="mx-auto h-10 w-10 text-orange-300 mb-3" />
            <h3 className="font-bold text-lg mb-2">95%+ Accuracy</h3>
            <p className="text-sm text-white/70">
              हमारी Hybrid-95 और Final Chart tricks हजारों बार test की गई हैं, और proven
              accuracy देती हैं।
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-400/20">
            <Sparkles className="mx-auto h-10 w-10 text-pink-300 mb-3" />
            <h3 className="font-bold text-lg mb-2">Advanced Tools</h3>
            <p className="text-sm text-white/70">
              AI-powered calculators, stage-wise plans और prediction charts — सब कुछ एक जगह।
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-400/20">
            <ShieldCheck className="mx-auto h-10 w-10 text-emerald-300 mb-3" />
            <h3 className="font-bold text-lg mb-2">Trusted & Transparent</h3>
            <p className="text-sm text-white/70">
              कोई hidden trick नहीं — हर calculation openly दिखाया जाता है, ताकि आपका भरोसा बना रहे।
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 to-transparent border border-sky-400/20">
            <Users className="mx-auto h-10 w-10 text-sky-300 mb-3" />
            <h3 className="font-bold text-lg mb-2">Growing Community</h3>
            <p className="text-sm text-white/70">
              हजारों players रोज़ हमारे tools से फायदा ले रहे हैं — WhatsApp groups और live support उपलब्ध।
            </p>
          </div>
        </div>
      </section>

      {/* ===== Detailed Content ===== */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-orange-300">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            RealMatka.in का mission है —{" "}
            <strong>हर player को सही direction</strong> देना। Satta Matka को कई लोग
            केवल gambling मानते हैं, लेकिन हम इसे{" "}
            <em>strategic play with responsible gaming</em> बनाना चाहते हैं।  
            हमारी strategies आपको सिखाती हैं कि कैसे छोटे bets से consistent
            profit निकाला जा सकता है।
          </p>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-orange-300">
            What We Offer
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-white/80 leading-relaxed">
            <li>🔥 Hybrid-95 Tool → Top 20 hot jodis (GH10 + RH5 + B5)</li>
            <li>📊 Final Number Chart → Previous day jodi से 4 strong digits</li>
            <li>🤖 AI Jodi Predictor → Morning/Day/Night data से AI-based digits</li>
            <li>💰 Stage-wise Fixed Profit Plans → हर stage पर guaranteed profit lock</li>
            <li>🟢 WhatsApp Support → Live help और daily guidance</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-orange-300">
            Responsible Play
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            RealMatka.in हमेशा यही सलाह देता है कि{" "}
            <span className="font-semibold text-emerald-300">
              जिम्मेदारी से खेलें
            </span>
            ।  
            हमारा हर tool शैक्षिक जानकारी और data analysis पर आधारित है।  
            जीत और हार दोनों संभव हैं, लेकिन discipline और strategy से आपका
            success ratio कई गुना बढ़ सकता है।
          </p>
        </div>
      </section>

      {/* ===== Call to Action ===== */}
      <section className="py-16 text-center border-t border-white/10 bg-gradient-to-br from-orange-500/10 via-pink-500/5 to-transparent">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-orange-200">
          Ready to Play Smarter?
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/75 mb-6">
          Join thousands of players who trust RealMatka.in for accurate predictions and 
          winning strategies. Data + Logic = Smart Play.
        </p>
        <a
          href="/trick"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
        >
          Explore Tricks
        </a>
      </section>
    </div>
  );
}
