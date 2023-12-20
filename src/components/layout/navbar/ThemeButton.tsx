"use client";

import { setCookies } from "@/actions/cookies";
import { useEffect, useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

type Theme = "light" | "dark";

const ThemeButton = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const getUpdatedTheme = () =>
    document.documentElement.classList.contains("dark") ? "dark" : "light";

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const currentTheme = getUpdatedTheme();
    setTheme(currentTheme);
    setCookies("theme", currentTheme);
  };

  useEffect(() => {
    setTheme(getUpdatedTheme());
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="hover:rotate-180 hover:text-primary duration-500"
    >
      {theme == "light" ? <RiSunFill size={24} /> : <RiMoonFill size={24} />}
    </button>
  );
};

export default ThemeButton;
