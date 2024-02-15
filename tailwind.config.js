/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "active-gradient-1": "hsl(249, 99%, 64%)",
      "active-gradient-2": "hsl(278, 94%, 30%)",
      "input-error": " hsl(0, 100%, 66%)",
      white: "hsl(0, 0%, 100%)",
      "light-grayish-violet": "hsl(270, 3%, 87%)",
      "dark-grayish-violet": "hsl(279, 6%, 55%)",
      "very-dark-violet": "hsl(278, 68%, 11%)",
    },
    fontFamily: {
      Space_Grotesk: ["Space Grotesk", "sans-serif"],
    },
    fontSize: {
      xs: "9px",
      sm: "12px",
      md: "14px",
      lg: "18px",
      xl: "28px",
    },

    screens: {
      Desktop: "1200px",
    },

    extend: {},
  },
  plugins: [],
};
