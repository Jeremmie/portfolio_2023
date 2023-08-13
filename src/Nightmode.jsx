import React, {useRef} from "react"
import Lottie from "lottie-react"
import './index.css'
import NightmodeAnim from './assets/lottie/nightmode-placeholder.json'

export default function Nightmode(){

    const lottieRef = useRef(); // permet d'appeller l'animation
    var animDirection = -1; // définit si l'animation se joue en avant(1) ou en arrière(-1)

    function blackTheme() { // change le css en fonction du thème
        var switchDarkMode = document.querySelector('body');
        switchDarkMode.classList.toggle('body-nightmode');
    }

    const playAnimationNow = () => {
        animDirection *= -1; // permet à l'animation de se jouer en avant une fois sur 2
        lottieRef.current.setDirection(animDirection); // définit la direction de l'animation
        lottieRef.current.play(); // joue l'animation
    }

    const handleLottieClick = () => { // appelle les deux fonctions --> react ne peut pas avoir 2 onClick sur le même item
        playAnimationNow();
        blackTheme();
    }

    return (
        <>
            <Lottie onClick={handleLottieClick} autoplay={false} lottieRef={lottieRef} className="nightmode" animationData={NightmodeAnim} loop={false} />
        </>
    );

}