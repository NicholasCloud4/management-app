/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pokemon-light-red': '#FF6961', // Softer red
        'pokemon-light-yellow': '#FDFD96', // Pale yellow
        'pokemon-light-blue': '#77BFFF', // Sky blue
        'pokemon-dark-blue': '#003A70',
        'pokemon-grey': '#F5F5F5', // Light grey for background
        'pokemon-dark-grey': '#A9A9A9', // For text contrast
        'pokemon-light-green': '#77DD77',
        'pokemon-orange': '#FFB347',
        'pokemon-light-orange': '#FFA726',
        'pokemon-purple': '#C183C1'
      },
    },
  },
  plugins: [],
}

