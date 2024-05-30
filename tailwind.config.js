/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "lexand-deca": ["Lexand Deca", "sans-serif"],
      },
      colors: {
        "very-dark-blue": "#0A0C1C",
        "dark-blue": "#1B1937",
        "soft-violet": "#AB5CDB",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
