import type { Config } from "tailwindcss";

const config: Config = {
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
      transparent: "#FFFFFF00",
    },
    extend: {},
  },
  plugins: [],
};

export default config;
