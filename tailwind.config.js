const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        inconsolata: ['Inconsolata', 'monospace'],
      },
      colors: {
        primary: colors.blue[600],
        lightPrimary: colors.blue[500],
        secondary: colors.yellow[600],
        error: colors.red[500],
        success: colors.green[600],
        successLight: colors.green[50],
        warning: colors.orange[600],
        info: '#FB8A00',
      }
    },
  },
  plugins: [
  ],
}

