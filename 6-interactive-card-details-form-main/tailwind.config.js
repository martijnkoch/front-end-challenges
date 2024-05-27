/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray-violet": "hsl(270, 3%, 87%)",
        "dark-gray-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
      },
      fontSize: {
        base: "18px",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
    backgroundImage: {
      "main-desktop": "url('@/assets/bg-main-desktop.png')",
      "main-mobile": "url('@/assets/bg-main-mobile.png')",
      "front-creditcard": "url('@/assets/bg-card-front.png')",
      "back-creditcard": "url('@/assets/bg-card-back.png')",
    },
  },
  plugins: [],
};
