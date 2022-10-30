/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: "Iceberg",
    },
    colors: {
      transparent: "transparent",

      "grey-100": "#C3C5C7",
      "grey-400": "#CBCBCB",
      "grey-600": "#4D4D4D",
      "grey-800": "#222222",

      White: "#fff",
      Black: "#000",

      "red-300": "#F02C3D",
      "red-600": "#E34B58",
    },
    extend: {
      backgroundImage: {
        F1: "url('./src/assets/F1-Image.png')",
      },
    },
  },
  plugins: [],
};
