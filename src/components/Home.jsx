import React from "react"
import { Canvas } from "@react-three/fiber"
import HomeCanvas from "./HomeCanvas"

export default function Home({toggleBetweenMode}){


    return (<>
        <div className="h-full w-full absolute justify-between">
        <div className="h-1/2">
            <Canvas>
                <HomeCanvas toggleBetweenMode={toggleBetweenMode} />
            </Canvas>
        </div>
        <div className="h-1/3">
            <h1>Hey c'est mon portfolio</h1>
            <p>bienvenu🖐️</p>
        </div>
        </div>
    </>)
}