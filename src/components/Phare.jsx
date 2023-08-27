import { useGLTF, useTexture } from "@react-three/drei"
import { useState, useEffect, useRef } from "react"
import { useFrame } from '@react-three/fiber';
import { Color } from 'three'

export default function Phare({toggleBetweenMode}){
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

    const phare = useGLTF('../src/assets/models/phare.glb')
    const texturePhare = useTexture('../src/assets/models/textures/phare_texture.jpg')
    const textureVitre = useTexture('../src/assets/models/textures/phare_vitre_texture.jpg')
    texturePhare.flipY = false
    textureVitre.flipY = false


    
    const colorTransition = useRef();
    const day = new Color(30, 30, 10)
    const night = new Color(1, 1, 1)
    useFrame(()=>{
      isDarkMode? colorTransition.current.material.color.lerp(doesModeSwitch? day : night, 0.05) : colorTransition.current.material.color.lerp(doesModeSwitch? night : day, 0.05)
    })
    
    return(<>


      <group rotation={[0, 4, 0]}>
    <mesh
    geometry={phare.nodes.phare.geometry} scale={2}>
    <meshBasicMaterial map={texturePhare} />
    </mesh>
    <mesh ref={colorTransition} geometry={phare.nodes.vitre.geometry} scale={2}>
    <meshBasicMaterial 
    color={isDarkMode? doesModeSwitch? night : day : doesModeSwitch? day : night} 
    rougness={1} metalness={0} toneMapped={false} map={textureVitre}/>
    </mesh>
    </group>

    </>)
}