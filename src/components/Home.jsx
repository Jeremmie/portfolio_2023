import React from "react"
import { Canvas } from "@react-three/fiber"
import HomeCanvas from "./HomeCanvas"

export default function Home({toggleBetweenMode}){


    return (<>
        <div className="h-full w-full flex flex-col justify-center items-center md:absolute">
        <div className="h-fit absolute left-0 z-10 px-2">
            <h1>HELLO</h1>
            <p>bienvenu🖐️</p>
        </div>
        </div>
        <div className="h-full w-full fixed">
            <Canvas>
                <HomeCanvas className='touch-none' toggleBetweenMode={toggleBetweenMode} />
            </Canvas>
        </div>
        
    </>)
}