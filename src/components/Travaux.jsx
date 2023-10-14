import { useState } from 'react'
import Travaux3D from './travaux/Travaux_3D'



export default function Travaux({ clickInHouse }) {

    function popUpLeon() {
        const popUpLeon = document.querySelector('#popUpLeon')
        popUpLeon.classList.toggle('showPopUp')
    }


    return (<>
        <div id='popUpLeon' className='fixed p-4 bg-melon text-gunmetal -bottom-full w-screen h-screen z-50 transition_pop-up'>
            <button onClick={popUpLeon} className='block ml-auto mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </button>
            <div className='overflow-auto h-full rounded-xl'>
                <p className='text-gunmetal/70 text-l mb-3'>2022</p>
                <h1 className='mb-2 text-3xl'>Leon</h1>
                <hr className='mb-5 border-gunmetal dark:border-melon transition_darkmode' />
                <div className='w-full aspect-square bg-leonAscii bg-cover rounded-lg shadow-lg'></div>
                <p className='mt-3'>3D modelisation of a human face in a cartoon style.</p>
            </div>
        </div>

        

        <div className='w-screen h-screen fixed bg-melon dark:bg-gunmetal '>
            <div className='overflow-auto rounded-tl-[40px] rounded-tr-[20px] w-screen mt-20 h-screen'>
                <div className='flex flex-col justify-center my-5 items-center'>
                    <iframe className='shadow-lg w-[90%] h-[19vh] rounded-lg ' src="https://www.youtube-nocookie.com/embed/eeH90wwWKM8?si=S6GaKqYifEUS7jvx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className='px-5'>
                    <h1>Highlighted projects</h1>
                    <hr className='mb-5 border-gunmetal dark:border-melon transition_darkmode' />
                </div>
                <div className='overflow-x-scroll whitespace-nowrap rounded-lg mb-5'>
                    <div onClick={popUpLeon} className='h-[40vh] inline-block shadow-lg mb-5 text-melon dark:bg-melon ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode'>
                        <div className='bg-leonAscii bg-center bg-cover h-2/3 rounded-t-lg w-full'></div>
                        <p className='text-sm ml-2 mt-2'>charachter design</p>
                        <p className=' text-2xl ml-2 mt-2'>Leon</p>
                    </div>

                    <div className='h-[40vh] inline-block mb-5 shadow-lg text-melon dark:bg-melon  ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode'>
                        <div className='bg-galaxyGroove bg-center bg-cover h-2/3 rounded-t-lg w-full'></div>
                        <p className='text-sm ml-2 mt-2'>album cover</p>
                        <p className=' text-2xl ml-2 mt-2'>Galaxy Groove</p>
                    </div>

                    <div className='h-[40vh] inline-block mb-5 shadow-lg text-melon dark:bg-melon  ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode mr-5'>
                        <div className='bg-loop bg-center bg-cover h-2/3 rounded-t-lg w-full'></div>
                        <p className='text-sm ml-2 mt-2'>3D animation</p>
                        <p className=' text-2xl ml-2 mt-2'>Loop</p>
                    </div>


                </div>


                <a href="https://jeremmie.github.io/rapport_de_stage_main/dist/index.html" target='blank'>
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-[90%] h-[19vh] bg-rapportStage bg-center bg-cover flex flex-col justify-end shadow-lg rounded-lg'>
                            <div className='flex flex-row items-center bg-black/80 rounded-b-lg'>
                                <p className=' text-melon p-2'>2023 internship report</p>
                                <svg className='fill-melon ml-5' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                            </div>
                        </div>
                    </div>
                </a>

                <div className='mt-10 px-5'>
                    <h1 className='text-base'>other projects</h1>
                    <hr className='mb-5 border-gunmetal dark:border-melon transition_darkmode' />
                </div>

                {/* video game / nature morte */}
                <div className='overflow-x-scroll whitespace-nowrap flex justify-center rounded-b-lg'>
                    <div className='flex justify-between w-[90vw]'>

                        <a href="https://jeremmie.github.io/galaxy_generator_animate-build-/" target='blank'>
                            <div className='bg-threejs bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end mb-5'>
                                <div className='h-fit dark:bg-melon/90 bg-gunmetal/90 text-melon dark:text-gunmetal rounded-lg w-full transition_darkmode'>
                                    <p className='text-sm ml-2 mt-2'>threeJS</p>
                                    <div className='flex flex-row items-center w-full justify-between pr-5'>
                                        <p className=' text-2xl ml-2 mb-2'>Galaxy</p>
                                        <svg className='fill-gunmetal ml-5' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </a>

                        

                        <div className='bg-asciiCube bg- bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end mb-5'>
                            <div className='h-fit dark:bg-melon/90 bg-gunmetal/90 text-melon dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                <p className='text-sm ml-2 mt-2'>shader</p>
                                <p className=' text-2xl ml-2 mb-2'>Ascii</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Speed */}
                <div className='overflow-x-scroll whitespace-nowrap flex justify-center rounded-lg'>
                    <div className='bg-speed bg-center bg-cover shadow-lg rounded-lg w-[90vw] h-[18vh] flex items-center justify-end mb-5'>
                        <div className='h-full dark:bg-melon/90 bg-gunmetal/90 text-melon dark:text-gunmetal flex items-center rounded-r-lg w-1/3 transition_darkmode'>
                            <div className='flex flex-col'>
                                <p className='text-sm ml-2 mt-2'>video</p>
                                <p className=' text-2xl ml-2 mb-2'>Speed</p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* rollup / nature morte */}
                <div className='overflow-x-scroll whitespace-nowrap flex justify-center rounded-lg'>
                    <div className='flex justify-between w-[90vw]'>

                        <div className='bg-rollUp bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end mb-5'>
                            <div className='h-fit dark:bg-melon/90 bg-gunmetal/90 text-melon dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                <p className='text-sm ml-2 mt-2'>3D animation</p>
                                <p className=' text-2xl ml-2 mb-2'>Roll Up</p>
                            </div>
                        </div>

                        <div className='bg-natureMorte bg- bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end mb-5'>
                            <div className='h-fit dark:bg-melon/90 bg-gunmetal/90 text-melon dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                <p className='text-sm ml-2 mt-2'>photography</p>
                                <p className=' text-2xl ml-2 mb-2'>Still Life</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* video game / vinyle */}
                <div className='overflow-x-scroll whitespace-nowrap flex justify-center rounded-lg'>
                    <div className='flex justify-between w-[90vw]'>

                        <div className='bg-videoGame bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end mb-5'>
                            <div className='h-fit dark:bg-melon/90 bg-gunmetal/90 text-melon dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                <p className='text-sm ml-2 mt-2'>unity</p>
                                <p className=' text-2xl ml-2 mb-2'>Video Game</p>
                            </div>
                        </div>

                        <div className='bg-vinyle bg- bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end mb-5'>
                            <div className='h-fit dark:bg-melon/90 bg-gunmetal/90 text-melon dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                <p className='text-sm ml-2 mt-2'>vinyle</p>
                                <p className=' text-2xl ml-2 mb-2'>Late Night ...</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* gameboy / visage */}
                <div className='overflow-x-scroll whitespace-nowrap flex justify-center rounded-lg'>
                    <div className='flex justify-between w-[90vw]'>

                        <a href="https://jeremmie.github.io/galaxy_generator_animate-build-/" target='blank'>
                            <div className='bg-gameboy bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end mb-5'>
                                <div className='h-fit dark:bg-melon/90 bg-gunmetal/90 text-melon dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                    <p className='text-sm ml-2 mt-2'>threeJS</p>
                                    <div className='flex flex-row items-center w-full justify-between pr-5'>
                                        <p className=' text-2xl ml-2 mb-2'>Gameboy</p>
                                        <svg className='fill-gunmetal ml-5' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <div className='bg-visagesculpt bg- bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end mb-5'>
                            <div className='h-fit dark:bg-melon/90 bg-gunmetal/90 text-melon dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                <p className='text-sm ml-2 mt-2'>3D sculpting</p>
                                <p className=' text-2xl ml-2 mb-2'>Face</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* serif */}
                <div className='overflow-x-scroll whitespace-nowrap flex justify-center rounded-lg'>
                    <div className='bg-serif bg-center bg-cover shadow-lg rounded-lg w-[90vw] h-[18vh] flex items-center justify-end mb-5'>
                        <div className='h-full dark:bg-melon/90 bg-gunmetal/90 text-melon dark:text-gunmetal flex items-center rounded-r-lg w-1/3 transition_darkmode'>
                            <div className='flex flex-col'>
                                <p className='text-sm ml-2 mt-2'>gamejam</p>
                                <p className=' text-2xl ml-2 mb-2'>Serif</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3D animation / sketchfab */}
                <div className='overflow-x-scroll whitespace-nowrap flex justify-center rounded-lg'>
                    <div className='flex justify-between w-[90vw]'>

                        <div className='bg-sketchfab bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end mb-5'>
                            <div className='h-fit dark:bg-melon/90 bg-gunmetal/90 text-melon dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                <p className='text-sm ml-2 mt-2'>sketchfab</p>
                                <p className=' text-2xl ml-2 mb-2'>3D Cover</p>
                            </div>
                        </div>

                        <div className='bg-dessin bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end mb-5'>
                            <div className='h-fit dark:bg-melon/90 bg-gunmetal/90 text-melon dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                <p className='text-sm ml-2 mt-2'>2D animation</p>
                                <p className=' text-2xl ml-2 mb-2'>Walk cycle</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full mb-40 mt-1'><p className='text-[0.8rem] text-center'>Copyright © 2023 Jérémie Jaouen touts droits résérvés</p></div>
            </div>
        </div >
    </>)
}