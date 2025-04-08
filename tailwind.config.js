/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  fontFamily: {
    FoundersGrotesk: ["FoundersGrotesk", "sans-serif"],
    NeueMontreal: ["NeueMontreal", "sans-serif"],
  },
  screens: {
    xm: { max: "400px" },
    sm: { min: "401px", max: "768px" },
    md: { min: "769px", max: "1024px" },
    lg: { min: "1025px", max: "1490px" },
    xl: { min: "1491px" },
  },
  plugins: [],
}

