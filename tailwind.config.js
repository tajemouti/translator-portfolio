/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        arabic: ['Tajawal', 'Amiri', 'serif'],
        accent: ['Libre Baskerville', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          50:  '#f7f4ef',
          100: '#ede6d8',
          200: '#d9ccb4',
          300: '#c2aa87',
          400: '#a8885a',
          500: '#8c6e3f',
          600: '#705530',
          700: '#573f24',
          800: '#3d2c19',
          900: '#231a10',
          950: '#130e07',
        },
        parchment: {
          50:  '#fdfaf4',
          100: '#f9f2e3',
          200: '#f2e4c6',
          300: '#e8d09f',
          400: '#dbb96e',
          500: '#cc9d42',
        },
        azure: {
          400: '#36a8ca',
          500: '#2d91b0',
          600: '#247a94',
        },
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'ink-spread': 'inkSpread 1.2s ease-out forwards',
        'line-grow': 'lineGrow 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        inkSpread: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
