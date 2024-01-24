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
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 2fr))',
        'layout': 'repeat(5, minmax(100px, 250px))',
      },
      colors: {
        'powder-blue': '#ACC8E5',
        'prussian-blue': '#112A46',
        'melon': '#FFB8B8',
        'melonSoft': 'rgb(255 255 255 / 0.7)',
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
        'videoGame': "url('https://i.ibb.co/BN97yzS/Capture-d-e-cran-2023-10-13-a-13-30-51.png')",
        'natureMorte': "url('https://i.ibb.co/x86ssFL/naturemorte.jpg')",
        'rollUp': "url('https://i.ibb.co/f8DVyMS/roll-Up-Light.jpg')",
        'vinyle': "url('https://i.ibb.co/MMLnr1X/vinyle-recto-light.jpg')",
        'threejs': "url('https://i.ibb.co/sqv3Hsv/vignette-galaxy.jpg')",
        'speed': "url('https://i.ibb.co/qrtQh7c/speed-Vignette.jpg')",
        'sketchfab': "url('https://i.ibb.co/HBsbGLF/sketchfab-vignette.jpg')",
        'rapportStage': "url('https://i.ibb.co/x1h9GhF/rapport-Stage.jpg')",
        'vespa': "url('https://i.ibb.co/Yy3PzQt/vignette.jpg')",
        'serif': "url('https://i.ibb.co/QHxqmx9/Plan-de-travail-1.png')",
        'gameboy': "url('https://i.ibb.co/xs083TD/gameb.png')",
        'visagesculpt': "url('https://i.ibb.co/dgP74WS/face.png')",
        'leonBlackWhite': "url('https://i.ibb.co/jz3CjjH/leon-noir-blanc.jpg')",
        'leonOriginal': "url('https://i.ibb.co/hYgdYdb/leon-original.jpg')",
        'Ryslo': "url('https://i.ibb.co/zP9VYGK/Ryslo.jpg')",
        'moodboadLoop': "url('https://i.ibb.co/xqQ7sVp/moodboard-All.jpg')",
        'dedouze': "url('https://i.ibb.co/F6Yn0cw/dedouze.jpg')",
        'MarcAntoine': "url('https://i.ibb.co/qjgY4jL/Marc-Antoine-Mathieu.jpg')",
        'souvienstanzan': "url('https://i.ibb.co/qR6mHDH/souvientanzan.png')",
        'boris': "url('https://i.ibb.co/NYGszk2/motherfuckingdalle.jpg')",

        'AE_1': "url('../img/tram/after_1Tram.jpg')",
        'astronauteTram': "url('../img/tram/astronauteTram.jpg')",
        'face_1Tram': "url('../img/tram/face_1Tram.jpg')",
        'face_2Tram': "url('../img/tram/face_2Tram.jpg')",
        'fireTram': "url('../img/tram/fireTram.jpg')",
        'jvTram': "url('../img/tram/jvTram.jpg')",
        'knucksTram': "url('../img/tram/knucksTram.jpg')",
        'loopTram': "url('../img/tram/loopTram.jpg')",
        'photo_2Tram': "url('../img/tram/photo_2Tram.jpg')",
        'serifTram': "url('../img/tram/serifTram.jpg')",
        'speedTram': "url('../img/tram/speedTram.jpg')",
        'three_1Tram': "url('../img/tram/three_1Tram.jpg')",
        'three_2Tram': "url('../img/tram/three_2Tram.jpg')",
        'vinylTram': "url('../img/tram/vinylTram.jpg')",
        'leoTram': "url('../img/tram/leoTram.jpg')",
        'rollUpTram': "url('../img/tram/rollUp.jpg')",

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
