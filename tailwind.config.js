/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        taprom: ["Taprom", "system-ui"],
      },
      colors: {
        orange: "#ff4900",
        orange2: "#ff5e1d",
        hitam: "#242424",
        hitam2: "#7c7c7c",
        putih: "#f0f0f0",
      },
    },
  },
  plugins: [],
};
