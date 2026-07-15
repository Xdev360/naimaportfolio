import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#FFFFFF",
        pink: "#FFC9F0",
        blue: "#9DDCFF",
        yellow: "#FFE68C",
      },
      fontFamily: {
        heading: ["var(--font-dm-sans)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 6px 20px rgba(17,17,17,0.06)",
        note: "3px 4px 0px rgba(17,17,17,0.08)",
        btn: "0 4px 0 0 rgba(17,17,17,0.15)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 5.5s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
