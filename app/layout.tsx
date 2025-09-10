import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // ✅ नया footer import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Real Matka — Results, Charts & Predictions", template: "%s | Real Matka" },
  description: "RealMatka.in — colorful results & charts (EN + HI).",
  icons: { icon: "/logo.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Sticky header */}
        <Header />

        {/* Main */}
        <main className="pt-6">
          {children}
        </main>

        {/* ✅ नया सुंदर Footer (हर पेज पर) */}
        <Footer />
      </body>
    </html>
  );
}
