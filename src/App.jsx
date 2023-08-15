import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Canvas, useFrame } from '@react-three/fiber'
import Header from './components/Header'
import Home from './components/Home'
import './style.css'

function App() {
  

  return (
    <>
      <div className="bg-melon bg-no-repeat bg-cover h-screen bg-center dark:bg-gunmetal transition_darkmode">
        <Header />
        
        <Home />
      </div>
    </>
  )
}

export default App
