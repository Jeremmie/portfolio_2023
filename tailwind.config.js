/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')


export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    transitionDuration: {
      '1200': '1200ms',
    },

    extend: {
      colors: {
        'powder-blue': '#ACC8E5',
        'prussian-blue': '#112A46',
        'melon': '#FFB8B8',
        'gunmetal': '#002129',
    },
    boxShadow: {
      '3xl': '0px 5px 5px 1px rgba(33, 41, 43, 0.5);',
      'warm': 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
      'cold': 'rgba(0, 0, 0, 1) 0px 2px 5px 0px',
      'inner': 'inset 0px 4px 4px 0 #00000036;',
      'innercold': 'inset 0px 4px 4px 0 #000000;',
    },
    backgroundImage: {
      'placeholder-bg': "url('./src/assets/img/placeholder/bg-placeholder.jpg')",
    }
  },

  plugins: [],
}
}
