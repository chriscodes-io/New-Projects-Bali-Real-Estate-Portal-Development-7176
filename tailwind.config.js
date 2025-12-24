/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      colors: {
        premium: {
          black: '#000000',       // Pure Black - Maximum contrast
          blue: '#2563eb',        // Strong Blue - Primary Action/Brand (WCAG AA)
          periwinkle: '#8b5cf6',  // Vibrant Purple - Secondary/Accents
          powder: '#dbeafe',      // Light Blue Background - Better contrast
          purple: '#7c3aed',      // Deep Purple - Strong CTA Color
          charcoal: '#374151',    // Dark Gray - Body Text (WCAG AA compliant)
          darkgray: '#1f2937',    // Darker text for headings
          white: '#ffffff',
          // Modern icon colors with better contrast
          icon: {
            primary: '#1e40af',   // Strong blue for primary icons
            secondary: '#7c3aed', // Purple for secondary icons
            accent: '#dc2626',    // Red for accent icons (CTA, important)
            success: '#059669',   // Green for success states
            warning: '#d97706',   // Orange for warnings
            muted: '#6b7280',     // Medium gray for subtle icons
          },
          slate: {
            50: '#f8fafc',        // Light Background
            100: '#f1f5f9',
            200: '#e2e8f0',
            800: '#1e293b',
            900: '#0f172a',
          }
        }
      },
      boxShadow: {
        'premium-cta': '0 10px 30px -10px rgba(147, 51, 234, 0.6)',
        'premium-card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'premium-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}