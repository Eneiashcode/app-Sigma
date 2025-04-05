/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sigma: {
          dark: '#0F1C1C',
          gold: '#C6A867',
          light: '#E6E2D3',
        },
      },
      fontFamily: {
        sigma: ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
