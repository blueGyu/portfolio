import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        next: "#000000",
        ts: "#3178c6",
        js: "#f0e151",
      },
      backgroundImage: {
        credit: "url('/img/credit.svg')",
      },
      animation: {
        sunset: "sunset 2s linear infinite",
        credit: "sunset 4s linear infinite",
      },
      keyframes: {
        sunset: {
          "0%": { backgroundPosition: "50% 0%" },
          "100%": { backgroundPosition: "50% 100%" },
        },
        credit: {
          "0%": { backgroundPosition: "50% 100%" },
          "100%": { backgroundPosition: "50% 0%" },
        },
        ping: {
          "60%, 100%": {
            transform: "scale(1.05)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
