/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7f7",
          100: "#dbeded",
          200: "#b9dada",
          300: "#8bc0c0",
          400: "#5a9f9f",
          500: "#3f8585",
          600: "#326b6b",
          700: "#2a5656",
          800: "#234646",
          900: "#1c3a3a",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
