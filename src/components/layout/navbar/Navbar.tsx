"use client";

import Image from "next/image";
import Icon from "@/assets/fuji.png";
import { RiGithubFill, RiMoonFill, RiSunFill } from "react-icons/ri";
import useScroll from "@/hooks/useScroll";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const isDarkMode = document.documentElement.classList.contains("dark");
    const currentTheme = isDarkMode ? "dark" : "light";
    sessionStorage.setItem("theme", currentTheme);
    setTheme(currentTheme);
  };

  useEffect(() => {
    const theme = sessionStorage.getItem("theme");

    if (theme == "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

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
        <button
          onClick={toggleTheme}
          className="hover:rotate-180 hover:text-primary duration-500"
        >
          {theme == "light" ? (
            <RiSunFill size={24} />
          ) : (
            <RiMoonFill size={24} />
          )}
        </button>
        <a href="https://github.com/luckasRanarison/japidic">
          <RiGithubFill size={24} className="hover:text-primary duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
