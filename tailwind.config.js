/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}"],
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
      animation: {
        'intense-pulse': 'intense-pulse 1s infinite',
      },
      keyframes: {
        'intense-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.5' }, // More intense scale and opacity
        },
      },
    },
  },
  plugins: [],
};
