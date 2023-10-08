import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Travaux from './components/Travaux.jsx'
import Contact from './components/contact'
import Liens from './components/Liens'
import './style.css'

function App() {
  // const [toggleTravaux, setToggleTravaux] = useState(false)

  // function switchToggleTravaux() {
  // setToggleTravaux(!toggleTravaux)
  // console.log(toggleTravaux);
  // }

  // darkmode pour les objets 3D
  const [toggleBetweenMode, setToggleModeEnabeld] = useState(true);
  const [toggleHouse, setClickHouse] = useState(true);
  const [toggleTravaux, setClickTravaux] = useState(true);
  const [toggleContact, setClickContact] = useState(true);
  const [toggleLiens, setClickLiens] = useState(true);

  function switchBetweenMode() {
    setToggleModeEnabeld(!toggleBetweenMode)
  }
  function clickHouse() {
    setClickHouse(!toggleHouse)
  }
  function clickTravaux() {
    setClickTravaux(!toggleTravaux)
  }
  function clickContact() {
    setClickContact(!toggleContact)
  }
  function clickLiens() {
    setClickLiens(!toggleLiens)
  }

  return (
    <>

      <div className="
        h-screen bg-center transition_darkmode flex
      ">
        <Header switchBetweenMode={switchBetweenMode} toggleHouse={toggleHouse} clickHouse={clickHouse} toggleContact={toggleContact} clickTravaux={clickTravaux} toggleTravaux={toggleTravaux} clickContact={clickContact} clickLiens={clickLiens} toggleLiens={toggleLiens} />

        <Home toggleBetweenMode={toggleBetweenMode} />

        {toggleTravaux ? null : <Travaux />}
        {toggleContact ? null : <Contact />}
        {toggleLiens ? null : <Liens />}


      </div >
    </>
  )
}

export default App
