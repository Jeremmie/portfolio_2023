import React from "react"
import { Canvas } from "@react-three/fiber"
import HomeCanvas from "./HomeCanvas"
import { useMediaQuery } from 'react-responsive'


export default function Home({ toggleBetweenMode }) {

    const isSM = useMediaQuery({ query: '(max-width: 640px)' })
    const isMD = useMediaQuery({ query: '(min-width: 768px)' })
    return (<>
        <div className="h-full w-full flex flex-col justify-center items-center md:absolute">
            <div className="h-fit absolute left-0 z-10 px-2">

            </div>
        </div>
        <div className="h-full w-full fixed">
            {isMD && <Canvas>
                <HomeCanvas className='touch-none' toggleBetweenMode={toggleBetweenMode} />
            </Canvas>}
            <div className="w-full h-full bg-bg_mobile bg-center bg-cover">
                <div className="w-full h-full flex bg-gunmetal/90 flex-col items-center justify-center">
                    <div className="w-10/12 flex flex-col justify-center items-center">
                        <h1 className="text-3xl">Hey!</h1>
                        <p className="mb-5 text-2xl">Welcome in my portfolio</p>
                        <p className="text-lg">N'hésitez pas à découvrir <a className="font-bold text-white underline rounded-lg" href="#/travaux">mes travaux</a>, ou à <a className="font-bold text-white underline rounded-lg" href="#/contact">me contacter</a>.</p>
                        <iframe className='rounded-lg mt-24 w-full bg-gunmetal lg:rounded-lg aspect-video' src="https://www.youtube-nocookie.com/embed/eeH90wwWKM8?si=S6GaKqYifEUS7jvx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    </div>
                </div>
            </div>
        </div>

    </>)
}