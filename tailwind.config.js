/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3490dc", // Light mode primary color
          dark: "#1e3a8a", // Dark mode primary color
        },
        textPrimary: {
          light: "#ffffff", // Light mode text color
          dark: "#ffffff", // Dark mode text color
        },
      },
    },
  },
  plugins: [],
};
