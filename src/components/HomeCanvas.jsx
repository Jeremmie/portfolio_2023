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

  // function newText() {
  //   document.getElementById("oldText").innerHTML = 'hehe';
  // }
  return (
    <>

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
        <Html style={{ userSelect: 'none' }} position={[-0.8, 1.5, -1.2]}>

          <div className='w-[300%]'>
            <div className='w-fit pr-10 p-3 mb-2 whitespace-nowrap bg-gunmetal/80 touch-none text-white rounded-lg'>
              <h1 className='text-xl'>Hey!!</h1>
              <p>Over Here!</p>
            </div>

            <div className='w-full flex flex-col justify-center items-center p-3 mb-2 bg-gunmetal/80 touch-none text-white rounded-lg'>
              <p className='pr-10 mb-5'>It's been a while since I've seen anyone. <br />That monster doesn't seem to want to let us go. You can visit the lighthouse to kill time.</p>
              <a className='bg-melon text-center font-bold hover:bg-gunmetal hover:text-melon w-full px-3 py-2 rounded-xl text-gunmetal text-xl' href="#/Travaux">take a look inside</a>
            </div>

            {/* <div className='w-fit flex flex-col justify-center items-center p-3 mb-2 bg-gunmetal/80 touch-none text-white rounded-lg'>
              <iframe className='rounded-lg w-full bg-gunmetal lg:rounded-lg aspect-video' src="https://www.youtube-nocookie.com/embed/RrCDRWtpCpA?si=T3RhsC0tB8xzfc2D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div> */}
            <div className='w-11/12 flex flex-col justify-center items-center p-3 mb-2 bg-gunmetal/80 touch-none text-white rounded-lg'>
              <iframe src="https://player.vimeo.com/video/930275465?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" className='rounded-lg w-full bg-gunmetal lg:rounded-lg aspect-video' title="Showreel 2024-2023"></iframe>
            </div><script src="https://player.vimeo.com/api/player.js"></script>

          </div>

        </Html>
        <SpriteAnimator
          scale={0.7}
          position={[0, 1.05, -1.2]}
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