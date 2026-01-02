import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './components/footer/footer'
import Hero from './components/home/Hero'
import Services from './components/Services/Services'
import About from './components/about/about'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/contact'

function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
