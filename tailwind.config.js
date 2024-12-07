/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extends: {
      fontFamily: {
        'Poppins': ['"Poppins"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary_blue: '#6EA6E7', 
      },
    }
  },
  plugins: [],
}

