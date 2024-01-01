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
      light: "#FAFAFA",
      highlight: "#F2F2F2",
      primary: "#DC515C",
      secondary: "#526071",
      transparent: "#FFFFFF00",
      dark: "#0A0A0A",
      darkoverlay: "#121212",
      darkborder: "#252525",
      darkhighlight: "#181818",
      shadow: "#00000025",
    },
    extend: {},
  },
  plugins: [require("@headlessui/tailwindcss")],
};

export default config;
