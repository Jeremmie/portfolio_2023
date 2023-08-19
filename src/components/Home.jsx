import React from "react"
import { Canvas } from "@react-three/fiber"
import HomeCanvas from "./HomeCanvas"

export default function Home({toggleBetweenMode}){


    return (<>
        <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="h-fit absolute left-0 z-10 px-2">
            <h1>Hey c'est mon portfolio</h1>
            <p>bienvenu🖐️</p>
        </div>
        </div>
        <div className="h-full w-full">
            <Canvas>
                <HomeCanvas toggleBetweenMode={toggleBetweenMode} />
            </Canvas>
        </div>
        
    </>)
}