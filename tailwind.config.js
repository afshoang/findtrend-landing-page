/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#A8FF35",
        green2: "#87D322",
        buttonHover: "#8CC83A",
        black: "#000",
        white: "#fff",
        dimBlack: "#2B2B2B",
        gray100: "#8B8B8B",
        gray200: "#ADADAD",
        gray300: "#F5F5F5",
        gray400: "#F1F1F1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      content: {
        'arrowBlack': 'url("./src/assets/arrow-black.svg")',
        'arrowWhite': 'url("./src/assets/arrow-white.svg")',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

