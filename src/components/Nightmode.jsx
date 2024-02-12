import React, { useEffect, useRef, useState } from "react"
import Lottie from "lottie-react"
import fromLightmodeAnim from '../../public/lottie/darkModeAnimation/fromLightmodeAnim.json'
import fromDarkmodeAnim from '../../public/lottie/darkModeAnimation/fromDarkmodeAnim.json'
import "../style.css"


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'
// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')



export default function Nightmode({ switchBetweenMode }) {


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

  const lottieRef = useRef(); // permet d'appeller l'animation
  const [animDirection, setAnimDirection] = useState(1); // définit si l'animation se joue en avant(1) ou en arrière(-1)

  function blackTheme() {
    var switchDarkMode = document.documentElement;
    switchDarkMode.classList.toggle('dark');
  }

  const playAnimationNow = () => {
    setAnimDirection(animDirection * -1) // permet à l'animation de se jouer en avant une fois sur 2
    lottieRef.current.setDirection(animDirection); // définit la direction de l'animation
    lottieRef.current.play(); // joue l'animation
  }

  const handleLottieClick = () => { // appelle les deux fonctions --> react ne peut pas avoir 2 onClick sur le même item
    playAnimationNow();
    blackTheme();
    switchBetweenMode();
  }

  return (
    <>
      <Lottie className="fill-gunmetal dark:fill-melon boxAnimation transition_darkmode" onClick={handleLottieClick} autoplay={false} lottieRef={lottieRef} animationData={isDarkMode ? fromDarkmodeAnim : fromLightmodeAnim} loop={false} />
    </>
  );

}