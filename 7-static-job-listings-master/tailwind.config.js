/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
        "light-grayish-cyan": "hsl(180, 52%, 96%)",
        "dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
      fontSize: {
        base: "15px",
      },
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
