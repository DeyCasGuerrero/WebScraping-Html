/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 10px 20px rgba(0, 0, 0, 0.4)', // Define una sombra personalizada
      },
    },
  },
  plugins: [],
}