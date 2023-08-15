import { OrbitControls } from '@react-three/drei'
import * as three from 'three'

export default function HomeCanvas(){


    return(<>

        <OrbitControls enableZoom={false} />
        
        <mesh scale={2}>
        <boxGeometry />
        <meshNormalMaterial />
        </mesh>
    </>)
}