/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/cocktail.jpg)",
      },
    },
  },
  plugins: [],
}
