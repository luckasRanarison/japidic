"use client";

import Image from "next/image";
import Icon from "@/assets/fuji.png";
import { RiGithubFill, RiSunFill } from "react-icons/ri";
import useScroll from "@/hooks/UseScroll";

const Navbar = () => {
  const { scrollY } = useScroll();

  // FIXME: persistent dark mode
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`z-20 top-0 sticky py-5 px-8 duration-300
      flex items-center justify-between
      text-secondary bg-light dark:text-light dark:bg-dark ${
        scrollY > 20 && "shadow-md"
      }`}
    >
      <div className="flex items-center space-x-3">
        <Image src={Icon} alt="icon" height={35} />
        <span className="font-semibold text-xl">
          <span>j</span>
          <span className="text-primary dark:text-light">API</span>
          <span>dic</span>
        </span>
      </div>
      <div className="flex space-x-6">
        <button onClick={toggleTheme}>
          <RiSunFill
            size={24}
            className="hover:rotate-180 hover:text-primary duration-500"
          />
        </button>
        <a href="https://github.com/luckasRanarison/japidic">
          <RiGithubFill size={24} className="hover:text-primary duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
