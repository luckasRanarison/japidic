import type { Metadata } from "next";
import "./index.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "japidic",
  description: "Free online japanese dictionary",
  keywords: ["japanese", "dictionary"],
  openGraph: {
    title: "japidic",
    description: "Free online japanese dictionary",
    locale: "en_US",
    type: "website",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  return (
    <html
      lang="en"
      className={`${theme?.value === "dark" && "dark"}
      h-full overflow-y-auto`}
    >
      <body
        className="flex flex-col h-full overflow-y-auto
        bg-light dark:bg-dark duration-300"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
