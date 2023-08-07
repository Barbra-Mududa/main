/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      // => @media (min-width: 640px) { ... }

      md: '426px',
      // => @media (min-width: 768px) { ... }

      lg: '769px',
      // => @media (min-width: 1024px) { ... }

      xl: '1025px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1281px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        display: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#DB3F34',
        purple: '#7F56D9',
        secondary: ' #FF7F50',
        'grey/300': '#D0D5DD',
        'grey/200': '#E2E8F0',
        'grey/500': '#667085',
      },
    },
  },
  plugins: [],
};
