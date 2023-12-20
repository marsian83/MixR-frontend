/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "#f36363 ",
        secondary: "#2f3030",
        background: "#ffffff",
        foreground: "#eef0f4",
        front: "#000000",
        back: "#ffffff",
      },
      borderRadius: {
        inherit: "inherit",
      },
      transitionDuration: {
        inherit: "inherit",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        raleway: '"Raleway", sans-serif',
        kablammo: '"Kablammo", sans-serif',
      },
      zIndex: {
        1: 1,
      },
    },
  },
  plugins: [],
};
