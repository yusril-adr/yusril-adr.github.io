module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 1s linear infinite;',
        'pop-up': 'pop-up .3s ease-in-out forwards',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        'pop-up': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
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
