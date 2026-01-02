import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (<>
  <div className="navbar flex">
  <div className='lnavbar '>
    <img src="https://cdn5.f-cdn.com/ppic/266282840/logo/80187912/RS9vX/CROPPED_profile_logo_WBYUI_fcbf337ae738b59058d48bf610bb0b2a.png?image-optimizer=force&format=webply&width=336" alt="Logo" className='w-48 h-48 mt-0 absolute left-5 top-0 rounded-full' />
    </div>
  <div className="rnavbar   m-auto flex justify-center">
    <NavLink to="/"  className={({isActive})=>`${isActive ? "text-blue-800" : "text-white"} py-2 px-3 m-3 text-4xl `} >Home</NavLink>
    <NavLink to="/about"  className={({isActive})=>`${isActive ? "text-blue-800" : "text-white"} py-2 px-3 m-3 text-4xl `} >About</NavLink>
    <NavLink to="/contact"  className={({isActive})=>`${isActive ? "text-blue-800" : "text-white"} py-2 px-3 m-3 text-4xl `} >Contact us</NavLink>
    
    </div>
    </div>
   
    </>
  )
}

export default Header