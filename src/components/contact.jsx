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
            <div className='w-1/3 h-1/3 flex rounded-lg shadow-lg bg-melon'>
                <div className='w-1/3 h-full shadow-lg bg-hehe bg-cover bg-right rounded-l-lg'></div>
                <div className='w-2/3 ml-4 h-full flex flex-col justify-around'>
                    <div className='h-1/2'>
                        <p className='text-black text-2xl my-3 '>Hey, I'll be happy to chat with you!
                            Feel free to contact me at:</p>
                    </div>

                    <span className='h-1/2 flex justify-center items-center'>
                        <CopyToClipboard onCopy={copied} text="contact@jeremiejaouen.ch">
                            <div className="text-black w-10/12 h-fit  flex flex-row items-center justify-between items-center rounded-full cursor-pointer">
                                <p className="text-xl mr-5">contact@jeremiejaouen.ch</p>
                                <svg className="w-6 font-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
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