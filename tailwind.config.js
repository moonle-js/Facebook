/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    screens: {
      'balaca': {'max': '460px'},

      'orta': {'max': '760px'},

      'boyuk': {'max': '1023px'},
    },
  },
  plugins: [],
}

