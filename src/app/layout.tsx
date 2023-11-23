import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./index.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const notoSansJp = Noto_Sans_JP({
  fallback: [
    "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro",
    "Osaka",
    "メイリオ",
    "Meiryo",
    "ＭＳ Ｐゴシック",
    "MS PGothic",
    "sans-serif",
  ],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "japidic",
  description: "Japanese dictionary",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className="h-full overflow-y-auto">
    <body
      className={`${notoSansJp.className}
      flex flex-col h-full overflow-y-auto
      bg-light dark:bg-darkbg duration-300`}
    >
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
