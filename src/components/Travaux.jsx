import { useState } from 'react'
import Travaux3D from './travaux/Travaux_3D'



export default function Travaux({ clickInHouse }) {

    function popUpLeon() {
        const popUpLeon = document.querySelector('#popUpLeon')
        popUpLeon.classList.toggle('showPopUp')
    }
    function popUpGalaxyGroove() {
        const popUpGalaxyGroove = document.querySelector('#popUpGalaxyGroove')
        popUpGalaxyGroove.classList.toggle('showPopUp')
    }


    return (<>
        <div id='popUpLeon' className='fixed bg-melon text-gunmetal -bottom-full w-screen h-screen z-40 transition_pop-up'>
            <div className='flex flex-row w-screen justify-between items-start'>
                <div className='pt-4 px-4 w-11/12'>
                    <p className='text-gunmetal/70 text-l mb-3'>2022</p>
                    <h1 className='mb-2 text-3xl'>Leon</h1>
                </div>

                <button onClick={popUpLeon} className='mb-4 p-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='mb-5 w-11/12 block mx-auto border-gunmetal dark:border-melon transition_darkmode' />

            <div className='overflow-auto h-full rounded-xl'>
                <div>
                    <div className='overflow-x-scroll w-full px-4 whitespace-nowrap rounded-lg'>
                        <div className='w-full inline-block mr-4 aspect-square bg-leonOriginal bg-cover rounded-lg shadow-lg'></div>
                        <div className='w-full inline-block mr-4 aspect-square bg-leonBlackWhite bg-cover rounded-lg shadow-lg'></div>
                        <div className='w-full inline-block mr-4 aspect-square bg-leonAscii bg-cover rounded-lg shadow-lg'></div>
                    </div>
                    <div className='flex flex-row justify-between px-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                    </div>
                </div>
                <p className='mt-3 p-4'>3D modelisation of a human face in a cartoon style.</p>
                <div className='flex flex-col px-4'>
                    <div className='flex flex-row items-center bg-gunmetal text-melon py-0.5 rounded-t-lg w-full'>
                        <svg className='fill-melon px-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" /></svg>
                        <p className='text-base'>3D model</p>
                    </div>
                    <div class="sketchfab-embed-wrapper mb-5"> <iframe className='w-full aspect-video rounded-b-lg shadow-lg' title="leon" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/d0632e76c56c4e76b2b7122a4a8fbc9d/embed"> </iframe></div> </div>
                <div className='w-screen h-[20vh]'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen touts droits résérvés</p></div>
            </div>
        </div>

        {/*Galaxy GROOVE*/}
        <div id='popUpGalaxyGroove' className='fixed p-4 bg-melon text-gunmetal -bottom-full w-screen h-screen z-40 transition_pop-up'>
            <button onClick={popUpGalaxyGroove} className='block ml-auto mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
            </button>
            <div className='overflow-auto h-full rounded-xl'>
                <p className='text-gunmetal/70 text-l mb-3'>2022</p>
                <h1 className='mb-2 text-3xl'>Galaxy Groove</h1>
                <hr className='mb-5 border-gunmetal dark:border-melon transition_darkmode' />
                <div className='w-full aspect-square bg-leonAscii bg-cover rounded-lg shadow-lg'></div>
                <p className='mt-3 mb-5'>3D modelisation of a human face in a cartoon style.</p>
                <div class="sketchfab-embed-wrapper"> <iframe className='w-full aspect-video shadow-lg' title="leon" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/d0632e76c56c4e76b2b7122a4a8fbc9d/embed"> </iframe> </div>
            </div>
        </div>


        <div className='w-screen h-screen fixed bg-melon dark:bg-gunmetal touch-none'>
            <div className='overflow-auto rounded-tl-[40px] rounded-tr-[20px] w-screen mt-20 h-screen'>
                <div className='flex flex-col justify-center my-5 items-center'>
                    <div className='w-[90%] text-melon bg-gunmetal rounded-t-lg'><p className=' px-2 py-1 text-base'>showreel</p></div>
                    <div className='shadow-lg w-[90%] h-[21vh] rounded-b-lg bg-gunmetal flex justify-center p-2'>
                        <iframe className='rounded-lg w-full bg-gunmetal' src="https://www.youtube-nocookie.com/embed/eeH90wwWKM8?si=S6GaKqYifEUS7jvx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
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
                        <div onClick={popUpGalaxyGroove} className='bg-galaxyGroove bg-center bg-cover h-2/3 rounded-t-lg w-full'></div>
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
                    <div className='flex flex-col justify-center my-5 items-center'>
                        <div className='w-[90%] text-melon bg-gunmetal rounded-t-lg flex items-center'>
                            <p className=' px-2 py-1 text-base'>2023 internship report</p>
                            <svg className='fill-melon ml-2 pt-1' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                        </div>
                        <div className='shadow-lg w-[90%] h-[21vh] rounded-b-lg bg-gunmetal flex justify-center p-2'>
                            <div className='bg-rapportStage h-full w-full rounded-lg bg-center bg-cover'></div>
                        </div>
                    </div>
                </a>

                <div className='mt-10 px-5'>
                    <h1 className='text-base'>other projects</h1>
                    <hr className='mb-5 border-gunmetal dark:border-melon transition_darkmode' />
                </div>

                {/* video game / nature morte */}
                <div className='flex justify-end'>
                    <div className='w-[95vw]'>
                        <div className='bg-gunmetal w-fit px-4 shadow-lg rounded-t-lg ml-5'><p className='text-base text-melon'>web / interactiv</p></div>
                        <div className='overflow-auto shadow-lg whitespace-nowrap py-3 bg-gunmetal py-4 pl-3 rounded-l-lg mb-5'>
                            <div className='inline-block mr-5'>
                                <a className='inline-block' href="https://jeremmie.github.io/galaxy_generator_animate-build-/" target='blank'>
                                    <div className='bg-threejs bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                        <div className='h-fit dark:bg-melon/90 bg-melon/90 text-gunmetal dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                            <p className='text-sm ml-2 mt-2'>threeJS</p>
                                            <div className='flex flex-row items-center w-full justify-between pr-5'>
                                                <p className=' text-2xl ml-2 mb-2'>Galaxy</p>
                                                <svg className='fill-gunmetal w-3' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className='inline-block mr-5 '>
                                <a href="https://jeremmie.github.io/galaxy_generator_animate-build-/" target='blank'>
                                    <div className='bg-gameboy bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                        <div className='h-fit dark:bg-melon/90 bg-melon/90 text-gunmetal dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                            <p className='text-sm ml-2 mt-2'>threeJS</p>
                                            <div className='flex flex-row items-center w-full justify-between pr-5'>
                                                <p className=' text-2xl ml-2 mb-2'>Gameboy</p>
                                                <svg className='fill-gunmetal w-3' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className='inline-block mr-5'>
                                <div className='bg-videoGame inline-block bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-melon/90 bg-melon/90 text-gunmetal dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>Unity</p>
                                        <p className=' text-2xl ml-2 mb-2'>Video Game</p>
                                    </div>
                                </div>
                            </div>

                            <div className='inline-block mr-5'>
                                <div className='bg-sketchfab inline-block bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-melon/90 bg-melon/90 text-gunmetal dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>sketchfab</p>
                                        <p className=' text-2xl ml-2 mb-2'>3D Cover</p>
                                    </div>
                                </div>
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

                {/* video game / nature morte */}
                <div className='flex justify-end'>
                    <div className='w-[95vw]'>
                        <div className='bg-gunmetal w-fit px-4 shadow-lg rounded-t-lg ml-5'><p className='text-base text-melon'>3D / animation</p></div>
                        <div className='overflow-auto shadow-lg whitespace-nowrap py-3 bg-gunmetal py-4 pl-3 rounded-l-lg mb-5'>

                            <div className='inline-block mr-5'>
                                <div className='bg-asciiCube inline-block bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-melon/90 bg-melon/90 text-gunmetal dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>blender</p>
                                        <p className=' text-2xl ml-2 mb-2'>Ascii</p>
                                    </div>
                                </div>
                            </div>

                            <div className='inline-block mr-5'>
                                <div className='bg-rollUp inline-block bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-melon/90 bg-melon/90 text-gunmetal dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>blender</p>
                                        <p className=' text-2xl ml-2 mb-2'>Roll-Up</p>
                                    </div>
                                </div>
                            </div>

                            <div className='inline-block mr-5'>
                                <div className='bg-visagesculpt inline-block bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-melon/90 bg-melon/90 text-gunmetal dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>blender</p>
                                        <p className=' text-2xl ml-2 mb-2'>Face</p>
                                    </div>
                                </div>
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

                <div className='flex justify-end'>
                    <div className='w-[95vw]'>
                        <div className='bg-gunmetal w-fit px-4 shadow-lg rounded-t-lg ml-5'><p className='text-base text-melon'>2D / animation / other</p></div>
                        <div className='overflow-auto shadow-lg whitespace-nowrap py-3 bg-gunmetal py-4 pl-3 rounded-l-lg mb-5'>

                            <div className='inline-block mr-5'>
                                <div className='bg-dessin inline-block bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-melon/90 bg-melon/90 text-gunmetal dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>After effect</p>
                                        <p className=' text-2xl ml-2 mb-2'>Walk Cycle</p>
                                    </div>
                                </div>
                            </div>

                            <div className='inline-block mr-5'>
                                <div className='bg-vinyle inline-block bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-melon/90 bg-melon/90 text-gunmetal dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>Illustrator</p>
                                        <p className=' text-2xl ml-2 mb-2'>Vinyl Cover</p>
                                    </div>
                                </div>
                            </div>

                            <div className='inline-block mr-5'>
                                <div className='bg-natureMorte inline-block bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-melon/90 bg-melon/90 text-gunmetal dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>photography</p>
                                        <p className=' text-2xl ml-2 mb-2'>Still Life</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full mb-40 mt-1'><p className='text-[0.8rem] text-center'>Copyright © 2023 Jérémie Jaouen touts droits résérvés</p></div>
            </div>
        </div >
    </>)
}