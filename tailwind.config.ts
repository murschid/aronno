export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        'bgreen': {
          DEFAULT: '#006747',
          50: '#f1fcf8',
          100: '#e1f8ef',
          200: '#c5eedf',
          300: '#9ae0ca',
          400: '#67cca1',
          500: '#3eb08e',
          600: '#288f72', // Base
          700: '#006747',
          800: '#1b5d44',
          900: '#174c39',
          950: '#0c2b21',
        },
        'dred': {
          DEFAULT: '#B31B1B',
          50: '#fcf2f2',
          100: '#fae1e1',
          200: '#f5c6c6',
          300: '#ef9e9e',
          400: '#e66666',
          500: '#d73b3b',
          600: '#b31b1b', // Base
          700: '#9d1414',
          800: '#821414',
          900: '#6e1616',
          950: '#3b0808',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Kalpurush', 'sans-serif'],
        bengali: ['Kalpurush', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(200%)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
      }
    },
  },
  plugins: [],
}
