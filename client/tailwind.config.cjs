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
    themes: ["dark","light"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
