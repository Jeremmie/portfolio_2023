import { useGLTF, useTexture } from "@react-three/drei"
import { useState, useEffect } from "react"

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
    const textureVitre = useTexture('../src/assets/models/textures/phare_vitre_texture.png')
    texturePhare.flipY = false
    textureVitre.flipY = false

    
    
    return(<>



    <mesh
    geometry={phare.nodes.phare.geometry} scale={2}>
    <meshBasicMaterial map={texturePhare} />
    </mesh>
    <mesh geometry={phare.nodes.vitre.geometry} scale={2}>
    <meshBasicMaterial 
    color={isDarkMode? [500.5, 20, 10] : [1, 1, 1]} 
    rougness={1} metalness={0} toneMapped={false} map={textureVitre}/>
    </mesh>

    </>)
}