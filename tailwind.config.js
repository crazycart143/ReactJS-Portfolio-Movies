/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  important: "#root",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      visibility: ["group-hover"],
    },
    gridTemplateRows: {
      new3: "repeat(3, minmax(100px, 200px))", //width, height
    },
    gridTemplateColumns: {
      nav1: "repeat(1, minmax(0, 0.25fr) 1fr)",
      login1: "repeat(1, minmax(0, 1fr) 0.5fr)",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
