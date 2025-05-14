/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // HTML dosyasını dahil et
    "./src/**/*.{js,jsx,ts,tsx}", // JS, JSX, TS ve TSX dosyalarını dahil et
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Poppins fontu
      },
    },
    screens: {
      xs: "480px", // ekstra küçük ekran boyutu
      ss: "620px", // özel ekran boyutu
      sm: "768px", // küçük ekran
      md: "1060px", // orta ekran
      lg: "1200px", // büyük ekran
      xl: "1700px", // ekstra büyük ekran
    },
  },
  plugins: [],
};
