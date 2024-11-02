/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        menuSlideClose: {
          '0%': { height: '0px', border: '0px' },
          '1%': { border: '1px solid #121212' },
          '100%': { height: '300px', border: '1px solid #121212' },
        },
        menuSlideOpen: {
          '0%': { height: '300px', border: '1px solid #121212' },
          '99%': { border: '1px solid #121212' },
          '100%': { height: '0px', border: '0px' },
        },
      },
      animation: {
        'menu-slide-close': 'menuSlideClose 0.5s ease-in-out forwards',
        'menu-slide-open': 'menuSlideOpen 0.5s ease-in-out forwards',
      },
      boxShadow: {
        div: '6px 6px 0 0 #121212',
        button: '4px 4px 0 0 #121212',
        darkDiv: '6px 6px 0 0 #fdfdfd',
        darkButton: '4px 4px 0 0 #fdfdfd',
      },
      border: {
        div: '6px 6px 0 0 #121212',
        button: '4px 4px 0 0 #121212',
        darkDiv: '6px 6px 0 0 #fdfdfd',
        darkButton: '4px 4px 0 0 #fdfdfd',
      },
      colors: {
        customBlack: '#121212',
        customWhite: '#fdfdfd',
        customGray: '#f2f2f2',
      },
    },
  },
  plugins: [],
};
