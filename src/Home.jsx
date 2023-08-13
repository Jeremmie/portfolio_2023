import React from "react"
import { Canvas } from "@react-three/fiber"
import HomeCanvas from "./HomeCanvas"
import './index.css'

export default function Home(){


    return (<>
        <div className="home-global">
            <div className="home">
                <div className="home-text"><h1>Welcome in my portfolio!</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure praesentium aperiam, debitis ipsam odit et velit quis corrupti perferendis dolore, expedita accusantium quia, quidem aliquid optio ut numquam atque nisi?</p></div>
                <div className="home-3Dmodel"><Canvas>
                <HomeCanvas />    
                </Canvas></div>
            </div>
        </div>

    </>)
}