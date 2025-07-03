/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor : {
        'primary' : 'rgb(10 33 41)'
      }
    },
    fontFamily: {
      'hero-font' : 'Caveat'
    }
  },
  plugins: [],
}

