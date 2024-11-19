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
        bounceModal: {
          '0%, 100%': { transform: 'scale(1)' },
          //'20%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(0.9)' },
          '80%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
        bounceModal: 'bounceModal 0.3s ease',
        
      },
    },
  },
  plugins: [],
}

