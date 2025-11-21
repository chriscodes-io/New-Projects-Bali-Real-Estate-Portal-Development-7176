/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          black: '#040303',       // Black - Headings, Strong Contrast
          blue: '#5299d3',        // Blue Bell - Primary Action/Brand
          periwinkle: '#beb8eb',  // Periwinkle - Secondary/Accents
          powder: '#a2bce0',      // Powder Blue - Soft Backgrounds/Highlights
          charcoal: '#5e5c6c',    // Charcoal - Body Text
          white: '#ffffff',
          slate: {
            50: '#f8fafc',        // Light Background
            100: '#f1f5f9',
            200: '#e2e8f0',
            800: '#1e293b',
            900: '#0f172a',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}