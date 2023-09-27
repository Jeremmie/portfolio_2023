import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Travaux from './components/Travaux.jsx'
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
      h-screen bg-center transition_darkmode flex
      ">
        <Header switchBetweenMode={switchBetweenMode} />
        <div className='fixed z-10 flex bottom-[10%] w-screen justify-center align-center'>
        <p className='bg-gunmetal text-melon px-4 py-4 rounded-full shadow-cold cursor-pointer hover:bg-melon hover:text-gunmetal transition_manual'>voir les travaux</p>
        </div>
        <Home toggleBetweenMode={toggleBetweenMode} />

        {/* <Travaux /> */}

      </div>
    </>
  )
}

export default App
