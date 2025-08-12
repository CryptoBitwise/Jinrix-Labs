/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        fuchsia: {
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        sky: {
          400: '#38bdf8',
          500: '#0ea5e9',
        },
        indigo: {
          400: '#818cf8',
          500: '#6366f1',
        },
        teal: {
          300: '#5eead4',
          400: '#2dd4bf',
        },
        amber: {
          400: '#fbbf24',
        },
        rose: {
          400: '#fb7185',
          500: '#f43f5e',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
        },
        purple: {
          400: '#c084fc',
          500: '#a855f7',
        },
        blue: {
          400: '#60a5fa',
        },
        emerald: {
          400: '#34d399',
        },
      },
      fontFamily: {
        'ui-sans-serif': ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
