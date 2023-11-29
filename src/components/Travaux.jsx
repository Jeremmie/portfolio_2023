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
    function popUpLoop() {
        const popUpLoop = document.querySelector('#popUpLoop')
        popUpLoop.classList.toggle('showPopUp')
    }
    function popUpVideoGame() {
        const popUpVideoGame = document.querySelector('#popUpVideoGame')
        popUpVideoGame.classList.toggle('showPopUp')
    }
    function popUpSpeed() {
        const popUpSpeed = document.querySelector('#popUpSpeed')
        popUpSpeed.classList.toggle('showPopUp')
    }
    function popUpAscii() {
        const popUpAscii = document.querySelector('#popUpAscii')
        popUpAscii.classList.toggle('showPopUp')
    }
    function popUpRollUp() {
        const popUpRollUp = document.querySelector('#popUpRollUp')
        popUpRollUp.classList.toggle('showPopUp')
    }
    function popUpFace() {
        const popUpFace = document.querySelector('#popUpFace')
        popUpFace.classList.toggle('showPopUp')
    }


    return (<>
        <div id='popUpLeon' className='fixed bg-melon dark:bg-gunmetal text-gunmetal dark:text-melon -bottom-full w-screen h-screen z-40 transition_pop-up'>
            <div className='flex flex-row w-screen justify-between items-start'>
                <div className='pt-4 px-4 w-11/12'>
                    <p className='text-gunmetal/70 dark:text-melon/70 text-l mb-3'>2022</p>
                    <h1 className='mb-2 text-3xl'>Leon</h1>
                </div>

                <button onClick={popUpLeon} className='mb-4 p-4'>
                    <svg className='fill-gunmetal dark:fill-melon' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-gunmetal dark:border-melon transition_darkmode' />

            <div className='overflow-auto h-full rounded-xl'>
                <div>
                    <div className='overflow-x-scroll w-full px-4 mt-5 whitespace-nowrap rounded-lg'>
                        <div className='w-full inline-block mr-4 aspect-square bg-leonOriginal bg-cover rounded-lg shadow-lg'></div>
                        <div className='w-full inline-block mr-4 aspect-square bg-leonBlackWhite bg-cover rounded-lg shadow-lg'></div>
                        <div className='w-full inline-block mr-4 aspect-square bg-leonAscii bg-cover rounded-lg shadow-lg'></div>
                    </div>
                    <div className='flex flex-row justify-between items-center px-7 fill-gunmetal/80 dark:fill-melon/80 text-gunmetal/50 dark:text-melon/50'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg>

                        <p className='text_1rem'>use horizontal scroll to see more</p>

                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                    </div>
                </div>
                <p className='mt-3 p-4'>3D modelisation of a human face in a cartoon style.</p>
                <div className='flex flex-col px-4'>
                    <div className='flex flex-row items-center bg-gunmetal dark:bg-melon text-melon dark:text-gunmetal py-0.5 rounded-t-lg w-full'>
                        <svg className='fill-melon dark:fill-gunmetal ml-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" /></svg>
                        <p className='text-base ml-2'>3D model</p>
                    </div>
                    <div class="sketchfab-embed-wrapper mb-5"> <iframe className='w-full aspect-video rounded-b-lg shadow-lg' title="leon" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/d0632e76c56c4e76b2b7122a4a8fbc9d/embed"> </iframe></div> </div>
                <div className='w-screen h-[20vh]'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
            </div>
        </div >

        {/*Galaxy GROOVE*/}
        < div id='popUpGalaxyGroove' className='fixed bg-melon dark:bg-gunmetal text-gunmetal dark:text-melon -bottom-full w-screen h-screen z-40 transition_pop-up' >
            <div className='flex flex-row w-screen justify-between items-start'>
                <div className='pt-4 px-4 w-11/12'>
                    <p className='text-gunmetal/70 dark:text-melon/70 text-l mb-3'>2022</p>
                    <h1 className='mb-2 text-3xl'>Galaxy Groove</h1>
                </div>

                <button onClick={popUpGalaxyGroove} className='mb-4 p-4'>
                    <svg className='fill-gunmetal dark:fill-melon' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-gunmetal dark:border-melon transition_darkmode' />

            <div className='overflow-auto h-full rounded-xl px-4'>

                <div className='w-full mt-5 aspect-square bg-galaxyGroove bg-cover rounded-lg shadow-lg'></div>
                <p className='mt-3 mb-5'>I did this visual for <a className='decoration-solid text-sky-600 underline' href="https://youtube.com/playlist?list=OLAK5uy_lt3rbekjynUJUHvMdQF4KcKjA_-mqljYA&si=M__ZoUKJKb5ofGPN" target='blank'>Ryslo</a>'s album cover.</p>
                <div>
                    <div className='bg-gunmetal dark:bg-melon px-2 py-1 rounded-t-lg text-melon dark:text-gunmetal flex items-center'>
                        <svg className='fill-melon dark:fill-gunmetal mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-96-32a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM96 240c0-35 17.5-71.1 45.2-98.8S205 96 240 96c8.8 0 16-7.2 16-16s-7.2-16-16-16c-45.4 0-89.2 22.3-121.5 54.5S64 194.6 64 240c0 8.8 7.2 16 16 16s16-7.2 16-16z" /></svg>
                        <p className='small_text'>Ryslo's project</p>
                    </div>
                    <iframe className='w-full aspect-video rounded-b-lg shadow-lg' src="https://www.youtube-nocookie.com/embed/2IpeLgXe4ns?si=7f-2GOc_rPkn8dxl" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className='flex justify-center mt-10'>
                    <div className='w-11/12 h-[20vh]'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/*LOOP*/}
        < div id='popUpLoop' className='fixed bg-melon dark:bg-gunmetal text-gunmetal dark:text-melon -bottom-full w-screen h-screen z-40 transition_pop-up' >
            <div className='flex flex-row w-screen justify-between items-start'>
                <div className='pt-4 px-4 w-11/12'>
                    <p className='text-gunmetal/70 dark:text-melon/70 text-l mb-3'>2022</p>
                    <h1 className='mb-2 text-3xl'>Loop</h1>
                </div>

                <button onClick={popUpLoop} className='mb-4 p-4'>
                    <svg className='fill-gunmetal dark:fill-melon' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-gunmetal dark:border-melon transition_darkmode' />

            <div className='overflow-auto h-full rounded-xl px-4'>

                <div>
                    <div className='bg-gunmetal mt-4 dark:bg-melon px-2 py-1 rounded-t-lg text-melon dark:text-gunmetal flex items-center'>
                        <svg className='fill-melon dark:fill-gunmetal mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p className='small_text'>Loop render</p>
                    </div>
                    <iframe className='w-full aspect-video rounded-b-lg shadow-lg' src="https://www.youtube-nocookie.com/embed/Vvss8V0_oWk?si=Ii8Y4ktZWVUVO3AK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <p className='my-3'>The work was carried out in groups of two over the course of a week. The main aim of the workshop was to inlay a green screen video into a 3D environment.</p>
                <div>
                    <div className='bg-gunmetal dark:bg-melon px-2 py-1 rounded-t-lg text-melon dark:text-gunmetal flex items-center'>
                        <svg className='fill-melon dark:fill-gunmetal mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" /></svg>
                        <p className='small_text'>3D scene</p>
                    </div>
                    <div class="sketchfab-embed-wrapper mb-5"> <iframe className='w-full aspect-video rounded-b-lg shadow-lg' title="loop - scene" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/b2a332de2209448eae09c7536cc48fee/embed"> </iframe></div>
                </div>
                <p className='my-3'>Nous nous somme inspiré des visuels de Dedouze et des aventures de Julius Corentin Acquefacques (bande dessinée de Marc Antoine Mathieu).</p>
                <div className='w-[90vw] my-4 h-auto flex justify-between'>
                    <div className='w-[44vw] aspect-square border-gunmetal flex flex-col items-center justify-around rounded-3xl'>
                        <div className='bg-dedouze shadow-lg bg-center bg-cover rounded-full shadow-ms w-1/2 aspect-square'></div>
                        <p className='small_text'>Dedouze</p>
                        <div className='bg-gunmetal dark:bg-melon w-2/5 h-1/5 flex justify-center items-center rounded-full'>
                            <a href="https://www.dedouze.com/" target='blank'>
                                <svg className='fill-melon dark:fill-gunmetal' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className='w-[44vw] aspect-square border-gunmetal flex flex-col items-center justify-around rounded-3xl'>
                        <div className='bg-MarcAntoine shadow-lg bg-center bg-cover rounded-full shadow-ms w-1/2 aspect-square'></div>
                        <p className='small_text'>Marc-Antoine Mathieu</p>
                        <div className='bg-gunmetal dark:bg-melon w-2/5 h-1/5 flex justify-center items-center rounded-full'>
                            <a href="https://fr.wikipedia.org/wiki/Marc-Antoine_Mathieu" target='blank'>
                                <svg className='fill-melon dark:fill-gunmetal' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-gunmetal dark:bg-melon px-2 py-1 rounded-t-lg text-melon dark:text-gunmetal flex items-center'>
                        <svg className='fill-melon dark:fill-gunmetal mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" /></svg>
                        <p className='small_text'>Moodboard</p>
                    </div>
                    <img className='w-full aspect-video rounded-b-lg shadow-lg' src="https://i.ibb.co/xqQ7sVp/moodboard-All.jpg" alt="" />
                </div>
                <div className='flex justify-center mt-10'>
                    <div className='w-11/12 h-[20vh]'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/* ROBOT VIDEOGAME */}
        < div id='popUpVideoGame' className='fixed bg-melon dark:bg-gunmetal text-gunmetal dark:text-melon -bottom-full w-screen h-screen z-40 transition_pop-up' >
            <div className='flex flex-row w-screen justify-between items-start'>
                <div className='pt-4 px-4 w-11/12'>
                    <p className='text-gunmetal/70 dark:text-melon/70 text-l mb-3'>2022</p>
                    <h1 className='mb-2 text-3xl'>Video Game</h1>
                </div>

                <button onClick={popUpVideoGame} className='mb-4 p-4'>
                    <svg className='fill-gunmetal dark:fill-melon' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-gunmetal dark:border-melon transition_darkmode' />

            <div className='overflow-auto h-full rounded-xl px-4'>

                <div>
                    <div className='bg-gunmetal mt-4 dark:bg-melon px-2 py-1 rounded-t-lg text-melon dark:text-gunmetal flex items-center'>
                        <svg className='fill-melon dark:fill-gunmetal mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p className='small_text'>Gameplay</p>
                    </div>
                    <iframe className='w-full aspect-video rounded-b-lg shadow-lg' src="https://www.youtube-nocookie.com/embed/ew2mZlE_C-k?si=5BlpC7JgX9eJk-k2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </div>

                <p className='my-3'>This work is the result of a 5-day workshop designed to introduce us to Unity and create an interactive video game.
                </p>
                <div className='w-[90vw] h-1/6 rounded-lg flex justify-center items-center'>
                    <div className='h-full w-2/3 shadow-lg rounded-lg bg-videoGame bg-center bg-cover flex items-center justify-center'>
                        <div className='w-full md:hidden h-full bg-gunmetal/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-melon'><p>only playable on desktop :(</p></div>
                        <div className='w-1/2 h-1/2 hidden md:block bg-gunmetal/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-melon'><a href="https://jeremmie.github.io/Workshop_2022_Jeux_video/" target='blank'><h1>play</h1></a></div>
                    </div>

                </div>
                <p className='my-3'>As I only had a week, I was inspired (a lot) by one of the characters in a Souviens Ten-Zan animation (Mother Fucking Dalle).</p>
                <div className='w-[90vw] my-4 h-auto flex items-center justify-center'>
                    <div className='w-[44vw] aspect-square border-gunmetal flex flex-col items-center justify-around rounded-3xl'>
                        <div className='bg-souvienstanzan shadow-lg bg-center bg-cover rounded-full shadow-ms w-1/2 aspect-square'></div>
                        <p className='small_text'>Souviens Ten-Zan</p>
                        <div className='bg-gunmetal dark:bg-melon w-2/5 h-1/5 flex justify-center items-center rounded-full'>
                            <a href="https://www.instagram.com/p/CGFE2UsjaxS/?img_index=1" target='blank'>
                                <svg className='fill-melon dark:fill-gunmetal' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-gunmetal dark:bg-melon px-2 py-1 rounded-t-lg text-melon dark:text-gunmetal flex items-center'>
                        <svg className='fill-melon dark:fill-gunmetal mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" /></svg>
                        <p className='small_text'>Inspiration</p>
                    </div>
                    <img className='w-full aspect-video rounded-b-lg shadow-lg' src="https://i.ibb.co/NYGszk2/motherfuckingdalle.jpg" alt="" />
                    <p className='small_text'>image taken from the "<a className='underline	' href="https://www.souvienstenzan.com/" target='blank'>Souviens Ten-zan</a>" website (site expired)</p>
                </div>
                <div className='flex justify-center mt-10'>
                    <div className='w-11/12 h-[20vh]'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/* SPEED */}
        < div id='popUpSpeed' className='fixed bg-melon dark:bg-gunmetal text-gunmetal dark:text-melon -bottom-full w-screen h-screen z-40 transition_pop-up' >
            <div className='flex flex-row w-screen justify-between items-start'>
                <div className='pt-4 px-4 w-11/12'>
                    <p className='text-gunmetal/70 dark:text-melon/70 text-l mb-3'>2022</p>
                    <h1 className='mb-2 text-3xl'>Speed</h1>
                </div>

                <button onClick={popUpSpeed} className='mb-4 p-4'>
                    <svg className='fill-gunmetal dark:fill-melon' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-gunmetal dark:border-melon transition_darkmode' />

            <div className='overflow-auto h-full rounded-xl px-4'>

                <div>
                    <div className='bg-gunmetal mt-4 dark:bg-melon px-2 py-1 rounded-t-lg text-melon dark:text-gunmetal flex items-center'>
                        <svg className='fill-melon dark:fill-gunmetal mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p className='small_text'>Gameplay</p>
                    </div>
                    <iframe className='w-full aspect-video rounded-b-lg shadow-lg' src="https://www.youtube.com/embed/Wsk_QnBW1x0?si=CsefvMfDyeqpR1oC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </div>

                <p className='my-3'>Together with two other people, we made this video to illustrate the feelings of doubt, rebellion and irritation that most people have already experienced. Our theme was "Rebellion".
                </p>

                <div className='w-screen absolute bottom-0 mb-10'>
                    <div className='w-11/12 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/* ASCII */}
        < div id='popUpAscii' className='fixed bg-melon dark:bg-gunmetal text-gunmetal dark:text-melon -bottom-full w-screen h-screen z-40 transition_pop-up' >
            <div className='flex flex-row w-screen justify-between items-start'>
                <div className='pt-4 px-4 w-11/12'>
                    <p className='text-gunmetal/70 dark:text-melon/70 text-l mb-3'>2022</p>
                    <h1 className='mb-2 text-3xl'>Ascii</h1>
                </div>

                <button onClick={popUpAscii} className='mb-4 p-4'>
                    <svg className='fill-gunmetal dark:fill-melon' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-gunmetal dark:border-melon transition_darkmode' />

            <div className='overflow-auto h-full rounded-xl px-4'>

                <div>
                    <div className='bg-gunmetal mt-4 dark:bg-melon px-2 py-1 rounded-t-lg text-melon dark:text-gunmetal flex items-center'>
                        <svg className='fill-melon dark:fill-gunmetal mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p className='small_text'>Gameplay</p>
                    </div>
                    <iframe className='w-full aspect-video rounded-b-lg shadow-lg' src="https://www.youtube.com/embed/4t_01gAzoiM?si=4tXxZj-gTJPlfInO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </div>

                <p className='my-3'>Shader exercise on blender.
                </p>

                <div className='w-screen absolute bottom-0 mb-10'>
                    <div className='w-11/12 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/* RollUp */}
        < div id='popUpRollUp' className='fixed bg-melon dark:bg-gunmetal text-gunmetal dark:text-melon -bottom-full w-screen h-screen z-40 transition_pop-up' >
            <div className='flex flex-row w-screen justify-between items-start'>
                <div className='pt-4 px-4 w-11/12'>
                    <p className='text-gunmetal/70 dark:text-melon/70 text-l mb-3'>2021</p>
                    <h1 className='mb-2 text-3xl'>Roll-Up</h1>
                </div>

                <button onClick={popUpRollUp} className='mb-4 p-4'>
                    <svg className='fill-gunmetal dark:fill-melon' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-gunmetal dark:border-melon transition_darkmode' />

            <div className='overflow-auto h-full rounded-xl px-4 mb-20'>

                <div>
                    <div className='bg-gunmetal mt-4 dark:bg-melon px-2 py-1 rounded-t-lg text-melon dark:text-gunmetal flex items-center'>
                        <svg className='fill-melon dark:fill-gunmetal mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p className='small_text'>Video</p>
                    </div>
                    <iframe className='w-full aspect-video rounded-b-lg shadow-lg' src="https://www.youtube.com/embed/IF7aIzexB7k?si=Bp-xDKZ_V0-FAk4i" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </div>

                <p className='my-3'>I made this animation for a week-long workshop. We then added it to a script made with Processing and an arduino-controlled motion detector. This device made it possible to play a game physically, and display the score on the screen on top of the video.
                </p>

                <div>
                    <div className='bg-gunmetal mt-4 dark:bg-melon px-2 py-1 rounded-t-lg text-melon dark:text-gunmetal flex items-center'>
                        <svg className='fill-melon dark:fill-gunmetal mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p className='small_text'>Loading screen</p>
                    </div>
                    <iframe className='w-full aspect-video rounded-b-lg shadow-lg' src="https://www.youtube.com/embed/Y9-3h646qB4?si=srUvprfRlei-44RD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </div>

                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/* Face */}
        < div id='popUpFace' className='fixed bg-melon dark:bg-gunmetal text-gunmetal dark:text-melon -bottom-full w-screen h-screen z-40 transition_pop-up' >
            <div className='flex flex-row w-screen justify-between items-start'>
                <div className='pt-4 px-4 w-11/12'>
                    <p className='text-gunmetal/70 dark:text-melon/70 text-l mb-3'>2023</p>
                    <h1 className='mb-2 text-3xl'>Cartoon Face</h1>
                </div>

                <button onClick={popUpFace} className='mb-4 p-4'>
                    <svg className='fill-gunmetal dark:fill-melon' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-gunmetal dark:border-melon transition_darkmode' />

            <div className='overflow-auto h-full rounded-xl px-4'>

                <div>
                    <div className='bg-gunmetal mt-4 dark:bg-melon px-2 py-1 rounded-t-lg text-melon dark:text-gunmetal flex items-center'>
                        <svg className='fill-melon dark:fill-gunmetal mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p className='small_text'>Video</p>
                    </div>
                    <iframe className='w-full aspect-video rounded-b-lg shadow-lg' src="https://www.youtube.com/embed/4t_01gAzoiM?si=4tXxZj-gTJPlfInO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </div>

                <p className='my-3'>I made this animation for a week-long workshop. We then added it to a script made with Processing and an arduino-controlled motion detector. This device made it possible to play a game physically, and display the score on the screen on top of the video.
                </p>

                <div>
                    <div className='bg-gunmetal mt-4 dark:bg-melon px-2 py-1 rounded-t-lg text-melon dark:text-gunmetal flex items-center'>
                        <svg className='fill-melon dark:fill-gunmetal mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p className='small_text'>Loading screen</p>
                    </div>
                    <iframe className='w-full aspect-video rounded-b-lg shadow-lg' src="https://www.youtube.com/embed/4t_01gAzoiM?si=4tXxZj-gTJPlfInO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </div>

                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        <div className='w-screen h-screen fixed bg-melon dark:bg-gunmetal touch-none lg:flex lg:items-center lg:justify-center'>
            <div className='overflow-auto rounded-tl-[40px] rounded-tr-[20px] w-screen mt-20 h-screen lg:hidden'>
                <div className='flex flex-col justify-center my-5 items-center'>
                    <div className='w-[90%] text-melon dark:text-gunmetal bg-gunmetal dark:bg-melon rounded-t-lg lg:hidden'><p className=' px-2 py-1 text-base'>showreel</p></div>
                    <div className='shadow-lg w-[90%] h-[21vh] rounded-b-lg bg-gunmetal dark:bg-melon flex justify-center p-2 lg:p-0 lg:rounded-none'>
                        <iframe className='rounded-lg w-full bg-gunmetal lg:rounded-none' src="https://www.youtube-nocookie.com/embed/eeH90wwWKM8?si=S6GaKqYifEUS7jvx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div className='px-5 lg:hidden'>
                    <h1>Highlighted projects</h1>
                    <hr className='mb-5 border-gunmetal dark:border-melon transition_darkmode' />
                </div>
                {/* HIGHLITED PROJECT */}
                <div className='overflow-x-scroll whitespace-nowrap rounded-lg mb-5 lg:overflow-y-scroll lg:whitespace-none'>
                    <div onClick={popUpLeon} className='h-[40vh] inline-block shadow-lg mb-5 text-melon dark:bg-melon ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode lg:bg-leonAscii lg:rounded-none'>
                        <div className='bg-leonAscii bg-center bg-cover h-2/3 rounded-t-lg w-full lg:hidden lg:h-[100%]'></div>
                        <p className='text-sm ml-2 mt-2 lg:hidden'>charachter design</p>
                        <p className=' text-2xl ml-2 mt-2 lg:hidden'>Leon</p>
                    </div>

                    <div className='h-[40vh] inline-block mb-5 shadow-lg text-melon dark:bg-melon  ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode bg-center bg-cover lg:bg-galaxyGroove lg:rounded-none'>
                        <div onClick={popUpGalaxyGroove} className='bg-galaxyGroove bg-center bg-cover h-2/3 rounded-t-lg w-full lg:hidden'></div>
                        <p className='text-sm ml-2 mt-2 lg:hidden'>album cover</p>
                        <p className=' text-2xl ml-2 mt-2 lg:hidden'>Galaxy Groove</p>
                    </div>

                    <div className='h-[40vh] inline-block mb-5 shadow-lg text-melon dark:bg-melon  ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode mr-5 lg:bg-loop lg:rounded-none'>
                        <div onClick={popUpLoop} className='bg-loop bg-center bg-cover h-2/3 rounded-t-lg w-full lg:hidden'></div>
                        <p className='text-sm ml-2 mt-2 lg:hidden'>3D animation</p>
                        <p className=' text-2xl ml-2 mt-2 lg:hidden'>Loop</p>
                    </div>


                </div>

                {/* INTERNSHIP REPORT */}
                <a href="https://jeremmie.github.io/rapport_de_stage_main/dist/index.html" target='blank'>
                    <div className='flex flex-col justify-center my-5 items-center'>
                        <div className='w-[90%] text-melon dark:text-gunmetal bg-gunmetal dark:bg-melon rounded-t-lg flex items-center'>
                            <p className=' px-2 py-1 text-base'>2023 internship report</p>
                            <svg className='fill-melon ml-2 pt-1' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                        </div>
                        <div className='shadow-lg w-[90%] h-[21vh] rounded-b-lg bg-gunmetal dark:bg-melon flex justify-center p-2'>
                            <div className='bg-rapportStage h-full w-full rounded-lg bg-center bg-cover'></div>
                        </div>
                    </div>
                </a>

                <div className='mt-10 px-5'>
                    <h1 className='text-base'>other projects</h1>
                    <hr className='mb-5 border-gunmetal dark:border-melon transition_darkmode' />
                </div>

                {/* web / interactiv */}
                <div className='flex justify-end'>
                    <div className='w-[95vw]'>
                        <div className='bg-gunmetal dark:bg-melon w-fit px-4 shadow-lg rounded-t-lg ml-5'><p className='text-base text-melon dark:text-gunmetal'>web / interactiv</p></div>
                        <div className='overflow-auto shadow-lg whitespace-nowrap py-3 bg-gunmetal dark:bg-melon py-4 pl-3 rounded-l-lg mb-5'>
                            <div className='inline-block mr-5'>
                                <a className='inline-block' href="https://jeremmie.github.io/galaxy_generator_animate-build-/" target='blank'>
                                    <div className='bg-threejs bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                        <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 dark:bg-gunmetal/90 text-gunmetal dark:text-melon dark:text-gunmetal rounded-b-lg w-full transition_darkmode'>
                                            <p className='text-sm ml-2 mt-2'>threeJS</p>
                                            <div className='flex flex-row items-center w-full justify-between pr-5'>
                                                <p className=' text-2xl ml-2 mb-2'>Galaxy</p>
                                                <svg className='fill-gunmetal dark:fill-melon w-3' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
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
                                        <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
                                            <p className='text-sm ml-2 mt-2'>threeJS</p>
                                            <div className='flex flex-row items-center w-full justify-between pr-5'>
                                                <p className=' text-2xl ml-2 mb-2'>Gameboy</p>
                                                <svg className='fill-gunmetal dark:fill-melon w-3' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div onClick={popUpVideoGame} className='inline-block mr-5'>
                                <div className='bg-videoGame inline-block bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>Unity</p>
                                        <p className=' text-2xl ml-2 mb-2'>Video Game</p>
                                    </div>
                                </div>
                            </div>

                            <div className='inline-block mr-5 '>
                                <a href="https://skfb.ly/o8Tou" target='blank'>
                                    <div className='bg-sketchfab bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                        <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
                                            <p className='text-sm ml-2 mt-2'>sketchfab</p>
                                            <div className='flex flex-row items-center w-full justify-between pr-5'>
                                                <p className=' text-2xl ml-2 mb-2'>3D Cover</p>
                                                <svg className='fill-gunmetal dark:fill-melon w-3' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Speed */}
                <div id='popUpSpeed' onClick={popUpSpeed} className='overflow-x-scroll whitespace-nowrap flex justify-center rounded-lg'>
                    <div className='bg-speed bg-center bg-cover shadow-lg rounded-lg w-[90vw] h-[18vh] flex items-center justify-end mb-5'>
                        <div className='h-full dark:bg-melon/90 bg-gunmetal/90 text-melon dark:text-gunmetal flex items-center rounded-r-lg w-1/3 transition_darkmode'>
                            <div className='flex flex-col'>
                                <p className='text-sm ml-2 mt-2'>video</p>
                                <p className=' text-2xl ml-2 mb-2'>Speed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3D / animation */}
                <div className='flex justify-end'>
                    <div className='w-[95vw]'>
                        <div className='bg-gunmetal dark:bg-melon w-fit px-4 shadow-lg rounded-t-lg ml-5'><p className='text-base text-melon dark:text-gunmetal'>3D / animation</p></div>
                        <div className='overflow-auto shadow-lg whitespace-nowrap py-3 bg-gunmetal dark:bg-melon py-4 pl-3 rounded-l-lg mb-5'>

                            <div onClick={popUpAscii} className='inline-block mr-5'>
                                <div className='bg-asciiCube inline-block bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>blender</p>
                                        <p className=' text-2xl ml-2 mb-2'>Ascii</p>
                                    </div>
                                </div>
                            </div>

                            <div onClick={popUpRollUp} className='inline-block mr-5'>
                                <div className='bg-rollUp inline-block bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>blender</p>
                                        <p className=' text-2xl ml-2 mb-2'>Roll-Up</p>
                                    </div>
                                </div>
                            </div>

                            <div onClick={popUpFace} className='inline-block mr-5'>
                                <div className='bg-visagesculpt inline-block bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
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


                {/* 2D / animation / other */}
                <div className='flex justify-end'>
                    <div className='w-[95vw]'>
                        <div className='bg-gunmetal dark:bg-melon w-fit px-4 shadow-lg rounded-t-lg ml-5'><p className='text-base text-melon dark:text-gunmetal'>2D / animation / other</p></div>
                        <div className='overflow-auto shadow-lg whitespace-nowrap py-3 bg-gunmetal dark:bg-melon py-4 pl-3 rounded-l-lg mb-5'>

                            <div className='inline-block mr-5'>
                                <div className='bg-dessin inline-block bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>After effect</p>
                                        <p className=' text-2xl ml-2 mb-2'>Walk Cycle</p>
                                    </div>
                                </div>
                            </div>

                            <div className='inline-block mr-5'>
                                <div className='bg-vinyle inline-block bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>Illustrator</p>
                                        <p className=' text-2xl ml-2 mb-2'>Vinyl Cover</p>
                                    </div>
                                </div>
                            </div>

                            <div className='inline-block mr-5'>
                                <div className='bg-natureMorte inline-block bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>photography</p>
                                        <p className=' text-2xl ml-2 mb-2'>Still Life</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full mb-40 mt-1'><p className='text-[0.8rem] text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
            </div>

            <div className='overflow-auto rounded-tl-[40px] rounded-tr-[20px] grid-cols-4 grid_row_template w-screen mt-20 h-screen hidden lg:rounded-none bg-white lg:mt-0 lg:grid'>
                <div className='bg-loopTram bg-center bg-cover row-span-3 col-span-2'></div>
                <div className='bg-face_2Tram bg-center bg-cover row-span-2 col-span-2'></div>
                <div className='bg-leoTram row-span-2 col-span-1 bg-center bg-cover'>
                    {/* <div className='bg-black'>
                        <h1>hahah</h1>
                    </div> */}
                </div>
                <div className='bg-photo_2Tram row-span-3 Tram bg-bottom bg-cover'></div>
                <div className='bg-vinylTram row-span-2 bg-left bg-cover'></div>
                <div className='bg-speedTram bg-center bg-cover'></div>
                <div className='bg-astronauteTram col-span-2 bg-center bg-cover'></div>
                <div className='bg-three_1Tram col-span-2 bg-center bg-cover '></div>
                <div className='bg-jvTram bg-center bg-cover '></div>
                <div className='bg-three_2Tram bg-center bg-cover '></div>
                <div className='bg-serifTram col-span-4 row-span-2 bg-center bg-cover '></div>
                <div className='bg-fireTram row-span-4 bg-center bg-cover '></div>
                <div className='bg-knucksTram row-span-2 bg-center bg-cover '></div>
                <div className='bg-face_1Tram row-span-4 col-span-2 bg-center bg-cover'></div>
                <div className='bg-AE_1 row-span-2 bg-center bg-cover '></div>
            </div>
        </div >
    </>)
}