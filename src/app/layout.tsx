import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./index.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import { cookies } from "next/headers";

const notoSansJp = Noto_Sans_JP({
  fallback: [
    "ＭＳ Ｐゴシック",
    "MS PGothic",
    "メイリオ",
    "Meiryo",
    "sans-serif",
  ],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "japidic",
  description: "Japanese dictionary",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  return (
    <html
      lang="en"
      className={`${theme?.value === "dark" && "dark"} h-full overflow-y-auto`}
    >
      <body
        className={`${notoSansJp.className}
        flex flex-col h-full overflow-y-auto
        bg-light dark:bg-dark duration-300`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
