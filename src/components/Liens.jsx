import { CopyToClipboard } from 'react-copy-to-clipboard';
import Header from './Header';

export default function Liens() {

    function copied() {
        const copiedClass = document.querySelector('#copiedClass')
        copiedClass.classList.toggle('copyToClickboardActif')
    }

    return (<>
        <Header />

        <div className="fixed bg-transparent backdrop-blur-md text-gunmetal dark:text-melon dark:bg-gunmetal/80 flex flex-col justify-center items-center w-screen h-screen transition_darkmode">

            <div className='flex flex-col justify-center items-center w-screen h-screen transition_darkmode
            lg:w-1/4'>
                <span className='w-10/12 fill-melon dark:fill-gunmetal mb-5 text-melon dark:text-gunmetal rounded-lg bg-gunmetal dark:bg-melon'>
                    <div className='flex items-center my-1'>
                        <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                        <p className='small_text'>showreel</p>
                    </div>
                    <iframe className='shadow-lg rounded-b-lg lg:rounded-none lg:pb-6 w-full' src="https://www.youtube-nocookie.com/embed/eeH90wwWKM8?si=S6GaKqYifEUS7jvx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </span>
                <hr className='w-10/12 block mx-auto border-gunmetal dark:border-melon transition_darkmode lg:w-10/12' />
                <div className="text-melon bg-gunmetal mt-5 fill-melon hover:text-black border-4 lg:dark:border-melon lg:dark:bg-gunmetal lg:dark:hover:border-melon lg:dark:hover:bg-melon lg:dark:hover:text-gunmetal lg:dark:hover:fill-gunmetal lg:dark:text-melon lg:dark:fill-melon border-melon lg:border-gunmetal lg:bg-melon lg:hover:bg-gunmetal lg:hover:text-melon lg:text-gunmetal hover:bg-melon w-10/12 text-center flex flex-row items-center justify-between px-7 py-3 rounded-full lg:fill-gunmetal lg:hover:fill-melon">
                    <a className="mr-5 text-xl w-full" href="https://www.linkedin.com/in/jeremiejaouen/">Linkedin</a>
                    <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                </div>

                <div className="text-melon fill-melon hover:text-black border-4 lg:dark:border-melon lg:dark:bg-gunmetal lg:dark:hover:border-melon lg:dark:hover:bg-melon lg:dark:hover:text-gunmetal lg:dark:hover:fill-gunmetal lg:dark:text-melon lg:dark:fill-melon border-melon lg:border-gunmetal lg:bg-melon lg:hover:bg-gunmetal lg:hover:text-melon lg:text-gunmetal hover:bg-melon w-10/12 text-center mt-5 flex flex-row items-center justify-between bg-gunmetal px-7 py-3 rounded-full lg:fill-gunmetal lg:hover:fill-melon">
                    <a className="mr-5 text-xl w-full" href="https://sketchfab.com/Jeremie03">Sketchfab</a>
                    <svg className="w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                        <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" /></svg>
                </div>
            </div>
        </div >

        {/* <li>Showreel</li>
            <li>Rapport de stage</li>
            <li>Article workshop rollUp</li> */}

    </>)
}