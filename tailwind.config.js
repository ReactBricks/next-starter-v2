const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./react-bricks/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        newsLetter:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1) , 0 5px 15px 0 rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
