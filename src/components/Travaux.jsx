import { useState } from 'react'
import Travaux3D from './travaux/Travaux_3D'
import ReactPlayer from 'react-player'
import Header from './Header'



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
    function popUpEclipse() {
        const popUpEclipse = document.querySelector('#popUpEclipse')
        popUpEclipse.classList.toggle('showPopUp')
    }
    function popUpRollUp() {
        const popUpRollUp = document.querySelector('#popUpRollUp')
        popUpRollUp.classList.toggle('showPopUp')
    }
    function popUpFace() {
        const popUpFace = document.querySelector('#popUpFace')
        popUpFace.classList.toggle('showPopUp')
    }
    function popUpAe() {
        const popUpAe = document.querySelector('#popUpAe')
        popUpAe.classList.toggle('showPopUp')
    }
    function popUpCloth() {
        const popUpCloth = document.querySelector('#popUpCloth')
        popUpCloth.classList.toggle('showPopUp')
    }
    function popUpGalaxygen() {
        const popUpGalaxygen = document.querySelector('#popUpGalaxygen')
        popUpGalaxygen.classList.toggle('showPopUp')
    }
    function popUpSerif() {
        const popUpSerif = document.querySelector('#popUpSerif')
        popUpSerif.classList.toggle('showPopUp')
    }
    function popUpStillLife() {
        const popUpStillLife = document.querySelector("#popUpStillLife")
        popUpStillLife.classList.toggle('showPopUp')
    }
    function popUpTinyTroubles() {
        const popUpTinyTroubles = document.querySelector("#popUpTinyTroubles")
        popUpTinyTroubles.classList.toggle('showPopUp')
    }



    return (<>
        <Header />

        < div id='popUpLeon' className='work_principal -bottom-full transition_pop-up lg:backdrop-blur-xl' >
            <div className='bg-loopTram bg-cover bg-center '>
                <div className='bg-gradient-to-t from-gunmetal to-black/80 w-full h-[50px]'></div>
            </div>
            <div className='work_header'>
                <div>
                    <p>2022</p>
                    <h1>Leon</h1>
                </div>

                <button onClick={popUpLeon}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-melonSoft transition_darkmode lg:w-1/2' />

            <div className='work_section'>
                <div className='lg:flex lg:flex-col lg:items-center lg:justify-center'>
                    <div className='overflow-x-scroll w-full px-4 mt-5 whitespace-nowrap rounded-lg lg:w-3/4'>
                        <div className='w-full inline-block mr-4 aspect-square bg-leonOriginal bg-cover shadow-lg'></div>
                        <div className='w-full inline-block mr-4 aspect-square bg-leonBlackWhite bg-cover shadow-lg'></div>
                        <div className='w-full inline-block mr-4 aspect-square bg-leonAscii bg-cover shadow-lg'></div>
                    </div>
                    <div className='flex flex-row justify-between items-center fill-melonSoft px-4 lg:w-full lg:px-10'>
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

                <div className='work_content_sketchfab'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" /></svg>
                        <p>3D model</p>
                    </span>
                    <div class="sketchfab-embed-wrapper"> <iframe title="leon" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/d0632e76c56c4e76b2b7122a4a8fbc9d/embed"> </iframe></div> </div>

                <div className='h-[300px] w-full'></div>
                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 lg:w-1/2 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/*Galaxy GROOVE*/}
        < div id='popUpGalaxyGroove' className='work_principal -bottom-full transition_pop-up lg:backdrop-blur-xl' >
            <div className='bg-astronauteTram bg-cover bg-center '>
                <div className='bg-gradient-to-t from-gunmetal to-black/80 w-full h-[50px]'></div>
            </div>
            <div className='work_header'>
                <div>
                    <p>2021</p>
                    <h1>Galaxy Groove</h1>
                </div>

                <button onClick={popUpGalaxyGroove}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-melonSoft transition_darkmode lg:w-1/2' />

            <div className='work_section'>


                <img className='w-full shadow-lg' src="https://i.ibb.co/Ws5bfB7/galaxygroove.png" alt="" />
                <p>I did this visual wih Blender for <a className='decoration-solid text-sky-600 underline' href="https://youtube.com/playlist?list=OLAK5uy_lt3rbekjynUJUHvMdQF4KcKjA_-mqljYA&si=M__ZoUKJKb5ofGPN" target='blank'>Ryslo</a>'s album cover.</p>

                <div className='h-[300px] w-full'></div>
                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 lg:w-1/2 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/*Marvelous designer*/}
        < div id='popUpCloth' className='work_principal -bottom-full transition_pop-up lg:backdrop-blur-xl' >
            <div className='bg-clothSim bg-cover bg-center '>
                <div className='bg-gradient-to-t from-gunmetal to-black/80 w-full h-[50px]'></div>
            </div>
            <div className='work_header'>
                <div>
                    <p>2024</p>
                    <h1>Clothes Simulation</h1>
                </div>

                <button onClick={popUpCloth}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-melonSoft transition_darkmode lg:w-1/2' />

            <div className='work_section'>


                <div className='flex flex-row w-full h-1/2 lg:h-2/3 justify-between'>
                    <div className='bg-clothSim w-1/2 h-full bg-center bg-cover'></div>
                    <div className='flex flex-col justify-between w-1/2 h-full items-center'>
                        <div className='bg-clothSimSquare bg-center bg-cover text-black w-full h-full'></div>
                        <div className='bg-clothSimSquare_2 bg-center bg-cover text-black w-full h-full'></div>
                    </div>
                </div>
                <div className='bg-clothSimPaysage h-1/5 lg:h-1/2 bg-center bg-cover w-full bg-white'></div>

                <iframe className='w-full h-1/4 lg:h-2/5' src="https://www.youtube-nocookie.com/embed/QKphD9ZJlX8?si=_p91qys0j8eyb9Vp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                <p>Experimenting with Marvelous Designer to get good and accurate clothing simulations.</p>
                <div className='h-[400px]'></div>
                n


                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 lg:w-1/2 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >


        {/* ROBOT VIDEOGAME */}
        < div id='popUpVideoGame' className='work_principal -bottom-full transition_pop-up lg:backdrop-blur-xl' >
            <div className='bg-jvTram bg-cover bg-center '>
                <div className='bg-gradient-to-t from-gunmetal to-black/80 w-full h-[50px]'></div>
            </div>
            <div className='work_header'>
                <div>
                    <p>2022</p>
                    <h1>Video Game</h1>
                </div>

                <button onClick={popUpVideoGame}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-melonSoft transition_darkmode lg:w-1/2' />


            <div className='work_section'>

                <span className='work_content_video'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p className='small_text'>Gameplay</p>
                    </div>
                    <iframe className='shadow-lg' src="https://www.youtube-nocookie.com/embed/ew2mZlE_C-k?si=5BlpC7JgX9eJk-k2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </span>

                <p>This work is the result of a 5-day workshop designed to introduce us to Unity and create an interactive video game.</p>
                <div className='w-[90vw] h-1/6 rounded-lg flex justify-center items-center lg:w-full'>
                    <div className='h-full w-2/3 shadow-lg rounded-lg bg-videoGame bg-center bg-cover flex items-center justify-center lg:w-1/3'>
                        <div className='w-full md:hidden h-full bg-gunmetal/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-melonSoft'><p>only playable on desktop :(</p></div>
                        <div className='w-1/2 h-1/2 hidden lg:flex bg-gunmetal/50 backdrop-blur-sm rounded-lg items-center justify-center text-melonSoft'><a href="https://jeremmie.github.io/Workshop_2022_Jeux_video/" target='blank'><h1>play</h1></a></div>
                    </div>

                </div>
                <p className='my-3'>As I only had a week, I was inspired (a lot) by one of the characters in a Souviens Ten-Zan animation (Mother Fucking Dalle).</p>

                <div className='w-[90vw] lg:w-11/12 lg:my-8 my-4 h-auto flex items-center justify-center'>
                    <div className='w-[44vw] aspect-square border-gunmetal flex flex-col items-center justify-around rounded-3xl lg:w-1/2'>
                        <div className='bg-souvienstanzan shadow-lg bg-center bg-cover rounded-full shadow-ms w-1/2 aspect-square'></div>
                        <p className='small_text'>Souviens Ten-Zan</p>
                        <div className='bg-melonSoft w-2/5 h-1/5 flex justify-center items-center rounded-full'>
                            <a href="https://www.instagram.com/p/CGFE2UsjaxS/?img_index=1" target='blank'>
                                <svg className='fill-gunmetal' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <span className='work_content_video'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" /></svg>
                        <p className='small_text'>Inspiration</p>
                    </div>
                    <img src="https://i.ibb.co/NYGszk2/motherfuckingdalle.jpg" alt="" />
                    <p className='small_text'>image taken from the "<a className='underline	' href="https://www.souvienstenzan.com/" target='blank'>Souviens Ten-zan</a>" website (site expired)</p>
                </span>

                <div className='h-[300px] w-full'></div>
                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 lg:w-1/2 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/* SPEED */}
        < div id='popUpSpeed' className='work_principal -bottom-full transition_pop-up lg:backdrop-blur-xl' >
            <div className='bg-speedTram bg-cover bg-center '>
                <div className='bg-gradient-to-t from-gunmetal to-black/80 w-full h-[50px]'></div>
            </div>
            <div className='work_header'>
                <div>
                    <p>2022</p>
                    <h1>Speed</h1>
                </div>

                <button onClick={popUpSpeed}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-melonSoft transition_darkmode lg:w-1/2' />

            <div className='work_section'>

                <span className='work_content_video'>
                    <div className='bg-gunmetal dark:bg-melonSoft px-2 py-1 rounded-t-lg text-melonSoft dark:text-gunmetal flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p>render</p>
                    </div>
                    <iframe className='shadow-lg' src="https://www.youtube.com/embed/jPSvWEEKFak?si=E94PaHzas4P-z_5i" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </span>

                <p className='my-3'>Production of a dummy advertisement for an energy drink brand</p>
                <div className='h-[300px] w-full'></div>
                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 lg:w-1/2 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/* Eclipse */}
        < div id='popUpEclipse' className='work_principal -bottom-full transition_pop-up lg:backdrop-blur-xl' >
            <div className='bg-placeholder bg-cover bg-center '>
                <div className='bg-gradient-to-t from-gunmetal to-black/80 w-full h-[50px]'></div>
            </div>
            <div className='work_header'>
                <div>
                    <p>2023</p>
                    <h1>Eclipse</h1>
                </div>

                <button onClick={popUpEclipse}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-melonSoft transition_darkmode lg:w-1/2' />

            <div className='work_section'>

                <span className='work_content_video'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p>render</p>
                    </div>
                    <iframe className='shadow-lg' src="https://www.youtube-nocookie.com/embed/Wsk_QnBW1x0?si=RBFtcl6WX8n8_39J" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </span>

                <p>We imagined, wrote and shot this video over the course of a month with four other people. The theme: "Rebellion" motivated us to talk about the rebellious thoughts that cross our minds.</p>

                <div className='h-[300px] w-full'></div>
                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 lg:w-1/2 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>

            </div>
        </div >

        {/* RollUp */}
        < div id='popUpRollUp' className='work_principal -bottom-full transition_pop-up lg:backdrop-blur-xl' >
            <div className='bg-rollUpTram bg-cover bg-center '>
                <div className='bg-gradient-to-t from-gunmetal to-black/80 w-full h-[50px]'></div>
            </div>
            <div className='work_header'>
                <div>
                    <p>2021</p>
                    <h1>Roll-Up</h1>
                </div>

                <button onClick={popUpRollUp}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-melonSoft transition_darkmode lg:w-1/2' />

            <div className='work_section'>

                <span className='work_content_video'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p>Video</p>
                    </div>
                    <iframe className='shadow-lg' src="https://www.youtube.com/embed/IF7aIzexB7k?si=Bp-xDKZ_V0-FAk4i" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </span>

                <p>I made this animation for a week-long workshop. We then added it to a script made with Processing and an arduino-controlled motion detector. This device made it possible to play a game physically, and display the score on the screen on top of the video.
                </p>

                <span className='work_content_video'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p>Loading screen</p>
                    </div>
                    <iframe className='shadow-lg' src="https://www.youtube.com/embed/Y9-3h646qB4?si=srUvprfRlei-44RD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </span>

                <div className='h-[300px] w-full'></div>
                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 lg:w-1/2 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div>

        {/* Face */}
        < div id='popUpFace' className='work_principal -bottom-full transition_pop-up' >
            <div className='work_header'>
                <div>
                    <p>2023</p>
                    <h1>Cartoon Face</h1>
                </div>

                <button onClick={popUpFace}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-melonSoft transition_darkmode lg:w-1/2' />

            <div className='work_section'>


                <div className='flex flex-row w-1/2 justify-between'>
                    <img src="../img/media/face_1.jpg" className='py-4 pr-4' alt="" />
                    <img src="../img/media/face_2.jpg" className='py-4 pl-4' alt="" />
                </div>
                <div className='flex flex-row w-1/2 justify-between'>
                    <img src="../img/media/face_3.jpg" className='py-4 pr-4' alt="" />
                    <img src="../img/media/face_4.jpg" className='py-4 pl-4' alt="" />
                </div>

                <span className='lg:flex lg:flex-row w-full h-fit justify-between lg:mt-4 vimeoPlayer'>
                    <div className='lg:pr-4 w-full mb-4'><ReactPlayer loop playing controls width={{ width: "100%" }} url='https://vimeo.com/910803323' /></div>
                </span>

                <p>Sculpting, retopology and texturing exercise. <br />
                    Made with Blender and Substance Painter</p>
                <div className='h-[200px]'></div>
                n


                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 lg:w-1/2 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/* Loop */}
        < div id='popUpLoop' className='work_principal -bottom-full transition_pop-up' >
            <div className='bg-loopTram bg-cover bg-center '>
                <div className='bg-gradient-to-t from-gunmetal to-black/80 w-full h-[50px]'></div>
            </div>
            <div className='work_header'>
                <div>
                    <p>2022</p>
                    <h1>Loop</h1>
                </div>

                <button onClick={popUpLoop}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-melonSoft transition_darkmode lg:w-1/2' />

            <div className='work_section'>

                <span className='work_content_video'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p>Loop render</p>
                    </div>
                    <iframe className='shadow-lg' src="https://www.youtube-nocookie.com/embed/Vvss8V0_oWk?si=Ii8Y4ktZWVUVO3AK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </span>

                <p>The work was carried out in groups of two over the course of a week. The main aim of the workshop was to inlay a green screen video into a 3D environment.</p>

                <span className='work_content_sketchfab'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" /></svg>
                        <p>3D scene</p>
                    </span>
                    <div class="sketchfab-embed-wrapper"> <iframe title="loop - scene" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/b2a332de2209448eae09c7536cc48fee/embed"> </iframe></div>
                </span>
                <p>We were inspired by the visuals of Dedouze and the adventures of
                    Julius Corentin Acquefacques (comic strip by Marc Antoine Mathieu).</p>
                <div className='w-[90vw] lg:w-11/12 my-4 lg:my-8 h-auto flex justify-between'>
                    <div className='w-[44vw] aspect-square border-gunmetal flex flex-col items-center justify-around rounded-3xl'>
                        <div className='bg-dedouze shadow-lg bg-center bg-cover rounded-full shadow-ms w-1/2 aspect-square'></div>
                        <p className='small_text'>Dedouze</p>
                        <div className='flex justify-center items-center rounded-full'>
                            <a href="https://www.dedouze.com/" target='blank' className='bg-melonSoft px-6 py-3 lg:py-6 lg:px-12 rounded-full'>
                                <svg className='fill-gunmetal h-3 lg:h-4' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className='w-[44vw] aspect-square border-gunmetal flex flex-col items-center justify-around rounded-3xl'>
                        <div className='bg-MarcAntoine shadow-lg bg-center bg-cover rounded-full shadow-ms w-1/2 aspect-square'></div>
                        <p className='small_text'>Marc-Antoine Mathieu</p>
                        <div className='flex justify-center items-center rounded-full'>
                            <a href="https://fr.wikipedia.org/wiki/Marc-Antoine_Mathieu" target='blank' className='bg-melonSoft px-6 py-3 lg:py-6 lg:px-12 rounded-full'>
                                <svg className='fill-gunmetal h-3 lg:h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <span className='work_content_video'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" /></svg>
                        <p>Moodboard</p>
                    </div>
                    <img src="../img/media/loop_moodboard.jpg" alt="" />
                </span>

                <div className='h-[300px] w-full'></div>
                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 lg:w-1/2 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>

            </div>
        </div >

        {/* After_walkCycle */}
        < div id='popUpAe' className='work_principal -bottom-full transition_pop-up lg:backdrop-blur-xl' >
            <div className='bg-AE_1 bg-cover bg-center '>
                <div className='bg-gradient-to-t from-gunmetal to-black/80 w-full h-[50px]'></div>
            </div>
            <div className='work_header'>
                <div>
                    <p>2023</p>
                    <h1>Walk cycle</h1>
                </div>

                <button onClick={popUpAe}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-melonSoft transition_darkmode lg:w-1/2' />

            <div className='work_section'>


                <span>
                    <ReactPlayer loop playing controls width={{ width: "100%" }} url='https://vimeo.com/743324917' />
                </span>
                <p>I did this project to learn how to use Duik on After Effect.</p>

                <div className='h-[300px] w-full'></div>
                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 lg:w-1/2 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/* SERIF */}
        < div id='popUpSerif' className='work_principal -bottom-full transition_pop-up lg:backdrop-blur-xl' >
            <div className='bg-serifTram bg-cover bg-center '>
                <div className='bg-gradient-to-t from-gunmetal to-black/80 w-full h-[50px]'></div>
            </div>
            <div className='work_header'>
                <div>
                    <p>2023</p>
                    <h1>Sérif, un zeu de cowboy</h1>
                </div>

                <button onClick={popUpSerif}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-melonSoft transition_darkmode lg:w-1/2' />

            <div className='work_section'>
                <span className='work_content_video'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p>Gameplay</p>
                    </div>
                    <iframe className='shadow-lg' src="https://www.youtube-nocookie.com/embed/78yfQnmYKKc?si=gAdrtz4gUV0vfGQ0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </span>

                <span className='work_content_video'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 640 512">
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" /></svg>
                        <p>playable on the web</p>
                    </div>
                    <iframe height="167" frameborder="0" src="https://itch.io/embed/1932594" width="552"><a href="https://peche-et-traditions.itch.io/serif">Serif by Peche et Traditions</a></iframe>
                </span>
                <p>This game was made in 48 hours with three other people from the <a className='text-white decoration-solid' href="https://digitalkingdom.ch/">Digital Kingdom studio</a>. We made it as part of a Game Jam on the theme "The Good, the Bad and The Ugly". The secondary brief was to include the use of AI, so we generated the texts with ChatGPT.

                    <br /> <br />   The aim of the game is to shoot the letters in the correct order so that they form the correct word, and thus discover the final text.</p>

                <div className='h-[400px] w-full'></div>
                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 lg:w-1/2 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/* GALAXYGEN */}
        < div id='popUpGalaxygen' className='work_principal -bottom-full transition_pop-up lg:backdrop-blur-xl' >

            <div className='bg-three_1Tram bg-cover bg-center '>
                <div className='bg-gradient-to-t from-gunmetal to-black/80 w-full h-[50px]'></div>
            </div>
            <div className='work_header'>
                <div>
                    <p>2023</p>
                    <h1>Galaxy Generator</h1>
                </div>

                <button onClick={popUpGalaxygen}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-melonSoft transition_darkmode lg:w-1/2' />

            <div className='work_section'>



                <div className='w-full aspect-video rounded-b-lg shadow-lg bg-center bg-no-repeat bg-cover bg-threejs rounded-lg mt-10 flex items-center justify-center' >
                    <a href="https://jeremmie.github.io/galaxy_generator_animate-build-/" target='blank' className='bg-melonSoft text-gunmetal rounded-full px-3 py-3 hover:text-black hover:bg-white transition_manual'>Customize your own galaxy!</a>
                </div>
                <p >Coded with react and threeJS</p>



                <div className='h-[300px] w-full'></div>
                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 lg:w-1/2 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/*Still Life*/}
        < div id='popUpStillLife' className='work_principal -bottom-full transition_pop-up lg:backdrop-blur-xl' >
            <div className='bg-astronauteTram bg-cover bg-center '>
                <div className='bg-gradient-to-t from-gunmetal to-black/80 w-full h-[50px]'></div>
            </div>
            <div className='work_header'>
                <div>
                    <p>2021</p>
                    <h1>Still Life</h1>
                </div>

                <button onClick={popUpStillLife}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-melonSoft transition_darkmode lg:w-1/2' />

            <div className='work_section'>


                <img className='w-full' src="../img/media/naturemorte/1.jpg" alt="" />
                <img className='w-full my-4' src="../img/media/naturemorte/2.jpg" alt="" />
                <img className='w-full' src="../img/media/naturemorte/3.jpg" alt="" />
                <img className='w-full my-4' src="../img/media/naturemorte/4.jpg" alt="" />

                <p>Still life on the theme of kitchen utensils. The initial aim was to recreate a sink with dishes in it, but we ended up playing with the reflections of water on different textures.</p>

                <div className='h-[300px] w-full'></div>
                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 lg:w-1/2 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/*Tiny Troubles*/}
        < div id='popUpTinyTroubles' className='work_principal -bottom-full transition_pop-up lg:backdrop-blur-xl' >
            <div className='bg-tinyTroublesTram bg-cover bg-center '>
                <div className='bg-gradient-to-t from-gunmetal to-black/80 w-full h-[50px]'></div>
            </div>
            <div className='work_header'>
                <div>
                    <p>2024</p>
                    <h1>Tiny Troubles</h1>
                </div>

                <button onClick={popUpTinyTroubles}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>
            </div>
            <hr className='w-11/12 block mx-auto border-melonSoft transition_darkmode lg:w-1/2' />

            <div className='work_section'>


                <span className='work_content_video'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p>Trailer</p>
                    </div>
                    <iframe className='shadow-lg' src="https://www.youtube-nocookie.com/embed/A8gUIuBGAiE?si=bhydZraBIhMvgswW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </span>
                <p>In Tiny Troubles, you take on the role of a character who finds himself obliged to help the flora and fauna of the forest under the anxious gaze of a creature deeply concerned about respect for the environment.</p>
                <span className='work_content_video'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" /></svg>
                        <p>Viewport</p>
                    </div>
                    <iframe className='shadow-lg' src="https://www.youtube-nocookie.com/embed/K2mRIYLMkkc?si=QJO402hpbGpH6XsN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </span>
                <p>We spent a month making this mini game. The project was an ambitious one, as we know very little about video games, even though we're very interested in them. <br /> <br /> We used <a className='text-white' href="https://spline.design/">Spline</a>, which is probably the least logical choice for a video game, but which allowed us to do "plug and play" without coding, and to work simultaneously. As Spline was not designed for video games, we were restricted to using only variables, which makes the game's base a little fragile.
                    <br /><br /> But we succeeded in making a playable game and creating a small universe and engaging characters.</p>
                <div className='w-full h-4/5 flex'>
                    <div className='w-1/2 h-full flex flex-col'>
                        <div className='w-full h-1/2 bg-processus_2 bg-cover bg-center'></div>
                        <div className='w-full h-1/2 bg-processus bg-cover bg-center'></div>
                    </div>

                    <div className='w-1/2 h-full bg-processus_1 bg-cover bg-center'></div>
                </div>
                <p>We had fun making the characters using different techniques for each group: the frogs are photo collages, the crayfish are in modelling clay and the mosses are hand-drawn.</p>


                <div className='h-[300px] w-full'></div>
                <div className='w-screen absolute bottom-0 '>
                    <div className='w-11/12 lg:w-1/2 h-auto'><p className='text-sm text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
                </div>
            </div>
        </div >

        {/* Vignettes */}
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
                    <div onClick={popUpCloth} className='h-[40vh] inline-block shadow-lg mb-5 text-melon dark:bg-melon ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode lg:bg-leonAscii lg:rounded-none'>
                        <div className='bg-clothSim bg-center bg-cover h-2/3 rounded-t-lg w-full lg:hidden lg:h-[100%]'></div>
                        <p className='text-sm ml-2 mt-2 lg:hidden'>Marvelous designer</p>
                        <p className=' text-2xl ml-2 mt-2 lg:hidden'>3D Clothes</p>
                    </div>

                    <div onClick={popUpFace} className='h-[40vh] inline-block shadow-lg mb-5 text-melon dark:bg-melon ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode lg:bg-leonAscii lg:rounded-none'>
                        <div className='bg-visagesculpt bg-center bg-cover h-2/3 rounded-t-lg w-full lg:hidden lg:h-[100%]'></div>
                        <p className='text-sm ml-2 mt-2 lg:hidden'>charachter design</p>
                        <p className=' text-2xl ml-2 mt-2 lg:hidden'>3D Face</p>
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
                        <div className='bg-gunmetal dark:bg-melon w-fit px-4 shadow-lg rounded-t-lg ml-5'><p className='text-base text-melon dark:text-gunmetal'>web / interactive</p></div>
                        <div className='overflow-auto shadow-lg whitespace-nowrap py-3 bg-gunmetal dark:bg-melon pl-3 rounded-l-lg mb-5'>
                            <div className='inline-block mr-5'>
                                <a className='inline-block' href="https://jeremmie.github.io/galaxy_generator_animate-build-/" target='blank'>
                                    <div className='bg-threejs bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                        <div className='h-fit bg-melon/90 dark:bg-gunmetal/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
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

                            <div onClick={popUpTinyTroubles} className='inline-block mr-5'>
                                <div className='bg-TinyTroublesMobile bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>Spline</p>
                                        <p className=' text-2xl ml-2 mb-2'>Tiny Troubles</p>
                                    </div>
                                </div>
                            </div>

                            <div className='inline-block mr-5 '>
                                <a href="https://majestic-truffle-0bedf1.netlify.app//" target='blank'>
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
                                <div className='bg-videoGame bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
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
                <div id='popUpEclipse' onClick={popUpEclipse} className='overflow-x-scroll whitespace-nowrap flex justify-center rounded-lg'>
                    <div className='bg-eclipseMobile bg-center bg-cover bg- shadow-lg rounded-lg w-[90vw] h-[18vh] flex items-center justify-end mb-5'>
                        <div className='h-full dark:bg-melon/90 bg-gunmetal/90 text-melon dark:text-gunmetal flex items-center rounded-r-lg w-1/3 transition_darkmode'>
                            <div className='flex flex-col'>
                                <p className='text-sm ml-2 mt-2'>video</p>
                                <p className=' text-2xl ml-2 mb-2'>Eclipse</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3D / animation */}
                <div className='flex justify-end'>
                    <div className='w-[95vw]'>
                        <div className='bg-gunmetal dark:bg-melon w-fit px-4 shadow-lg rounded-t-lg ml-5'><p className='text-base text-melon dark:text-gunmetal'>3D / animation</p></div>
                        <div className='overflow-auto shadow-lg whitespace-nowrap py-3 bg-gunmetal dark:bg-melon pl-3 rounded-l-lg mb-5'>

                            <div onClick={popUpLeon} className='inline-block mr-5'>
                                <div className='bg-leonAscii bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>charachter design</p>
                                        <p className=' text-2xl ml-2 mb-2'>Leon</p>
                                    </div>
                                </div>
                            </div>

                            <div onClick={popUpRollUp} className='inline-block mr-5'>
                                <div className='bg-rollUp bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>blender</p>
                                        <p className=' text-2xl ml-2 mb-2'>Roll-Up</p>
                                    </div>
                                </div>
                            </div>

                            <div onClick={popUpEclipse} className='inline-block mr-5'>
                                <div className='bg-asciiCube bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>Video</p>
                                        <p className=' text-2xl ml-2 mb-2'>Ascii</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                {/* serif */}
                <div onClick={popUpSerif} className='overflow-x-scroll whitespace-nowrap flex justify-center rounded-lg'>
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
                        <div className='overflow-auto shadow-lg whitespace-nowrap py-3 bg-gunmetal dark:bg-melon pl-3 rounded-l-lg mb-5'>

                            <div onClick={popUpAe} className='inline-block mr-5'>
                                <div className='bg-dessin bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>After effect</p>
                                        <p className=' text-2xl ml-2 mb-2'>Walk Cycle</p>
                                    </div>
                                </div>
                            </div>


                            <div onClick={popUpStillLife} className='inline-block mr-5'>
                                <div className='bg-natureMorte bg-center bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>photography</p>
                                        <p className=' text-2xl ml-2 mb-2'>Still Life</p>
                                    </div>
                                </div>
                            </div>

                            <div onClick={popUpSpeed} className='inline-block mr-5'>
                                <div className='bg-speed bg-left bg-cover aspect-square shadow-lg rounded-lg w-[42vw] flex items-end'>
                                    <div className='h-fit dark:bg-gunmetal/90 bg-melon/90 text-gunmetal dark:text-melon rounded-b-lg w-full transition_darkmode'>
                                        <p className='text-sm ml-2 mt-2'>Video</p>
                                        <p className=' text-2xl ml-2 mb-2'>Speed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full mb-40 mt-1'><p className='text-[0.8rem] text-center'>Copyright © 2023 Jérémie Jaouen tous droits résérvés</p></div>
            </div>

            <div className='overflow-auto rounded-tl-[40px] rounded-tr-[20px] grid-cols-4 grid_row_template w-screen mt-20 h-screen hidden lg:rounded-none bg-white lg:mt-0 lg:grid'>
                <div onClick={popUpCloth} className='bg-clothTram bg-cover bg-top row-span-3 col-span-2'>
                    <div className='grid_items flex justify-center items-center'>
                        <div className='w-fit'>
                            <h1 className='cursor-pointer'>Cloth simulation</h1>
                            <p className='cursor-pointer'>Marvelous Designer</p>
                            <p className='underline hover:decoration-double mt-10 cursor-pointer'>more...</p>
                        </div>
                    </div>

                </div>
                <div onClick={popUpFace} className='bg-face_2Tram bg-center bg-cover row-span-2 col-span-2'>
                    <div className='grid_items flex justify-center items-center'>
                        <div className='w-fit'>
                            <h1 className='cursor-pointer'>Face</h1>
                            <p className='cursor-pointer'>3D</p>
                            <p className='underline hover:decoration-double mt-10 cursor-pointer'>more...</p>
                        </div>
                    </div>
                </div>
                <div onClick={popUpAe} className='bg-AE_1 row-span-2 col-span-1 bg-center bg-cover '>
                    <div className='grid_items flex justify-center items-center'>
                        <div className='w-fit'>
                            <h1 className='cursor-pointer'>AE animation</h1>
                            <p className='cursor-pointer'>2D</p>
                            <p className='underline hover:decoration-double mt-10 cursor-pointer'>more...</p>
                        </div>
                    </div>
                </div>

                <div className='bg-fireTram row-span-4 Tram bg-bottom bg-cover'>
                    <a href="https://jeremmie.github.io/rapport_de_stage_main/dist/index.html" target='blank'>
                        <div className='grid_items flex justify-center text-center items-center'>
                            <div className='w-fit'>
                                <h1 className='cursor-pointer'>Internship report</h1>
                                <p className='cursor-pointer'>2023</p>
                                <p className='underline hover:decoration-double mt-10 cursor-pointer'>to the website...</p>
                            </div>
                        </div>
                    </a>

                </div>
                <div onClick={popUpLoop} className='bg-loopTram row-span-2 bg-center bg-cover'>
                    <div className='grid_items flex justify-center items-center'>
                        <div className='w-fit'>
                            <h1 className='cursor-pointer'>Loop</h1>
                            <p className='cursor-pointer'>3D</p>
                            <p className='underline hover:decoration-double mt-10 cursor-pointer'>more...</p>
                        </div>
                    </div>
                </div>
                <div onClick={popUpRollUp} className='bg-rollUpTram bg-center bg-cover'>
                    <div className='grid_items flex justify-center items-center'>
                        <div className='w-fit'>
                            <h1 className='cursor-pointer'>RollUp 2.0</h1>
                            <p className='cursor-pointer'>3D</p>
                            <p className='underline hover:decoration-double mt-10 cursor-pointer'>more...</p>
                        </div>
                    </div>
                </div>
                <div onClick={popUpTinyTroubles} className='bg-tinyTroublesTram row-span-1 col-span-2 bg-right bg-cover '>
                    <div className='grid_items flex justify-center items-center'>
                        <div className='w-fit'>
                            <h1 className='cursor-pointer'>Tiny Troubles</h1>
                            <p className='cursor-pointer'>Vidéo Game / web</p>
                            <p className='underline hover:decoration-double mt-10 cursor-pointer'>more...</p>
                        </div>
                    </div>
                </div>
                <div onClick={popUpEclipse} className='bg-eclipseTram row-span-1 col-span-2 bg-center bg-cover '>
                    <div className='grid_items flex justify-center items-center'>
                        <div className='w-fit'>
                            <h1 className='cursor-pointer'>Eclipse</h1>
                            <p className='cursor-pointer'>Vidéo</p>
                            <p className='underline hover:decoration-double mt-10 cursor-pointer'>more...</p>
                        </div>
                    </div>
                </div>
                <div onClick={popUpVideoGame} className='bg-jvTram bg-center bg-cover '>
                    <div className='grid_items flex justify-center items-center'>
                        <div className='w-fit'>
                            <h1 className='cursor-pointer'>Video Game</h1>
                            <p className='cursor-pointer'>Unity</p>
                            <p className='underline hover:decoration-double mt-10 cursor-pointer'>more...</p>
                        </div>
                    </div>
                </div>
                <div onClick={popUpSerif} className='bg-serifTram col-span-4 row-span-2 bg-center bg-cover '>
                    <div className='grid_items flex justify-center items-center'>
                        <div className='w-fit'>
                            <h1 className='cursor-pointer'>Serif</h1>
                            <p className='cursor-pointer'>Gamejam / Unity</p>
                            <p className='underline hover:decoration-double mt-10 cursor-pointer'>more...</p>
                        </div>
                    </div>
                </div>
                <div onClick={popUpStillLife} className='bg-photo_2Tram row-span-4 bg-center bg-cover '>
                    <div className='grid_items flex justify-center text-center items-center'>
                        <div className='w-fit'>
                            <h1 className='cursor-pointer'>Still Life</h1>
                            <p className='cursor-pointer'>photogrpahy</p>
                            <p className='underline hover:decoration-double mt-10 cursor-pointer'>more...</p>
                        </div>
                    </div>
                </div>

                <div className='bg-knucksTram row-span-3 bg-center bg-cover '>
                    <a href="https://sketchfab.com/3d-models/knucks-cover-0e01664fa6fe4cf49d3d32bd7f8eb9cb" target='blank'>
                        <div className='grid_items flex justify-center items-center'>
                            <div className='w-fit'>
                                <h1 className='cursor-pointer'>London Class</h1>
                                <p className='cursor-pointer'>3D</p>
                                <p className='underline hover:decoration-double mt-10 cursor-pointer'>sketchfab...</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div onClick={popUpLeon} className='bg-face_1Tram row-span-4 col-span-2 bg-center bg-cover'>
                    <div className='grid_items flex justify-center items-center'>
                        <div className='w-fit'>
                            <h1 className='cursor-pointer'>Leon</h1>
                            <p className='cursor-pointer'>3D</p>
                            <p className='underline hover:decoration-double mt-10 cursor-pointer'>more...</p>
                        </div>
                    </div>
                </div>
                <div className='bg-three_2Tram bg-center bg-cover '>
                    <a href="https://gameboy-jeremie.netlify.app//" target='blank'>
                        <div className='grid_items flex justify-center items-center'>
                            <div className='w-fit'>
                                <h1 className='cursor-pointer'>Gameboy</h1>
                                <p className='cursor-pointer'>web / Three JS</p>
                                <p className='underline hover:decoration-double mt-10 cursor-pointer'>more...</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div onClick={popUpGalaxygen} className='bg-three_1Tram col-span-2 bg-center bg-cover '>
                    <div className='grid_items flex justify-center items-center'>
                        <div className='w-fit'>
                            <h1 className='cursor-pointer'>Galaxy Generator</h1>
                            <p className='cursor-pointer'>web / Three JS</p>
                            <p className='underline hover:decoration-double mt-10 cursor-pointer'>more...</p>
                        </div>
                    </div>
                </div>
                <div onClick={popUpGalaxyGroove} className='bg-astronauteTram col-span-2 bg-center bg-cover'>
                    <div className='grid_items flex justify-center items-center'>
                        <div className='w-fit'>
                            <h1 className='cursor-pointer'>Galaxy Groove</h1>
                            <p className='cursor-pointer'>3D</p>
                            <p className='underline hover:decoration-double mt-10 cursor-pointer'>more...</p>
                        </div>
                    </div>
                </div>
                <div onClick={popUpSpeed} className='bg-speedTram row-span-1 col-span-4 bg-top '>
                    <div className='grid_items flex justify-center items-center'>
                        <div className='w-fit'>
                            <h1 className='cursor-pointer'>Speed</h1>
                            <p className='cursor-pointer'>Video</p>
                            <p className='underline hover:decoration-double mt-10 cursor-pointer'>more...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>)
}