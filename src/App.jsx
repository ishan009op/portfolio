import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'
function App() {
 

  return (
    <>
     <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
