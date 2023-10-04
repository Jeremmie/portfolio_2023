import React, { useEffect, useRef, useState } from "react"
import Lottie from "lottie-react"
import boxAnimation from '../../../public/lottie/iconAnimation/animBox.json'
import "../..//style.css"

export default function Box({travauxReverseAnim, toggleTravaux}){
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleDarkModeChange = (event) => {
        setIsDarkMode(event.matches);
      };
      darkModeMediaQuery.addListener(handleDarkModeChange);
      setIsDarkMode(darkModeMediaQuery.matches);
      return () => {
        darkModeMediaQuery.removeListener(handleDarkModeChange);
      };
    }, []);
    var travauxState = toggleTravaux
    var setAnimReverse = travauxReverseAnim
    console.log(setAnimReverse);
    const lottieRef = useRef(); // permet d'appeller l'animation
    const [animDirection, setAnimDirection] = useState(1); // définit si l'animation se joue en avant(1) ou en arrière(-1)
  
  
    const playAnimationNow = () => {
      setAnimDirection(animDirection * -1) // permet à l'animation de se jouer en avant une fois sur 2
      lottieRef.current.setDirection(animDirection); // définit la direction de l'animation
      lottieRef.current.play(); // joue l'animation

    }

    console.log(travauxState);
    function resetAnimation(){
        if (travauxState === true) {
            setAnimDirection(-1)
            lottieRef.current.play()
        } else { }
    }
    const handleLottieClick = () => { // appelle les deux fonctions --> react ne peut pas avoir 2 onClick sur le même item
      playAnimationNow();
    }
  

    return(<>
    <Lottie className="fill-gunmetal dark:fill-melon transition_darkmode boxAnimation" onClick={handleLottieClick} autoplay={false} lottieRef={lottieRef} animationData={boxAnimation} loop={false} />
    </>)
}