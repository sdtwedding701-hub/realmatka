import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script"; // ✅ Add this

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Real Matka — Results, Charts & Predictions",
    template: "%s | Real Matka",
  },
  description: "RealMatka.in — colorful results & charts (EN + HI).",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ✅ Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-616XWXHD5Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-616XWXHD5Z');
          `}
        </Script>

        {/* Sticky header */}
        <Header />

        {/* Main */}
        <main className="pt-6">{children}</main>

        {/* ✅ Footer on every page */}
        <Footer />
      </body>
    </html>
  );
}
