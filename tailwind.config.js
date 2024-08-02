/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        primary: "#ffffff",
        secondary: "#001938",
        tertiary: "#12D576",
        cardBackgroundDark: "#FFFFFF1A",
        cardBackgroundLight: "#D2E6FF29",
        cardBorderColorDark: "#D2E6FF4D",
        cardBorderColorLight: "#A4CDFF4D",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
