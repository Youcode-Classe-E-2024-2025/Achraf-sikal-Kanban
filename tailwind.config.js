/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./assets/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
      },
      colors: {
        'purples': '#2600FF',
      }
    },
  },
  plugins: [],
}

