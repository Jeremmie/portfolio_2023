import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import Header from './Header'
import Home from './Home'

function App() {
  

  return (
    <>
      <div className='all'>
        <Header />
        
        <Home />
      </div>
    </>
  )
}

export default App
