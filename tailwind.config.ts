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
    colors: {
      white: "#FFFFFF",
      light: "#E7E8ED",
      primary: "#DC515C",
      secondary: "#526071",
      dark: "#1A1B26",
      black: "#000000",
      transparent: "#FFFFFF00",
      darkbg: "#121212",
      darkoverlay: "#2C2C2C",
    },
    extend: {},
  },
  plugins: [],
};

export default config;
