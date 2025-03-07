import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      title: ["Kaushan Script", "sans-serif"]
    },
    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c"
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#880808",
          // DEFAULT: "#00f260",
        },
        end: {
          DEFAULT: "#bea6a0",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          500: "#0f1115",
          700: "#202125"
        }
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
    },
  },
  varianrs: {
    extend: {
      boxShadow:["dark"]
    }
  },
  plugins: [],
} satisfies Config;
