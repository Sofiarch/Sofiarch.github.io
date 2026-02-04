/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night-bg': '#0f172a',
        'night-card': '#1e293b',
        'najaf-gold': '#d97706',
        'najaf-teal': '#0d9488',
        'text-main': '#f1f5f9',
        'text-muted': '#94a3b8',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
      },
      // --- ANIMATION CONFIGURATION ---
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fadeInDown: 'fadeInDown 0.8s ease-out forwards',
        zoomIn: 'zoomIn 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}