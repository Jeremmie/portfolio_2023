import { AsciiRenderer, OrbitControls } from '@react-three/drei'
import * as three from 'three'

export default function HomeCanvas(){


    return(
    <>

        <OrbitControls enableZoom={false} />
        
        <mesh scale={1.5}>
        <torusKnotGeometry args={[1, 0.2, 128, 32]} />
        <meshNormalMaterial/>
        </mesh>
    </>
    )
}