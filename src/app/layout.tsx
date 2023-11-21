import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./index.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const notoSansJp = Noto_Sans_JP({
  fallback: ["Open Sans"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "japidic",
  description: "Japanese dictionary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${notoSansJp.className} 
        flex flex-col h-1 min-h-screen 
        bg-light dark:bg-dark duration-300`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
