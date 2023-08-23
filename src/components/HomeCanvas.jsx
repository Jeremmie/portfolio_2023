import { OrbitControls, Sparkles, SpriteAnimator, Environment, PerspectiveCamera, Float } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'
import Phare from './Phare.jsx'

import * as THREE from 'three'

export default function HomeCanvas({toggleBetweenMode}) {

  const doesModeSwitch = toggleBetweenMode
  const sparklOpacity = useRef()
  const [isDarkMode, setIsDarkMode] = useState(false);
  const phare = useRef()

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
        <PerspectiveCamera makeDefault position={[1, 0.3, 7]} />
      </Float>

      <Environment files={isDarkMode ? doesModeSwitch ? "./waterColorBgNight.hdr" : "./waterColorBg.hdr" : doesModeSwitch ? "./waterColorBg.hdr" : "./waterColorBgNight.hdr"} background blur={0.04} />



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