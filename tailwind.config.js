const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    container: {},
    extend: {
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      backgroundColor: {
        dark: "#0a162a",
        darkest: "#0b1120",
      },
      textColor: {
        dark: "#f1f5f9",
        primary: "#3b82f6",
        red: "#cd1e25",
      },
      borderColor: {
        red: "#cd1e25",
      },
    },
  },
  plugins: [animate],
};
