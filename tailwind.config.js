/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        teal: '#66E2DC',
        darkOrange: '#FA7453',
        lightOrange: '#FFB964',
        white: '#FCFAF9',
        black: '#191826'
      },
      screens: {
      'tablet': '1023px',
      'desktop': '1439px',
      },
      lineHeight: {
        '26': '1.625rem',
        '34': '2.125rem',
        '52': '3.25rem',
        '88': '5.5rem',
      }
    }
  },
  plugins: [],
}

