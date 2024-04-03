import React from "react"
import { Canvas } from "@react-three/fiber"
import HomeCanvas from "./HomeCanvas"
import { useMediaQuery } from 'react-responsive'
import { Loader } from "@react-three/drei";



export default function Home({ toggleBetweenMode }) {

    const isSM = useMediaQuery({ query: '(max-width: 940px)' })
    const isMD = useMediaQuery({ query: '(min-width: 950px)' })
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
                            {/* <iframe className='rounded-lg mt-24 w-full bg-gunmetal lg:rounded-lg aspect-video' src="https://www.youtube-nocookie.com/embed/RrCDRWtpCpA?si=T3RhsC0tB8xzfc2D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                            {/* <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/930275465?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Showreel 2024-2023"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */}
                            <div className='w-full flex flex-col justify-center items-center mb-2 mt-10 bg-gunmetal/80 touch-none text-white rounded-lg'>
                                <iframe src="https://player.vimeo.com/video/930275465?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" className='rounded-lg w-full bg-gunmetal lg:rounded-lg aspect-video' title="Showreel 2024-2023"></iframe>
                            </div><script src="https://player.vimeo.com/api/player.js"></script>

                        </div>
                    </div>
                </div>}

        </div>

    </>)
}