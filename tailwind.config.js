/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 200ms ease-in-out 1",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      colors: {
        primary: {
          // Primary colors
          dark_blue: "hsl(233, 26%, 24%)",
          lime_green: "hsl(136, 65%, 51%)",
          bright_cyan: "hsl(192, 70%, 51%)",
        },
        neutral: {
          grayish_blue: "hsl(233, 8%, 62%)",
          light_grayish_blue: "hsl(220, 16%, 96%)",
          very_light_gray: "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [],
};
