module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flexGrow: {
        '5': 5,
        '8': 8,
        '9': 9,
        '10': 10,
        '1': 1,
        '7': 7,
        '3': 3,
        '2': 2,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}