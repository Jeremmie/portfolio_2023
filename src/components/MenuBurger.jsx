import React, {useEffect, useRef, useState} from "react"
import ReactDOM from "react-dom";
import Lottie from "lottie-react"
import fromLightmodeAnim from '../assets/lottie/menu_animation/fromLightmodeAnim.json'
import lightmodeReversed from '../assets/lottie/menu_animation/lightmodeTimeReversed.json'
import fromDarkmodeAnim from '../assets/lottie/menu_animation/fromDarkmodeAnim.json'
import darkmodeReversed from '../assets/lottie/menu_animation/darkmodeTimeReversed.json'




export default function Nightmode(){


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
      
    });
   
    const lottieRef = useRef(); // permet d'appeller l'animation
    const [animDirection, setAnimDirection] = useState(1); // définit si l'animation se joue en avant(1) ou en arrière(-1)
    
    
    const playAnimationNow = () => {
        setAnimDirection(animDirection * -1) // permet à l'animation de se jouer en avant une fois sur 2
        lottieRef.current.setDirection(animDirection); // définit la direction de l'animation
        lottieRef.current.play(); // joue l'animation
    }
    const handleLottieClick = () => { // appelle les deux fonctions --> react ne peut pas avoir 2 onClick sur le même item
        playAnimationNow();
    }
  
    return (
        <>
            <Lottie onClick={handleLottieClick} autoplay={false} lottieRef={lottieRef} animationData={isDarkMode? fromDarkmodeAnim : fromLightmodeAnim} loop={false} />
        </>
    );

}