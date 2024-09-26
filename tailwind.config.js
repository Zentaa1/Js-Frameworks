/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#161616',
        'secondary': '#282828',
        'pageText': '#FFFFFF',
        'customOrange': '#E27D0A',
        'inputText': '#BEBEBE'
      },
      fontFamily: {
        'sans': ['"PT Sans"', 'sans-serif'],
        'khand': ['"Khand"', 'sans-serif'],
        'sourceSans': ['"Source Sans Pro"', 'sans-serif'],
      },
      screens: {
        xs: "480px",
        sm: "660px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
}
