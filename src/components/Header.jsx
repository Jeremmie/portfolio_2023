import Nightmode from "./Nightmode"
import { useRef, useState } from "react"
import { useMediaQuery } from 'react-responsive'
import Lottie from "lottie-react"
import boxAnimation from '../../public/lottie/iconAnimation/animBox.json'
import contactAnimation from '../../public/lottie/iconAnimation/animContact.json'
import houseAnimation from '../../public/lottie/iconAnimation/animHouse.json'
import liensAnimation from '../../public/lottie/iconAnimation/animLiens.json'
import menuAnimation from '../../public/lottie/menu_animation/menu_animation.json'
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
    const lottieRefBurgerMenu = useRef(); // permet d'appeller l'animation
    const [animDirectionHouse, setAnimDirectionHouse] = useState(1); // définit si l'animation se joue en avant(1) ou en arrière(-1)
    const [animDirectionTravaux, setAnimDirectionTravaux] = useState(1); // définit si l'animation se joue en avant(1) ou en arrière(-1)
    const [animDirectionContact, setAnimDirectionContact] = useState(1); // définit si l'animation se joue en avant(1) ou en arrière(-1)
    const [animDirectionLiens, setAnimDirectionLiens] = useState(1); // définit si l'animation se joue en avant(1) ou en arrière(-1)
    const [animDirectionBurger, setAnimDirectionBurger] = useState(1); // définit si l'animation se joue en avant(1) ou en arrière(-1)

    var houseState = toggleHouse
    var contactState = toggleContact
    var travauxState = toggleTravaux
    var liensState = toggleLiens
    const houseFunction = clickHouse
    const travauxFunction = clickTravaux
    const contactFunction = clickContact
    const liensFunction = clickLiens
    var travauxStyle = document.getElementById('travauxID')

    function onlyHouseOpen() {
        if (travauxState === false) {
            travauxFunction()
            setAnimDirectionTravaux(animDirectionTravaux * -1)
            lottieTravaux.current.setDirection(animDirectionTravaux); // définit la direction de l'animation
            lottieTravaux.current.play();
            document.getElementById('travauxID').classList.remove('activeBox')
        } else { }
        if (contactState === false) {
            contactFunction()
            setAnimDirectionContact(animDirectionContact * -1)
            lottieContact.current.setDirection(animDirectionContact); // définit la direction de l'animation
            lottieContact.current.play();
            document.getElementById('contactID').classList.remove('activeBox')
        } else { }
        if (liensState === false) {
            liensFunction()
            setAnimDirectionLiens(animDirectionLiens * -1)
            lottieLiens.current.setDirection(animDirectionLiens); // définit la direction de l'animation
            lottieLiens.current.play();
            document.getElementById('liensID').classList.remove('activeBox')
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
            document.getElementById('contactID').classList.remove('activeBox')
        } else { }
        if (liensState === false) {
            liensFunction()
            setAnimDirectionLiens(animDirectionLiens * -1)
            lottieLiens.current.setDirection(animDirectionLiens); // définit la direction de l'animation
            lottieLiens.current.play();
            document.getElementById('liensID').classList.remove('activeBox')
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
        document.getElementById('travauxID').classList.toggle('activeBox')
    }

    function onlyContactOpen() {
        if (travauxState === false) {
            travauxFunction()
            setAnimDirectionTravaux(animDirectionTravaux * -1)
            lottieTravaux.current.setDirection(animDirectionTravaux); // définit la direction de l'animation
            lottieTravaux.current.play();
            document.getElementById('travauxID').classList.remove('activeBox')
        } else { }
        if (liensState === false) {
            liensFunction()
            setAnimDirectionLiens(animDirectionLiens * -1)
            lottieLiens.current.setDirection(animDirectionLiens); // définit la direction de l'animation
            lottieLiens.current.play();
            document.getElementById('liensID').classList.remove('activeBox')
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
        document.getElementById('contactID').classList.toggle('activeBox')
    }

    function onlyLiensOpen() {
        if (travauxState === false) {
            travauxFunction()
            setAnimDirectionTravaux(animDirectionTravaux * -1)
            lottieTravaux.current.setDirection(animDirectionTravaux); // définit la direction de l'animation
            lottieTravaux.current.play();
            document.getElementById('travauxID').classList.remove('activeBox')
        } else { }
        if (contactState === false) {
            contactFunction()
            setAnimDirectionContact(animDirectionContact * -1)
            lottieContact.current.setDirection(animDirectionContact); // définit la direction de l'animation
            lottieContact.current.play();
            document.getElementById('contactID').classList.remove('activeBox')
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
        setAnimDirectionLiens(animDirectionLiens * -1)
        lottieLiens.current.setDirection(animDirectionLiens); // définit la direction de l'animation
        lottieLiens.current.play();
        document.getElementById('liensID').classList.toggle('activeBox')
    }


    // const playAnimationNow = () => {
    //     setAnimDirection(animDirection * -1) // permet à l'animation de se jouer en avant une fois sur 2
    //     lottieTravaux.current.setDirection(animDirection); // définit la direction de l'animation
    //     lottieTravaux.current.play(); // joue l'animation

    //   }
    //toggle menu
    const menuButton = useRef()
    const openMenu = () => {
        var menuVisible = document.querySelector('#menu');
        const modalHeader = document.querySelector('#modalHeader')
        menuVisible.classList.toggle('menu_animation');
        modalHeader.classList.toggle('modalHeader')
    }
    // function modalHeaderClose(){
    //     console.log('coucou');
    //     var menuVisible = document.querySelector('#menu');
    //     const modalHeader = document.querySelector('#modalHeader')
    //     modalHeader.classList.toggle('modalHeader')
    // }



    const playAnimationNow = () => {
        setAnimDirectionBurger(animDirectionBurger * -1) // permet à l'animation de se jouer en avant une fois sur 2
        lottieRefBurgerMenu.current.setDirection(animDirectionBurger); // définit la direction de l'animation
        lottieRefBurgerMenu.current.play(); // joue l'animation
    }
    function handleBurgerClick() {
        playAnimationNow();
        openMenu();
    }

    return (<>
        <div onClick={handleBurgerClick} className="w-14 md:w-10 p-2 md:p-1.5 shadow-warm rounded-full h-fit block absolute top-5 left-5 z-20 bg-melon  md:backdrop-blur-xl dark:bg-gunmetal dark:shadow-cold transition_darkmode">
            <Lottie className="logo_menu_target fill-gunmetal dark:fill-melon" autoplay={false} lottieRef={lottieRefBurgerMenu} animationData={menuAnimation} loop={false} />
        </div>
        <div id="modalHeader" onClick={handleBurgerClick} className="bg-gunmetal/60 opacity-[0%] hidden fixed h-screen z-10 w-screen transition_pop-up"></div>
        <div className="
        flex justify-start items-center h-screen z-20 fixed
        ">
            <div id="menu" className="
            fixed -left-full bg-melon dark:bg-gunmetal flex flex-col text-gunmetal justify-center items-center rounded-r-lg backdrop-blur-xl dark:text-melon dark:shadow-warm transition_darkmode shadow-lg border-y-2 border-r-2 border-gray-800/10
        " >
                <button onClick={houseFull} className="my-5 px-6 py-3 rounded-full  transition_manual ">
                    <Lottie className="fill-gunmetal w-6 rounded-full dark:fill-melon transition_darkmode boxAnimation" autoplay={false} lottieRef={lottieHouse} animationData={houseAnimation} loop={false} />
                </button >
                <button onClick={travauxFull} id="travauxID" className="my-5 px-5 py-3 rounded-full  transition_manual">
                    <Lottie className="fill-gunmetal w-6 rounded-full dark:fill-melon transition_darkmode boxAnimation" autoplay={false} lottieRef={lottieTravaux} animationData={boxAnimation} loop={false} />
                </button>
                <button onClick={contactFull} id="contactID" className="my-5 px-5 py-3 rounded-full  transition_manual ">
                    <Lottie className="fill-gunmetal w-6 rounded-full dark:fill-melon transition_darkmode boxAnimation" autoplay={false} lottieRef={lottieContact} animationData={contactAnimation} loop={false} />
                </button>
                <button onClick={liensFull} id="liensID" className="my-5 px-5 py-3 rounded-full  transition_manual ">

                    <Lottie className="fill-gunmetal w-6 rounded-full dark:fill-melon transition_darkmode boxAnimation" autoplay={false} lottieRef={lottieLiens} animationData={liensAnimation} loop={false} />
                </button>
                <div className="my-5 w-14 shadow-inner rounded-full ">
                    <Nightmode switchBetweenMode={switchBetweenMode} />
                </div>
            </div>

        </div>

    </>)
}