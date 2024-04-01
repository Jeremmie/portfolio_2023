import React from "react"
import { Canvas } from "@react-three/fiber"
import HomeCanvas from "./HomeCanvas"
import { useMediaQuery } from 'react-responsive'
import { Loader } from "@react-three/drei";



export default function Home({ toggleBetweenMode }) {

    const isSM = useMediaQuery({ query: '(max-width: 640px)' })
    const isMD = useMediaQuery({ query: '(min-width: 768px)' })
    return (<>
        <div className="h-full w-full flex flex-col justify-center items-center md:absolute">
            <div className="h-fit absolute left-0 z-10 px-2">

            </div>
        </div>
        <div className="h-full w-full fixed">


            {isMD &&

                <Canvas>

                    <HomeCanvas className='touch-none' toggleBetweenMode={toggleBetweenMode} />

                </Canvas>}


            {isSM &&
                <div className="w-full h-full bg-bg_mobile bg-center bg-cover">
                    <div className="w-full h-full flex bg-gunmetal/90 text-melon flex-col items-center justify-center">
                        <div className="w-10/12 flex flex-col justify-center text-melon items-center">
                            <h1 className="text-3xl">Hey!</h1>
                            <p className="mb-5 text-2xl">Welcome in my portfolio</p>
                            <p className="text-lg">Don't hesitate to discover <a className="font-bold text-white underline rounded-lg" href="#/travaux">my works</a>, or to <a className="font-bold text-white underline rounded-lg" href="#/contact">contact me</a>.</p>
                            <iframe className='rounded-lg mt-24 w-full bg-gunmetal lg:rounded-lg aspect-video' src="https://www.youtube-nocookie.com/embed/RrCDRWtpCpA?si=T3RhsC0tB8xzfc2D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        </div>
                    </div>
                </div>}

        </div>

    </>)
}