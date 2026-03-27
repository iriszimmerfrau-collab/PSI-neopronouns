import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#7c3aed",
        "accent-light": "#a78bfa",
        "accent-dark": "#5b21b6",
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', "sans-serif"],
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
