import { useGLTF, useTexture } from "@react-three/drei"

export default function Phare(){
    const phare = useGLTF('../src/assets/models/phare.glb')
    const texturePhare = useTexture('../src/assets/models/textures/phare_texture.jpg')
    const textureVitre = useTexture('../src/assets/models/textures/phare_vitre_texture.png')
    texturePhare.flipY = false
    textureVitre.flipY = false
    console.log(phare.nodes);
    return(<>
    <mesh geometry={phare.nodes.phare.geometry} scale={2}>
    <meshBasicMaterial map={texturePhare} />
    </mesh>
    <mesh geometry={phare.nodes.vitre.geometry} scale={2}>
    <meshBasicMaterial map={textureVitre} />
    </mesh>
    </>)
}