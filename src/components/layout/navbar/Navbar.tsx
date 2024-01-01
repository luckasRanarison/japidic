"use client";

import Image from "next/image";
import Icon from "@/assets/fuji.png";
import { RiGithubFill } from "react-icons/ri";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <nav
      className="z-20 sticky top-0 mb-6 py-4 px-8 duration-300
      flex items-center justify-between
      border-b-[1px] border-shadow dark:border-darkborder shadow-sm
      text-secondary dark:text-light bg-white dark:bg-dark"
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
