/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#100D0D",
        secondary: "#181414",
        tertiary: "#6F0B926E",
        quaternary: "#1814144A",
      },
    },
  },
  plugins: [],
}