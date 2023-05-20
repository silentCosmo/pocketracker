/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      fontFamily:{
        'unbounded': ['Unbounded', 'cursive'],
        'quicksand' : ['Quicksand', 'sans-serif'],
        'rubik' : ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

