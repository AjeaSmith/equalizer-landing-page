/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        darkPurple: 'hsl(273, 85%, 13%)',
        lightPurple: 'hsl(271, 12%, 34%)',
        veryLightPurple: 'hsl(276, 100%, 99%)',
        white: 'hsl(0, 0%, 100%)',
        green: 'hsl(150, 100%, 63%)'
      },
    },
  },
  plugins: [],
}

