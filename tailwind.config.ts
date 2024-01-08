import type { Config } from "tailwindcss";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Noto Sans JP",
        "ＭＳ Ｐゴシック",
        "MS PGothic",
        "メイリオ",
        "Meiryo",
        "sans-serif",
      ],
    },
    colors: {
      white: "#FFFFFF",
      light: "#F5F5F5",
      primary: "#DC515C",
      secondary: "#526071",
      border: "#5260714D",
      transparent: "#FFFFFF00",
      dark: "#121212",
      darkoverlay: "#2C2C2C",
      darkborder: "#414141",
      darkhighlight: "#414141",
    },
    extend: {},
  },
  plugins: [require("@headlessui/tailwindcss")],
};

export default config;
