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
        'neumorhismLight': '-8px 5px 15px #d99c9c, 8px -5px 15px #ffd4d4',
        'figma': 'box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);'
      },
      backgroundImage: {
        'placeholder-bg': "url('https://jeremiejaouen.ch/img/works_modal/modal_10/leon_original.jpg')",
        'video': "url('https://jeremiejaouen.ch/img/works_modal/modal_1/vignette.jpg')",
        'dessin': "url('https://jeremiejaouen.ch/img/works_modal/modal_11/vignette.png')",
        'web': "url('https://i.ibb.co/x1j72Sc/web.png')",
        'photo': "url('https://jeremiejaouen.ch/img/nature_morte/naturemorte_2.png')",
        'JV': "url('https://jeremiejaouen.ch/img/works_modal/modal_12/vignette.jpg')",
        'leonAscii': "url('https://i.ibb.co/ZzPHtcb/leon.jpgjpg')",
        'galaxyGroove': "url('https://i.ibb.co/Ws5bfB7/galaxygroove.png')",
        'loop': "url('https://i.ibb.co/D9F2Hx4/vignette.png')",
        'asciiCube': "url('https://i.ibb.co/Z6ty3C0/vignette.png')",
        'videoGame': "url('https://i.ibb.co/7JS3NKb/miniature.jpg')",
        'natureMorte': "url('https://i.ibb.co/4jkrxdf/nature-morte.jpg')",
        'rollUp': "url('https://i.ibb.co/f8DVyMS/roll-Up-Light.jpg')",
        'vinyle': "url('https://i.ibb.co/MMLnr1X/vinyle-recto-light.jpg')",
        'threejs': "url('https://i.ibb.co/sqv3Hsv/vignette-galaxy.jpg')",
        'speed': "url('https://i.ibb.co/qrtQh7c/speed-Vignette.jpg')",
        'sketchfab': "url('https://i.ibb.co/HBsbGLF/sketchfab-vignette.jpg')",
        'rapportStage': "url('https://i.ibb.co/x1h9GhF/rapport-Stage.jpg')",
        'none': "url('https://i.ibb.co/sqv3Hsv/vignette-galaxy.jpg')",


      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px',
      }
    },

    plugins: [],
  }
}
