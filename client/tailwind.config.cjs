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
    themes: ["light"]
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  corePlugins: {
    preflight: true,
  }
};
