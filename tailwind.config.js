// tailwind.config.js
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./resources/**/*.{vue,js,ts,jsx,tsx}",
  
  ],
  theme: {
    extend: {
      colors: {
        silver: '#c4c4c4',
        lightBlack: '#282828',
        gray: '#959592'
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceModal: {
          '0%, 100%': { transform: 'scale(1)' },
          //'20%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(0.9)' },
          '80%': { transform: 'scale(1.05)' },
        },
        animationslicedBox: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)'},
        },
        opacityAnimation: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
        slideInDown: 'slideInDown 1s ease-out forwards',
        animationslicedBox: 'animationslicedBox 1s ease-out forwards',
        bounceModal: 'bounceModal 0.3s ease',
        opacityAnimation: 'opacityAnimation 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}

