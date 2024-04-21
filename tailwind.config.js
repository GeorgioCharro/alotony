/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],  // Added "jsx" to include JSX files
  theme: {
    extend: {
      colors: {

        'custom-blue': '#1382BA',
        'yellow': '#F29F05'
      },

    },
  },
  plugins: [],
}