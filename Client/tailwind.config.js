/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Dokdo':['Merriweather', 'serif'],
        "Josefin+Sans": ['Josefin Sans', "sans-serif"],
        "Bungee+Spice":['Bungee Spice',"sans-serif"]
      }
    },
  },
  plugins: [],
}

