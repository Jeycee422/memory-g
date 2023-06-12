/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        blinkOne: 'blinkOne 2.3s infinite',
        blink: 'blink 2.3s infinite',
        bounceLeft: 'bounceLeft 1s infinite',
      },
      keyframes: {
        blinkOne: {
          '0%': {
            opacity: '1'
          },
          '10%': {
            opacity: '0'
          },
          '20%': {
            opacity: '1'
          },
          '40%': {
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          },
          '60%': {
            opacity: '0'
          },
          '80%': {
            opacity: '1'
          },
          '90%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        blink: {
          '0%': {
            opacity: '0'
          },
          '10%': {
            opacity: '1'
          },
          '20%': {
            opacity: '0'
          },
          '40%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0'
          },
          '60%': {
            opacity: '1'
          },
          '80%': {
            opacity: '0'
          },
          '90%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(1.1)',
            opacity: '1'
          }
        },
        bounceLeft: {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      }
    },
  },
  plugins: [],
}
