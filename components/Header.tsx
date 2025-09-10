"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/trick", label: "Trick" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="w-full bg-neutral-950/70 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img src="/logo.svg" alt="Real Matka" className="h-9 w-9 rounded-xl" />
            <div className="leading-tight">
              <div className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Real Matka
              </div>
              <div className="text-[11px] text-neutral-400">
                EN + HI • Results • Charts • Guides
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-2">
            {links.map((l) => {
              const active =
                pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "px-3 py-1.5 rounded-xl border text-sm transition",
                    active
                      ? "border-indigo-500/60 bg-indigo-500/10 text-white"
                      : "border-neutral-700 hover:border-neutral-500 text-neutral-200",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu */}
          <div className="sm:hidden relative">
            <button
              onClick={toggleMenu}
              className="px-3 py-1.5 rounded-xl border border-neutral-700 text-neutral-200"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl border border-neutral-800 bg-neutral-900/95 shadow-lg">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={closeMenu}
                    className="block px-3 py-2 rounded-lg hover:bg-neutral-800"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
