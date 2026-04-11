import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Project from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {
 

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
