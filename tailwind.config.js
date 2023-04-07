/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        teal: '#66E2DC',
        darkOrange: '#FA7453',
        lightOrange: '#FFB964',
        whiteClr: '#FCFAF9',
        black: '#191826'
      },
      screens: {
      'tablet': '1023px',
      'desktop': '1439px',
      },
      lineHeight: {
        '26': '1.625rem',
        '28': '1.75rem',
        '34': '2.125rem',
        '48': '3rem',
        '52': '3.25rem',
        '64': '4rem',
        '88': '5.5rem',
      },
      backgroundImage: {
        'pattern-1': "url('/assets/bg-pattern-1.svg')",
        'pattern-2': "url('/assets/bg-pattern-2.svg')",
        'sm-image': "url('/assets/bg-main-mobile.png')",
        'md-image': "url('/assets/bg-main-tablet.png')",
        'lg-image': "url('/assets/bg-main-desktop.png')"
      }
    },
    fontSize: {
      40: '2.5rem',
      32: '2rem',
      64: '4rem',
      88: '5.5rem',
      sm: '0.8rem',
      lg: '1.125rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}

