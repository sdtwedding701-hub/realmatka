import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoKeywords from "@/components/SeoKeywords";  // ✅ import

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { default: "Real Matka — Results, Charts & Predictions", template: "%s | Real Matka" },
  description: "RealMatka.in — colorful results & charts (EN + HI).",
  icons: { icon: "/logo.svg" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <main className="pt-6">{children}</main>

        {/* ✅ Footer से पहले keywords block */}
        <SeoKeywords />

        <Footer />
      </body>
    </html>
  );
}
