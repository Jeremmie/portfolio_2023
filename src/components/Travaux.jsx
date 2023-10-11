import { useState } from 'react'
import Travaux3D from './travaux/Travaux_3D'



export default function Travaux({ clickInHouse }) {


    return (<>
        <div className='w-screen h-screen fixed bg-melon dark:bg-gunmetal overflow-auto'>
            <div className='mt-20 px-5'>
                <h1>Highlighted projects</h1>
                <hr className='mb-5 border-gunmetal dark:border-melon transition_darkmode' />
            </div>
            <div className='overflow-x-scroll whitespace-nowrap rounded-lg mb-5'>
                <div className='h-[40vh] inline-block shadow-lg mb-5 text-melon dark:bg-melon ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode'>
                    <div className='bg-leonAscii bg-center bg-cover h-2/3 rounded-t-lg w-full'></div>
                    <p className='text-sm ml-2 mt-2'>charachter design</p>
                    <p className=' text-3xl ml-2 mt-2'>Leon</p>
                </div>

                <div className='h-[40vh] inline-block mb-5 shadow-lg text-melon dark:bg-melon  ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode'>
                    <div className='bg-galaxyGroove bg-center bg-cover h-2/3 rounded-t-lg w-full'></div>
                    <p className='text-sm ml-2 mt-2'>album cover</p>
                    <p className=' text-3xl ml-2 mt-2'>Galaxy Groove</p>
                </div>

                <div className='h-[40vh] inline-block mb-5 shadow-lg text-melon dark:bg-melon  ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode'>
                    <div className='bg-loop bg-center bg-cover h-2/3 rounded-t-lg w-full'></div>
                    <p className='text-sm ml-2 mt-2'>3D animation</p>
                    <p className=' text-3xl ml-2 mt-2'>Loop</p>
                </div>

                <div className='h-[40vh] inline-block mb-5 shadow-lg text-melon dark:bg-melon  ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode'>
                    <div className='bg-videoGame bg-center bg-cover h-2/3 rounded-t-lg w-full'></div>
                    <p className='text-sm ml-2 mt-2'>video game</p>
                    <p className=' text-3xl ml-2 mt-2'>Video Game</p>
                </div>

                <div className='h-[40vh] inline-block mb-5 shadow-lg text-melon dark:bg-melon  ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode'>
                    <div className='bg-natureMorte bg-center bg-cover h-2/3 rounded-t-lg w-full'></div>
                    <p className='text-sm ml-2 mt-2'>photography</p>
                    <p className=' text-3xl ml-2 mt-2'>Still Life</p>
                </div>

                <div className='h-[40vh] inline-block mb-5 shadow-lg text-melon dark:bg-melon  ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode'>
                    <div className='bg-threejs bg-center bg-cover h-2/3 rounded-t-lg w-full'></div>
                    <p className='text-sm ml-2 mt-2'>web</p>
                    <p className=' text-3xl ml-2 mt-2'>Three JS</p>
                </div>

                <div className='h-[40vh] inline-block mb-5 shadow-lg text-melon dark:bg-melon  ml-5 mr-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode'>
                    <div className='bg-rollUp bg-center bg-cover h-2/3 rounded-t-lg w-full'></div>
                    <p className='text-sm ml-2 mt-2'>3D animation</p>
                    <p className=' text-3xl ml-2 mt-2'>Roll-Up</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <iframe className='shadow-lg w-[90%] h-[19vh] rounded-lg ' src="https://www.youtube-nocookie.com/embed/eeH90wwWKM8?si=S6GaKqYifEUS7jvx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <a href="https://jeremmie.github.io/rapport_de_stage_main/dist/index.html" target='blank'>
            <div className='flex flex-col justify-center items-center mt-5'>
                <div className='w-[90%] h-[19vh] bg-rapportStage bg-center bg-cover flex flex-col justify-end shadow-lg rounded-lg'>
                    <div className='flex flex-row items-center bg-black/80 rounded-b-lg'>
                    <p className=' text-melon p-2'>internship report</p>
                    <svg className='fill-melon ml-5' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                    </div>
                </div>
            </div>
            </a>

            <div className='mt-10 px-5'>
                <h1 className='text-base'>other projects</h1>
                <hr className='mb-5 border-gunmetal dark:border-melon transition_darkmode' />
            </div>

            {/* ASCII / Late Night Jazz */}
            <div className='overflow-x-scroll whitespace-nowrap flex justify-center rounded-lg'>
                <div className='flex justify-between w-[90vw]'>
                    <div className='inline-block shadow-lg mb-5 text-melon rounded-b-xl flex flex-col w-[42vw] h-fit dark:text-gunmetal'>
                        <div className='bg-galaxyGroove bg-center bg-cover aspect-square rounded-t-lg w-full'></div>
                        <div className='h-fit dark:bg-melon bg-gunmetal rounded-b-xl transition_darkmode'>
                            <p className='text-sm ml-2 mt-2'>3D</p>
                            <p className=' text-2xl ml-2 mb-2'>Galaxy Gro...</p>
                        </div>
                    </div>
                    <div className='inline-block shadow-lg mb-5 text-melon rounded-b-xl flex flex-col w-[42vw] h-fit dark:text-gunmetal'>
                        <div className='bg-vinyle bg-center bg-cover aspect-square rounded-t-lg w-full'></div>
                        <div className='h-fit dark:bg-melon bg-gunmetal rounded-b-xl transition_darkmode'>
                            <p className='text-sm ml-2 mt-2'>vinyle cover</p>
                            <p className=' text-2xl ml-2 mb-2'>Late Night ...</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SPEED */}
            <div className='overflow-x-scroll whitespace-nowrap flex justify-center rounded-lg mb-5 h-[12vh]'>
                <div className='flex justify-between w-[90vw]'>
                    <div className='inline-block shadow-lg mb-5 text-melon rounded-b-xl flex flex-row w-[90vw] h-full dark:text-gunmetal'>
                        <div className='bg-speed bg-center bg-cover w-[42vw] rounded-l-lg h-auto w-[70%]'></div>
                        <div className='h-full w-[30%] dark:bg-melon bg-gunmetal rounded-r-xl transition_darkmode'>
                            <p className='text-sm ml-2 mt-2'>video</p>
                            <p className=' text-2xl ml-2 mb-2'>Speed</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Galaxy Groove / ? */}
            <div className='overflow-x-scroll whitespace-nowrap flex justify-center rounded-lg'>
                <div className='flex justify-between w-[90vw]'>
                    <div className='inline-block shadow-lg mb-5 text-melon rounded-b-xl flex flex-col w-[42vw] h-fit dark:text-gunmetal'>
                        <div className='bg-asciiCube bg-center bg-cover aspect-square rounded-t-lg w-full'></div>
                        <div className='h-fit dark:bg-melon bg-gunmetal rounded-b-xl transition_darkmode'>
                            <p className='text-sm ml-2 mt-2'>shaders</p>
                            <p className=' text-2xl ml-2 mb-2'>ascii</p>
                        </div>
                    </div>
                    <div className='inline-block shadow-lg mb-5 text-melon rounded-b-xl flex flex-col w-[42vw] h-fit dark:text-gunmetal'>
                        <div className='bg-sketchfab bg-center bg-cover aspect-square rounded-t-lg w-full'></div>
                        <div className='h-fit dark:bg-melon bg-gunmetal rounded-b-xl transition_darkmode'>
                            <p className='text-sm ml-2 mt-2'>3D</p>
                            <p className=' text-2xl ml-2 mb-2'>3D cover</p>
                        </div>
                    </div>
                </div>
            </div>

            </div >
    </>)
}