import { useState } from 'react'
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
      h-screen bg-center transition_darkmode flex
      ">
        <Header switchBetweenMode={switchBetweenMode} />
        
        <Home toggleBetweenMode={toggleBetweenMode} />
      </div>
    </>
  )
}

export default App
