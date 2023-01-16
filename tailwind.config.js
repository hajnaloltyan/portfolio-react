/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mybike-image': 'url("./assets/MyBike.png")',
        'portfolio-image': 'url("./assets/Portfolio.png")',
      }
    },
  },
  plugins: [],
};
