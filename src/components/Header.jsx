import Nightmode from "./Nightmode"
import React, { useEffect, useRef, useState } from "react"
import { useMediaQuery } from 'react-responsive'

export default function Header({switchBetweenMode}){

    const isSM = useMediaQuery({ query: '(max-width: 640px)' })
    const isMD = useMediaQuery({ query: '(min-width: 768px)' })
    const isLG = useMediaQuery({ query: '(min-width: 1024px)' })
    const isXL = useMediaQuery({ query: '(min-width: 1280px)' })
    const isXXL = useMediaQuery({ query: '(min-width: 1536px)' })

    //toggle menu
    const menuButton = useRef()
    const openMenu = ()=>{
        var menuVisible = document.querySelector('#menu');
        menuVisible.classList.toggle('menu_animation');
    }
    

    return (<>
    <button ref={menuButton} onClick={openMenu} className="w-10 h-fit block absolute sticky top-5 left-5 z-20 md:hidden">{isSM && <svg className="shadow-warm dark:shadow-cold w-10 h-10 rounded-full p-2 bg-melon fill-gunmetal dark:fill-melon dark:bg-gunmetal transition_darkmode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> {/*Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/} <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>}</button>
    <div className="
        flex justify-start items-center h-screen z-50 fixed
        md:flex md:justify-center md:relative md:h-auto
        ">
        
        <div id="menu" className="
        text-gunmetal fixed -left-full bg-gunmetal-20 flex flex-col text-gunmetal justify-center items-center rounded-r-lg backdrop-blur-md dark:text-melon dark:shadow-cold transition_darkmode shadow-warm border-y-2 border-r-2 border-gray-800/10
        md:rounded-full md:flex-row md:justify-around md:w-fit md:h-16 md:fixed md:top-5 md:left-auto
        " >
            <button className="my-5 px-6 py-3 rounded-full md:hover:shadow-inner md:dark:hover:shadow-innercold transition_manual md:my-0 md:ml-3 md:mr-5">
            {isMD && <p>home</p>}
            {isSM && <svg className="w-6 fill-gunmetal dark:fill-melon transition_darkmode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>}
            </button>
            <button className="my-5 px-5 py-3 rounded-full md:hover:shadow-inner md:dark:hover:shadow-innercold transition_manual md:my-0 md:mx-5">
            {isMD && <p>projects</p>}
            {isSM && <svg className="w-6 fill-gunmetal dark:fill-melon transition_darkmode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> {/*Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/} <path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/></svg>}
            </button>
            <button className="my-5 px-5 py-3 rounded-full md:hover:shadow-inner md:dark:hover:shadow-innercold transition_manual md:my-0 md:mx-5">
            {isMD && <p>contacts</p>}
            {isSM && <svg className="w-6 fill-gunmetal dark:fill-melon transition_darkmode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> {/*Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/} <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>}
            </button>
            <button className="my-5 px-5 py-3 rounded-full md:hover:shadow-inner md:dark:hover:shadow-innercold transition_manual md:my-none md:mx-5">
            {isMD && <p>links</p>}
            {isSM && <svg className="w-6 fill-gunmetal dark:fill-melon transition_darkmode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> {/*Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/} <path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/></svg>}
            </button>
            <div className="my-5 w-14 shadow-inner rounded-full md:my-0 md:ml-3 md:mr-5">
            <Nightmode switchBetweenMode={switchBetweenMode}/>
            </div>
        </div>
        
    </div>
 
    </>)
}