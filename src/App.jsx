import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Travaux from './components/Travaux.jsx'
import Contact from './components/contact'
import './style.css'

function App() {
  const [toggleTravaux, setToggleTravaux] = useState(false)

  function switchToggleTravaux() {
    setToggleTravaux(!toggleTravaux)
    console.log(toggleTravaux);
  }

  // darkmode pour les objets 3D
  const [toggleBetweenMode, setToggleModeEnabeld] = useState(true);
  const [toggleHouse, setClickInHouse] = useState(true);
  const [toggleContact, setClickInContact] = useState(true);

  function switchBetweenMode() {
    setToggleModeEnabeld(!toggleBetweenMode)
  }
  function clickInHouse() {
    setClickInHouse(!toggleHouse)
  }
  function clickInContact() {
    setClickInContact(!toggleContact)
  }

  return (
    <>

      <div className="
        h-screen bg-center transition_darkmode flex
      ">
        <Header switchBetweenMode={switchBetweenMode} toggleHouse={toggleHouse} clickInHouse={clickInHouse} toggleContact={toggleContact} clickInContact={clickInContact} />

        {toggleTravaux ? null : <div className='fixed z-10 flex bottom-[10%] w-screen justify-center align-center'>
          <p onClick={switchToggleTravaux} className='bg-gunmetal text-melon px-4 py-4 rounded-full shadow-cold cursor-pointer hover:bg-melon hover:text-gunmetal transition_manual'>voir les travaux</p>
        </div>}



        <Home toggleBetweenMode={toggleBetweenMode} />

        {toggleHouse ? null : <Travaux />}
        {toggleContact ? null : <Contact />}


      </div >
    </>
  )
}

export default App
