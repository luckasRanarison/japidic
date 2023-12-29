"use client";

import Image from "next/image";
import Icon from "@/assets/fuji.png";
import { RiGithubFill } from "react-icons/ri";
import useScroll from "@/hooks/useScroll";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const { scrollY } = useScroll();

  return (
    <nav
      className={`z-20 top-0 py-4 px-8 duration-300
      flex items-center justify-between
      text-secondary dark:text-light dark:bg-dark ${
        scrollY > 200
          ? "sticky shadow-sm shadow-shadow bg-white"
          : "relative bg-light"
      }`}
    >
      <div className="flex items-center space-x-3">
        <Image src={Icon} alt="icon" height={35} />
        <span className="font-semibold text-xl">
          <span>j</span>
          <span className="text-primary">API</span>
          <span>dic</span>
        </span>
      </div>
      <div className="flex items-center space-x-6">
        <ThemeButton />
        <a
          href="https://github.com/luckasRanarison/japidic"
          aria-label="Github repository"
        >
          <RiGithubFill size={24} className="hover:text-primary duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
