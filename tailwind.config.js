/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./frontend/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#193364'
      },
      fontFamily: {
        myFont: ['Diphylleia','serif']
      }
    },
  },
  plugins: [],
}

