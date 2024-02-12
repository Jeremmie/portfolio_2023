import { CopyToClipboard } from 'react-copy-to-clipboard';
import Header from './Header';
import "../style.css"


export default function contact() {

    function copied() {
        const copiedClass = document.querySelector('#copiedClass')
        copiedClass.classList.toggle('copyToClickboardActif')
    }
    return (<>
        <Header />
        <div className="fixed bg-transparent backdrop-blur-md text-gunmetal dark:text-melon dark:bg-gunmetal/80 flex flex-col justify-center items-center w-screen h-screen transition_darkmode">
            <div className='flex flex-col justify-center items-center w-screen h-screen transition_darkmode
            lg:w-1/4
            '>

                <div id='copiedClass' className='text-gunmetal dark:text-melon font-bold px-4 py-5 rounded-full shadow-lg fixed -bottom-[50%]'>Copied to Clickboard</div>
                {/* 
                <div className='flex w-full my-10 h-auto justify-around'>
                    <div className='w-1/4 bg-hehe bg-cover bg-center rounded-lg aspect-square'></div>
                    <p className="w-2/4">Hey, you can contact me using this address</p>
                </div> */}

                <div className='flex flex-col lg:flex-row w-full my-10 h-auto justify-center lg:justify-around items-center'>
                    <div className='w-1/3 lg:w-1/4 bg-hehe bg-cover bg-center rounded-full lg:rounded-lg aspect-square'></div>
                    <p className="w-2/3 lg:w-2/4 font-bold">Hey, you can contact me using this address:</p>
                </div>

                <CopyToClipboard onCopy={copied} text="contact@jeremiejaouen.ch">
                    <div className="text-melon w-10/12 border-4 border-melon flex flex-row items-center justify-between bg-gunmetal px-7 py-3 rounded-full cursor-pointer">
                        <p className="text-xl mr-5">contact@jeremiejaouen.ch</p>
                        <svg className="w-6 fill-melon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" /></svg>

                    </div>
                </CopyToClipboard>


                <div className="border-4 text-melon hover:text-black border-melon hover:bg-melon w-10/12 text-center mt-5 flex flex-row items-center justify-between bg-gunmetal px-7 py-3 rounded-full fill-melon lg:hover:fill-black">
                    <a className="mr-5 text-xl w-full" href="https://www.linkedin.com/in/jeremiejaouen/">Linkedin</a>
                    <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                </div>

                <div className="text-melon hover:text-black border-4 border-melon hover:bg-melon w-10/12 text-center mt-5 flex flex-row items-center justify-between bg-gunmetal px-7 py-3 rounded-full fill-melon lg:hover:fill-black">
                    <a className="mr-5 text-xl w-full" href="https://www.linkedin.com/in/jeremiejaouen/">Sketchfab</a>
                    <svg className="w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                        <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" /></svg>
                </div>
            </div>
        </div >
    </>)
}