/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#080808',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],        // body 
        heading: ["Space Grotesk", "sans-serif"], 
      }
    },
  },
  plugins: [],
}

