/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/*.js", "index.html"],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.4em',
    },
    fontSize: {
      base: '1.75rem'
    },
    screens: {
      sm: '200px',
      md: '600px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      },
      colors: {
        lightCyan: 'hsl(193, 38%, 86%)',
        neonGreen: 'hsl(150, 100%, 66%)',
        grayishBlue: 'hsl(217, 19%, 38%)',
        darkGrayishBlue: 'hsl(217, 19%, 24%)',
        darkBlue: 'hsl(218, 23%, 16%)'
      }
    },
  },
  plugins: [],
}
