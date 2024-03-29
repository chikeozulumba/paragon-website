/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      primary: ["Epilogue"],
      body: ['"Typo Grotesk"'],
    },
    extend: {
      screens: {
        xl: "1800px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require('@tailwindcss/typography')],
};
