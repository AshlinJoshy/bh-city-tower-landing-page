/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#210302',
        sand: '#D4BD9C',
        gold: '#D7A86F',
        'sand-soft': 'rgba(212,189,156,0.33)',
      },
      fontFamily: {
        display: [
          'PP Museum',
          'Cormorant Garamond',
          'Times New Roman',
          'serif',
        ],
        sans: ['Graphik', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.08em',
      },
    },
  },
  plugins: [],
};
