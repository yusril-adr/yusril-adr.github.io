module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in .7s ease forwards;',
        pulse: 'pulse 1s linear infinite;',
        'pop-up': 'pop-up .3s ease-in-out forwards;',
        'slide-from-bottom': 'slide-from-bottom .7s ease forwards;',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulse: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        'pop-up': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'slide-from-bottom': {
          '0%': {
            opacity: 0,
            transform: 'translateY(3rem)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '3rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '7rem',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
