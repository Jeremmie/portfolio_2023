import Nightmode from "./Nightmode"
import { useRef, useState } from "react"
import { useMediaQuery } from 'react-responsive'
import MenuBurger from './MenuBurger.jsx'
import Lottie from "lottie-react"
import boxAnimation from '../../public/lottie/iconAnimation/animBox.json'
import contactAnimation from '../../public/lottie/iconAnimation/animContact.json'
import houseAnimation from '../../public/lottie/iconAnimation/animHouse.json'
import "../style.css"

export default function Header({ switchBetweenMode, toggleBetweenMode, clickHouse, toggleHouse, clickTravaux, toggleTravaux, clickContact, toggleContact, clickLiens, toggleLiens }) {
    const isSM = useMediaQuery({ query: '(max-width: 640px)' })
    const isMD = useMediaQuery({ query: '(min-width: 768px)' })
    const isLG = useMediaQuery({ query: '(min-width: 1024px)' })
    const isXL = useMediaQuery({ query: '(min-width: 1280px)' })
    const isXXL = useMediaQuery({ query: '(min-width: 1536px)' })

    const lottieHouse = useRef(); // permet d'appeller l'animation
    const lottieTravaux = useRef(); // permet d'appeller l'animation
    const lottieContact = useRef(); // permet d'appeller l'animation
    const lottieLiens = useRef(); // permet d'appeller l'animation
    const [animDirectionHouse, setAnimDirectionHouse] = useState(1); // définit si l'animation se joue en avant(1) ou en arrière(-1)
    const [animDirectionTravaux, setAnimDirectionTravaux] = useState(1); // définit si l'animation se joue en avant(1) ou en arrière(-1)
    const [animDirectionContact, setAnimDirectionContact] = useState(1); // définit si l'animation se joue en avant(1) ou en arrière(-1)
    const [animDirectionLiens, setAnimDirectionLiens] = useState(1); // définit si l'animation se joue en avant(1) ou en arrière(-1)






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
            setAnimDirectionTravaux(animDirectionTravaux * -1)
            lottieTravaux.current.setDirection(animDirectionTravaux); // définit la direction de l'animation
            lottieTravaux.current.play();
        } else { }
        if (contactState === false) {
            contactFunction()
            setAnimDirectionContact(animDirectionContact * -1)
            lottieContact.current.setDirection(animDirectionContact); // définit la direction de l'animation
            lottieContact.current.play();
        } else { }
        if (liensState === false) {
            liensFunction()
        } else { }
    }
    function houseFull() {
        setAnimDirectionHouse(animDirectionHouse * -1)
        lottieHouse.current.setDirection(animDirectionHouse); // définit la direction de l'animation
        lottieHouse.current.play();
        onlyHouseOpen()
        houseFunction()
    }

    function onlyTravauxOpen() {
        if (contactState === false) {
            contactFunction()
            setAnimDirectionContact(animDirectionContact * -1)
            lottieContact.current.setDirection(animDirectionContact); // définit la direction de l'animation
            lottieContact.current.play();
        } else { }
        if (liensState === false) {
            liensFunction()
        } else { }
        if (houseState === false) {
            houseFunction()
            setAnimDirectionHouse(animDirectionHouse * -1)
            lottieHouse.current.setDirection(animDirectionHouse); // définit la direction de l'animation
            lottieHouse.current.play();
        } else { }
    }
    function travauxFull() {
        setAnimDirectionTravaux(animDirectionTravaux * -1)
        lottieTravaux.current.setDirection(animDirectionTravaux); // définit la direction de l'animation
        lottieTravaux.current.play();
        onlyTravauxOpen()
        travauxFunction()
        console.log('played');
    }

    function onlyContactOpen() {
        if (travauxState === false) {
            travauxFunction()
            setAnimDirectionTravaux(animDirectionTravaux * -1)
            lottieTravaux.current.setDirection(animDirectionTravaux); // définit la direction de l'animation
            lottieTravaux.current.play();
        } else { }
        if (liensState === false) {
            liensFunction()
        } else { }
        if (houseState === false) {
            houseFunction()
            setAnimDirectionHouse(animDirectionHouse * -1)
            lottieHouse.current.setDirection(animDirectionHouse); // définit la direction de l'animation
            lottieHouse.current.play();
        } else { }
    }
    function contactFull() {
        onlyContactOpen();
        contactFunction()
        setAnimDirectionContact(animDirectionContact * -1)
        lottieContact.current.setDirection(animDirectionContact); // définit la direction de l'animation
        lottieContact.current.play();
    }

    function onlyLiensOpen() {
        if (travauxState === false) {
            travauxFunction()
            setAnimDirectionTravaux(animDirectionTravaux * -1)
            lottieTravaux.current.setDirection(animDirectionTravaux); // définit la direction de l'animation
            lottieTravaux.current.play();
        } else { }
        if (contactState === false) {
            contactFunction()
            setAnimDirectionContact(animDirectionContact * -1)
            lottieContact.current.setDirection(animDirectionContact); // définit la direction de l'animation
            lottieContact.current.play();
        } else { }
        if (houseState === false) {
            houseFunction()
            setAnimDirectionHouse(animDirectionHouse * -1)
            lottieHouse.current.setDirection(animDirectionHouse); // définit la direction de l'animation
            lottieHouse.current.play();
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
    console.log(animDirectionContact);
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
                <button onClick={houseFull} className="my-5 px-6 py-3 rounded-full  transition_manual ">
                    <Lottie className="fill-gunmetal w-6 rounded-full dark:fill-melon transition_darkmode boxAnimation" autoplay={false} lottieRef={lottieHouse} animationData={houseAnimation} loop={false} />
                </button >
                <button onClick={travauxFull} className="my-5 px-5 py-3 rounded-full  transition_manual ">
                    <Lottie className="fill-gunmetal w-6 rounded-full dark:fill-melon transition_darkmode boxAnimation" autoplay={false} lottieRef={lottieTravaux} animationData={boxAnimation} loop={false} />
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