/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ahbap' : '#7fc349',
        'youtube': '#fb0000'
      }
    },
  },
  plugins: [],
}