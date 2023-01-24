/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  important: "#root",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
