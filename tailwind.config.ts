import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        muted: "#666A73",
        paper: "#FAF9F7",
        line: "#E7E2DA",
        accent: "#315F8E",
        accentSoft: "#E8F0F7",
        graphite: "#2B2F36"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(23, 23, 23, 0.07)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
