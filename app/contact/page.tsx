"use client";

import { Mail, MessageCircle, Users, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "RealMatka.in क्या service देता है?",
      a: "हम prediction tools, charts और strategies provide करते हैं ताकि आप better play decisions ले सकें। सभी tricks tested और optimized हैं।",
    },
    {
      q: "क्या ये free है?",
      a: "हाँ, हमारे सारे tools और charts completely free हैं। बस community join करें और daily updates पाएं।",
    },
    {
      q: "अगर मुझे कोई problem आए तो क्या करूँ?",
      a: "आप WhatsApp group join कर सकते हैं, direct WhatsApp message भेज सकते हैं या हमें email लिख सकते हैं। Support team 24x7 उपलब्ध है।",
    },
    {
      q: "क्या predictions 100% accurate हैं?",
      a: "कोई भी prediction 100% accurate नहीं हो सकता, लेकिन हमारे algorithms ने past data पर 95%+ success rate दिखाया है।",
    },
    {
      q: "Contact करने का सबसे fast तरीका क्या है?",
      a: "Direct WhatsApp (+91 8446012081) सबसे तेज़ और आसान तरीका है immediate support पाने का।",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b10] via-[#12121a] to-black text-white">
      {/* ===== Hero Section ===== */}
      <section className="relative py-16 sm:py-24 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-500/20 via-cyan-500/10 to-transparent blur-3xl" />
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-300 to-cyan-200 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed">
          आपके सवाल, सुझाव या support की ज़रूरत है?  
          RealMatka.in टीम से जुड़ने के लिए नीचे दिए गए contact options का इस्तेमाल करें।
        </p>
      </section>

      {/* ===== Contact Options ===== */}
      <section className="py-16 bg-white/[0.03] border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {/* WhatsApp Group */}
          <a
            href="https://chat.whatsapp.com/B6rOvsK6MMGKa8DBTtvMs8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-400/20 hover:border-green-400/40 transition"
          >
            <Users className="mx-auto h-10 w-10 text-green-300 mb-3" />
            <h3 className="font-bold text-lg mb-2">Join WhatsApp Group</h3>
            <p className="text-sm text-white/70">
              Community से जुड़ें और रोज़ाना tricks, charts और predictions पाएं।
            </p>
          </a>

          {/* Direct WhatsApp Chat */}
          <a
            href="https://wa.me/918446012081"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-400/20 hover:border-emerald-400/40 transition"
          >
            <MessageCircle className="mx-auto h-10 w-10 text-emerald-300 mb-3" />
            <h3 className="font-bold text-lg mb-2">Direct WhatsApp</h3>
            <p className="text-sm text-white/70">
              हमारी टीम से सीधे चैट करें: <br />
              <span className="font-semibold text-emerald-200">
                +91 8446012081
              </span>
            </p>
          </a>

          {/* Email Support */}
          <a
            href="mailto:support@realmatka.in"
            className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-400/20 hover:border-cyan-400/40 transition"
          >
            <Mail className="mx-auto h-10 w-10 text-cyan-300 mb-3" />
            <h3 className="font-bold text-lg mb-2">Email Support</h3>
            <p className="text-sm text-white/70">
              किसी भी query या feedback के लिए हमें लिखें: <br />
              <span className="font-semibold text-cyan-200">
                realmatka@gmail.com
              </span>
            </p>
          </a>
        </div>
      </section>

      {/* ===== Call to Action ===== */}
      <section className="py-16 text-center border-t border-white/10 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-emerald-200">
          Let’s Connect Today
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/75 mb-6">
          WhatsApp group join करें, direct chat करें या email लिखें —  
          हमसे जुड़ना हमेशा आसान है।
        </p>
        <a
          href="https://chat.whatsapp.com/B6rOvsK6MMGKa8DBTtvMs8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
        >
          Join WhatsApp Group
        </a>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="py-20 bg-white/[0.02] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-10">
            <HelpCircle className="h-7 w-7 text-emerald-300" />
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-white">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-white/70 transform transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-sm text-white/70">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
