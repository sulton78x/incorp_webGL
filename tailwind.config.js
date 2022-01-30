module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caslon_display: ["Libre Caslon Display", "serif"],
        caslon_text: ["Libre Caslon Text", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
