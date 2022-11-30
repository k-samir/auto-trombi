/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "comfortaa": ["Comfortaa", "cursive"],
      },
    },
  },
  daisyui: {
    themes: ["corporate"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  corePlugins: {
    preflight: true,
  }
};
