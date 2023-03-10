const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./react-bricks/**/*.tsx",
    "./react-bricks/bricks/**/*.{ts, tsx}",
  ],
  darkMode: "class",
  theme: {},
};
