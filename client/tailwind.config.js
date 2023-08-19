/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#101214",
        mainLight: "#2E3338",
        secondary: "#FFC857",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
