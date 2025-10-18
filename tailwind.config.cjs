/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // include root HTML
    "./src/**/*.{js,ts,jsx,tsx}", // include all React/Vite source files
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
