/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius : {
      '3xl' : '25%'
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"], // Add your new font
      },
    },
  },
  plugins: [],
}