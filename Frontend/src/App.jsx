import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Project from './Components/Projects'


function App() {
 

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Project/>
    </>
  )
}

export default App
