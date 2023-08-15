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
      <div className="
      h-screen  bg-melon bg-center dark:bg-gunmetal transition_darkmode flex
      md:block
      ">
        <Header />
        
        <Home />
      </div>
    </>
  )
}

export default App
