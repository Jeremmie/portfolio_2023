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
            <div className='w-2/3 lg:w-1/3 h-3/4 lg:h-1/3 flex-col lg:flex-row justify-center items-center flex'>
                <div className='w-10/12 lg:w-2/3 h-full shadow-lg bg-hehe bg-cover bg-right rounded-lg'></div>
                <div className='w-full h-full lg:h-full flex flex-col justify-around items-center'>
                    <div className='h-1/2'>
                        <p className='text-gunmetal text-center lg:text-left lg:ml-4 dark:text-melon font-bold text-xl lg:text-2xl my-3 transition_darkmode'>Hey, I'll be happy to chat with you!
                            Feel free to contact me at:</p>
                    </div>

                    <span className='h-full lg:h-1/2 flex justify-center items-center transition_darkmode'>
                        <CopyToClipboard onCopy={copied} text="contact@jeremiejaouen.ch">
                            <div className="text-white hover:text-black dark:text-black dark:fill-black hover:dark:fill-white fill-white hover:fill-black dark:hover:bg-gunmetal dark:hover:text-white hover:bg-white shadow-warm shadow-black bg-gunmetal dark:bg-melon py-3 px-5 w-10/12 lg:w-full h-fit  flex flex-row items-center justify-center items-center rounded-lg cursor-pointer">
                                <p className="text-base lg:text-xl lg:font-medium mr-5 transition_all">contact@jeremiejaouen.ch</p>
                                <svg className="w-20 lg:w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                    <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" /></svg>

                            </div>
                        </CopyToClipboard>
                    </span>
                    <div id='copiedClass' className='text-gunmetal dark:text-melon font-bold px-4 py-5 rounded-full shadow-lg fixed -bottom-[50%]'>Copied to Clickboard</div>

                </div>
            </div>
        </div>
    </>)
}

