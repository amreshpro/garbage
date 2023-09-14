export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
      'xsm': { 'max': '339px' },
      // => @media (max-width: 639px) { ... }
    },

    colors:{

      'primary': {
        '50': '#fef2f3',
        '100': '#fde6e7',
        '200': '#fbd0d5',
        '300': '#f7aab2',
        '400': '#f27a8a',
        '500': '#ea546c',
        '600': '#d5294d',
        '700': '#b31d3f',
        '800': '#961b3c',
        '900': '#811a39',
        '950': '#48091a',
    },
    'white':"#fff",
    'black':"#000",
    'grey' :"#444",

    },
    
    extend: {

      keyframes: {
        pulse :{
          '0%' :{opacity:1},
          '25%':{opacity:0.7},
          '50%':{opacity:0.4},
          '75%':{opacity:0.2},
          '100%':{opacity:1}
      }
    },

    animation: {
      'shimmer': 'pulse 1s linear infinite',
    },
    },
  },
  plugins: [],
}
