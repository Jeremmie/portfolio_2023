import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Canvas, useFrame } from '@react-three/fiber'
import Header from './components/Header'
import Home from './components/Home'
import './style.css'

function App() {


  // darkmode pour les objets 3D
  const [toggleBetweenMode, setToggleModeEnabeld] = useState(true);

  function switchBetweenMode() {
    setToggleModeEnabeld(!toggleBetweenMode) 
  }
  return (
    <>
      <div className="
      h-screen  bg-melon bg-center dark:bg-gunmetal transition_darkmode flex
      md:block
      ">
        <Header switchBetweenMode={switchBetweenMode} />
        
        <Home toggleBetweenMode={toggleBetweenMode} />
      </div>
    </>
  )
}

export default App
