"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0b0b10] via-[#12121a] to-black text-white border-t border-white/10">
      {/* glowing gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-orange-500/15 via-pink-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-[1] max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-emerald-300 to-cyan-200 bg-clip-text text-transparent">
            Real Matka
          </h2>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            Powerful prediction tools, charts & strategies (Hybrid-95, Final Number Chart, AI Jodi Predictor)
            designed for responsible play. Modern UI • Dual language • Fast & clean experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-emerald-300">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/" className="hover:text-white transition">🏠 Home</Link></li>
            <li><Link href="/trick" className="hover:text-white transition">🎯 Tricks</Link></li>
            <li><Link href="/about" className="hover:text-white transition">ℹ️ About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">📞 Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition">🔒 Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="font-semibold mb-3 text-emerald-300">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <MessageCircle size={16} className="text-emerald-300" />
              <a
                href="https://chat.whatsapp.com/B6rOvsK6MMGKa8DBTtvMs8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                WhatsApp Group (join)
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-emerald-300" />
              <a
                href="https://wa.me/918446012081"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                +91 8446012081 (Direct WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-emerald-300" />
              <a href="mailto:support@realmatka.in" className="hover:text-white transition">
                support@realmatka.in
              </a>
            </li>
          </ul>

          <div className="mt-4 flex gap-4">
            <a href="#" className="hover:text-emerald-300 transition" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" className="hover:text-emerald-300 transition" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" className="hover:text-emerald-300 transition" aria-label="Instagram">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-[1] border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} RealMatka.in • Educational information only • 18+ • Play responsibly
      </div>
    </footer>
  );
}
