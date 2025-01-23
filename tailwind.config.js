/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      blue: [{ 100: "#1fb6ff", 200: "#229ad6", 300: "#2a769c",400:"#285369",500:"#223b47" }],
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#5d6773",
      "gray-light-light": "#c0c8d1",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["'Sofia Sans', sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
