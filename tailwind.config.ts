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
      "primary-dark": "#7DCFFF",
      secondary: "#526071",
      dark: "#1A1B26",
      black: "#000000",
      transparent: "#FFFFFF00",
    },
    extend: {},
  },
  plugins: [],
};

export default config;
