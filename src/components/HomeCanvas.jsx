import { AsciiRenderer, OrbitControls } from '@react-three/drei'
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

      const colorTransition = useRef()
      useFrame(()=>{
        isDarkMode? colorTransition.current.material.color.lerp(doesModeSwitch ? red : aliceblue, 0.050) : colorTransition.current.material.color.lerp(doesModeSwitch ? aliceblue : red, 0.050)
      })

      
    return(
    <>

        <OrbitControls enableZoom={true} />
        
        <ambientLight intensity={2} />
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <Phare />
        <mesh ref={colorTransition} scale={1.5}>
        {/* <torusKnotGeometry args={[1, 0.2, 128, 32]} /> */}
        <meshToonMaterial />
        </mesh>
    </>
    )
}