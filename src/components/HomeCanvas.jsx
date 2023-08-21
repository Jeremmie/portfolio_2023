import { AsciiRenderer, Cloud, OrbitControls, Sparkles, SpriteAnimator } from '@react-three/drei'
import { Bloom, EffectComposer, Noise, DotScreen } from "@react-three/postprocessing"
import { BlendFunction } from 'postprocessing'
import { useFrame } from '@react-three/fiber';
import React,  { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Color } from 'three'
import Phare from './Phare.jsx'


const aliceblue = new Color('aliceblue')
const red = new Color('red')
export default function HomeCanvas({toggleBetweenMode}){

    const doesModeSwitch = toggleBetweenMode

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

      let sparklOpacity = isDarkMode? doesModeSwitch? 1 : 0 : doesModeSwitch? 0 : 1
      const colorTransition = useRef()
      console.log(colorTransition);
      // useFrame(()=>{
      //   isDarkMode? colorTransition.current.material.color.lerp(doesModeSwitch ? red : aliceblue, 0.050) : colorTransition.current.material.color.lerp(doesModeSwitch ? aliceblue : red, 0.050)
      // })

      
    return(
    <>
        
        <OrbitControls
        // maxPolarAngle={1.5} // highlight-line
        // minPolarAngle={1.5} // highlight-line
        // enableZoom={false} 
        />

        
        <Sparkles ref={colorTransition}
          count={40}
          opacity={sparklOpacity}
          size={2}
          scale={5}
          noise={1}
          speed={0.5}
          color={'aliceblue'}
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
        
        {/* <mesh ref={colorTransition} scale={1.2}>
        <torusKnotGeometry color={[1.5, 1, 4]} args={[1, 0.2, 128, 32]} />
        </mesh> */}
    </>
    )
}