import { OrbitControls, Sparkles, SpriteAnimator, Environment, PerspectiveCamera, Float, CameraControls, Html } from '@react-three/drei'
import React, { useState, useEffect, useRef } from 'react'
import Phare from './Phare.jsx'
import { useMediaQuery } from 'react-responsive'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function HomeCanvas({ toggleBetweenMode }) {
  const doesModeSwitch = toggleBetweenMode
  const sparklOpacity = useRef()
  const [isDarkMode, setIsDarkMode] = useState(false);
  const defaultCamera = useRef();
  const vec = new THREE.Vector3()
  const envMap = [
    './img/background/day/px.jpg',
    './img/background/day/nx.jpg',
    './img/background/day/py.jpg',
    './img/background/day/ny.jpg',
    './img/background/day/pz.jpg',
    './img/background/day/nz.jpg',
  ]
  const envMapLight = [
    './img/background/day_light/px.jpg',
    './img/background/day_light/nx.jpg',
    './img/background/day_light/py.jpg',
    './img/background/day_light/ny.jpg',
    './img/background/day_light/pz.jpg',
    './img/background/day_light/nz.jpg',
  ]

  const isSM = useMediaQuery({ query: '(max-width: 640px)' })
  const isMD = useMediaQuery({ query: '(min-width: 768px)' })
  const isLG = useMediaQuery({ query: '(min-width: 1024px)' })
  const isXL = useMediaQuery({ query: '(min-width: 1280px)' })
  const isXXL = useMediaQuery({ query: '(min-width: 1536px)' })


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

  {
    isMD && useFrame((state, delta) => {
      const mousX = state.mouse.x
      const mousY = state.mouse.y
      state.camera.lookAt(0, 0, 0)
      defaultCamera.current.position.lerp(vec.set(mousX * -1.5, mousY * 1, defaultCamera.current.position.z), 0.01)
    })
  }
  {
    isSM && useFrame((state, delta) => {
      state.camera.lookAt(0, 0, 0)
    })
  }


  return (
    <>
      {isSM && <Environment files={envMapLight} background blur={0.03} />}
      {isMD && <Environment files={envMap} background blur={0.03} />}
      {isMD && <Float rotationIntensity={(3, 3, 0.1)} >
        <PerspectiveCamera makeDefault ref={defaultCamera} position={[0, 0, -10]} />
      </Float>}

      {isSM &&
        <Float rotationIntensity={(13, 13, 0.9)} >
          <PerspectiveCamera makeDefault position={[0, 0, -10]} />
        </Float>}
      {/* <OrbitControls /> */}

      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <group scale={1.3} position={[0, -0.2, 0]}>

        <Phare className='touch-none' toggleBetweenMode={toggleBetweenMode} />
        <SpriteAnimator
          scale={0.7}
          position={[0, 1, -1.2]}
          startFrame={0}
          fps={6}
          autoPlay={true}
          loop={true}
          textureImageURL={'./sprite/captainSprite.png'}
          textureDataURL={'./sprite/captainSprite.json'}
          alphaTest={0.01}
        />
        <Sparkles ref={sparklOpacity}
          count={40}
          opacity={isDarkMode ? doesModeSwitch ? 0.9 : 0 : doesModeSwitch ? 0 : 0.9}
          size={10}
          scale={5}
          noise={1}
          speed={0.5}
          color={'#FFB8B8'}
        />
      </group>
    </>
  )
}