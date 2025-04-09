import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},plugins: [require("tailwindcss-animate"), require("daisyui")],
  }} satisfies Config;