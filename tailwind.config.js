/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '-20px -20px 30px, 20px 20px 30px ',
      }
    },
  },
  plugins: [],
}

