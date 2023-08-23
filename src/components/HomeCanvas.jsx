import { OrbitControls, Sparkles, SpriteAnimator, Environment, PerspectiveCamera, Float } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'
import Phare from './Phare.jsx'
import { useMediaQuery } from 'react-responsive'
import * as THREE from 'three'

export default function HomeCanvas({toggleBetweenMode}) {

  const isSM = useMediaQuery({ query: '(max-width: 640px)' })
  const isMD = useMediaQuery({ query: '(min-width: 768px)' })
  const isLG = useMediaQuery({ query: '(min-width: 1024px)' })
  const isXL = useMediaQuery({ query: '(min-width: 1280px)' })
  const isXXL = useMediaQuery({ query: '(min-width: 1536px)' })


  const doesModeSwitch = toggleBetweenMode
  const sparklOpacity = useRef()
  const [isDarkMode, setIsDarkMode] = useState(false);
  const phare = useRef()
  
  const envMapNightMD = './waterColorBgNight.hdr';
  const envMapMD = './waterColorBg.hdr';
  const envMapNight = './waterColorBgNight_light.hdr'
  const envMap = './waterColorBg_light.hdr'

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addListener(handleDarkModeChange);
    setIsDarkMode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeListener(handleDarkModeChange);
    };
  }, []);
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
  const cursor = {}
  cursor.x = 0
  cursor.y = 0
  window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
  })
  const parallaxX = cursor.x
  const parallaxY = cursor.y
  return (
    <>
      <Float rotationIntensity={3, 3, 0.1} >
        <PerspectiveCamera makeDefault position={[0, 0.3, 7]} />
      </Float>

      <Environment files={isDarkMode ? doesModeSwitch ? envMapNight : envMap : doesModeSwitch ? envMap : envMapNight} background blur={0.07} />
      {isLG && <Environment files={isDarkMode ? doesModeSwitch ? envMapNightMD : envMapMD : doesModeSwitch ? envMapMD : envMapNightMD} background blur={0.03} />}


      <Sparkles ref={sparklOpacity}
        count={40}
        opacity={isDarkMode ? doesModeSwitch ? 0.9 : 0 : doesModeSwitch ? 0 : 0.9}
        size={2}
        scale={5}
        noise={1}
        speed={0.5}
        color={'#FFB8B8'}
      />
      <SpriteAnimator
        scale={0.6}
        position={[0, 1, 1.2]}
        startFrame={0}
        fps={4}
        autoPlay={true}
        loop={true}
        textureImageURL={'./testSprite.png'}
        textureDataURL={'./testSprite.json'}
        alphaTest={0.01}
      />

      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <mesh ref={phare}>
        <Phare className='touch-none' toggleBetweenMode={toggleBetweenMode} />
      </mesh>
      {/* </PresentationControls> */}
    </>
  )
}