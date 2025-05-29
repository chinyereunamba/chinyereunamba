import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-signika)"],
        mono: ["var(--font-fira)"],
      },
      colors: {
        background: "#0f0f0f",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        "secondary-faint": "#0ea5e94a",
        accent: "#171717",

        underline: "#007bff",
        text: "#d4d4d4",
        border: "#e5e7eb",
        title: "#ffffff",
        "box-shadow": "#162859",
        "icon-inactive": "#a3a3a3",
        warning: "#ffa500",
      },
      fontSize: {
        s: "16px",
        n: "20px",
        nt: "26px",
        ms: "45px",
        m: "60px",
        l: "70px",
        ls: "110px",
        xl: "150px",
      },
      spacing: {
        padding: "30px",
      },
      boxShadow: {
        custom: "10px 0 60px 4px #162859",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
