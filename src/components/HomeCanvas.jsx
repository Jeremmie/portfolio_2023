import { OrbitControls, Sparkles, SpriteAnimator, PresentationControls } from '@react-three/drei'
import React,  { useState, useEffect, useRef } from 'react'
import { Color } from 'three'
import Phare from './Phare.jsx'

export default function HomeCanvas({toggleBetweenMode}){

    const doesModeSwitch = toggleBetweenMode
    const sparklOpacity = useRef()
    const [isDarkMode, setIsDarkMode] = useState(false);

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

      
    return(
    <>
        
        
        <PresentationControls 
        global
        polar={[-Math.PI * 0.04, Math.PI * 0.2]}
        azimuth={[-Math.PI * 0.2, Math.PI * 0.2]}
        config={{mass: 2, tension: 400}}
        snap={{mass: 3, tension: 100}}
        >
        
        <Sparkles ref={sparklOpacity}
          count={40}
          opacity={isDarkMode? doesModeSwitch? 0.9 : 0 : doesModeSwitch? 0 : 0.9}
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
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <Phare toggleBetweenMode={toggleBetweenMode} />
      </PresentationControls>
    </>
    )
}