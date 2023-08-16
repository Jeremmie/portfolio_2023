import { AsciiRenderer, OrbitControls } from '@react-three/drei'
import React,  { useState, useEffect } from 'react'

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


      
      
    return(
    <>

        <OrbitControls enableZoom={false} />
        
        <ambientLight intensity={2} />
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />

        <mesh scale={1.5}>
        <torusKnotGeometry args={[1, 0.2, 128, 32]} />
        <meshToonMaterial color={doesModeSwitch? 'aliceblue' : 'red'}/>
        </mesh>
    </>
    )
}