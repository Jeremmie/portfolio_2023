import Nightmode from "./Nightmode"
import { useRef, useState } from "react"
import { useMediaQuery } from 'react-responsive'
import MenuBurger from './MenuBurger.jsx'
import Lottie from "lottie-react"
import boxAnimation from '../../public/lottie/iconAnimation/animBox.json'
import contactAnimation from '../../public/lottie/iconAnimation/animContact.json'
import "../style.css"

export default function Header({ switchBetweenMode, toggleBetweenMode, clickHouse, toggleHouse, clickTravaux, toggleTravaux, clickContact, toggleContact, clickLiens, toggleLiens }) {
    const isSM = useMediaQuery({ query: '(max-width: 640px)' })
    const isMD = useMediaQuery({ query: '(min-width: 768px)' })
    const isLG = useMediaQuery({ query: '(min-width: 1024px)' })
    const isXL = useMediaQuery({ query: '(min-width: 1280px)' })
    const isXXL = useMediaQuery({ query: '(min-width: 1536px)' })

    const lottieTravaux = useRef(); // permet d'appeller l'animation
    const lottieContact = useRef(); // permet d'appeller l'animation
    const [animDirection, setAnimDirection] = useState(1); // définit si l'animation se joue en avant(1) ou en arrière(-1)






    var houseState = toggleHouse
    var contactState = toggleContact
    var travauxState = toggleTravaux
    var liensState = toggleLiens
    const houseFunction = clickHouse
    const travauxFunction = clickTravaux
    const travauxReverseAnim = useState(0)
    const contactFunction = clickContact
    const liensFunction = clickLiens

    function onlyHouseOpen() {
        if (travauxState === false) {
            travauxFunction()
            setAnimDirection(animDirection * -1)
            lottieTravaux.current.setDirection(animDirection); // définit la direction de l'animation
            lottieTravaux.current.play();
        } else { }
        if (contactState === false) {
            contactFunction()
        } else { }
        if (liensState === false) {
            liensFunction()
        } else { }
    }

    function onlyTravauxOpen() {
        if (contactState === false) {
            contactFunction()
        } else { }
        if (liensState === false) {
            liensFunction()
        } else { }
    }
    function travauxFull() {
        onlyTravauxOpen();
        travauxFunction()
        setAnimDirection(animDirection * -1)
        lottieTravaux.current.setDirection(animDirection); // définit la direction de l'animation
        lottieTravaux.current.play();
    }

    function onlyContactOpen() {
        if (travauxState === false) {
            travauxFunction()
            setAnimDirection(animDirection * -1)
            lottieTravaux.current.setDirection(animDirection); // définit la direction de l'animation
            lottieTravaux.current.play();
        } else { }
        if (liensState === false) {
            liensFunction()
        } else { }
    }
    function contactFull() {
        onlyContactOpen();
        contactFunction()
        setAnimDirection(animDirection * -1)
        lottieContact.current.setDirection(animDirection); // définit la direction de l'animation
        lottieContact.current.play();
    }

    function onlyLiensOpen() {
        if (travauxState === false) {
            travauxFunction()
            setAnimDirection(animDirection * -1)
            lottieTravaux.current.setDirection(animDirection); // définit la direction de l'animation
            lottieTravaux.current.play();
        } else { }
        if (contactState === false) {
            contactFunction()
        } else { }
    }
    function liensFull() {
        onlyLiensOpen();
        liensFunction()
    }


    // const playAnimationNow = () => {
    //     setAnimDirection(animDirection * -1) // permet à l'animation de se jouer en avant une fois sur 2
    //     lottieTravaux.current.setDirection(animDirection); // définit la direction de l'animation
    //     lottieTravaux.current.play(); // joue l'animation

    //   }
    console.log(animDirection);
    //toggle menu
    const menuButton = useRef()
    const openMenu = () => {
        var menuVisible = document.querySelector('#menu');
        menuVisible.classList.toggle('menu_animation');
    }

    return (<>
        <div ref={menuButton} onClick={openMenu} className="w-14 md:w-10 p-2 md:p-1.5 shadow-warm rounded-full h-fit block absolute sticky top-5 left-5 z-20 bg-melon md:bg-melon/50 md:backdrop-blur-xl dark:bg-gunmetal dark:shadow-cold transition_darkmode"><MenuBurger className="w-3 md:w-8 h-fit sticky" /></div>
        <div className="
        flex justify-start items-center h-screen z-50 fixed
        ">

            <div id="menu" className="
        text-gunmetal fixed -left-full md:bg-melon/10 flex flex-col text-gunmetal justify-center items-center rounded-r-lg backdrop-blur-xl dark:text-melon dark:shadow-warm transition_darkmode shadow-warm border-y-2 border-r-2 border-gray-800/10
        " >
                <button onClick={onlyHouseOpen} className="my-5 px-6 py-3 rounded-full  transition_manual ">

                    <svg className="w-6 fill-gunmetal dark:fill-melon transition_darkmode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                </button >
                <button onClick={travauxFull} className="my-5 px-5 py-3 rounded-full  transition_manual ">
                    <Lottie className="fill-gunmetal w-6 rounded-full dark:fill-melon transition_darkmode boxAnimation" autoplay={false} lottieRef={lottieTravaux} animationData={boxAnimation} loop={false} />

                    {/* <Box travauxReverseAnim={travauxReverseAnim} toggleTravaux={toggleTravaux}/> */}
                    {/* <svg className="w-6 fill-gunmetal dark:fill-melon transition_darkmode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> {/*Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. <path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" /></svg>*/}
                </button>
                <button onClick={contactFull} className="my-5 px-5 py-3 rounded-full  transition_manual ">
                    <Lottie className="fill-gunmetal w-6 rounded-full dark:fill-melon transition_darkmode boxAnimation" autoplay={false} lottieRef={lottieContact} animationData={contactAnimation} loop={false} />
                </button>
                <button onClick={liensFull} className="my-5 px-5 py-3 rounded-full  transition_manual ">

                    <svg className="w-6 fill-gunmetal dark:fill-melon transition_darkmode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> {/*Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/} <path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" /></svg>
                </button>
                <div className="my-5 w-14 shadow-inner rounded-full ">
                    <Nightmode switchBetweenMode={switchBetweenMode} />
                </div>
            </div>

        </div>

    </>)
}