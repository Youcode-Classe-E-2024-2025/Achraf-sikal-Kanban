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
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}

