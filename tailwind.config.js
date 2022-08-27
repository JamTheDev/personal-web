/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      serrat: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}
