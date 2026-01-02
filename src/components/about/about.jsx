import React from 'react'

function About() {
  return (
    <>
      <div className='text-white text-5xl w-full h-full mt-16'>
        <h2 className='p-4'>I am Ishan, frontend developer</h2>
        <h2 className='p-4'>Expert in <span className='text-blue-800'>reactjs</span> and <span className='text-blue-800'>tailwind css</span> </h2>
      </div>
      <div className='mt-16 flex justify-center text-white'>
        <h1 className='text-5xl'>Projects</h1>
      </div>
      <div className='flex justify-center mt-8'>

        <div className='w-30 h-30 text-white border border-white m-5 p-3'>
          <h2 className='text-3xl p-3 m-5'>password generator</h2>
          <button className='bg-blue-800 px-3 border border-white text-white text-2xl'>view </button>
        </div>
        <div className='w-30 h-30 text-white border border-white m-5 p-3'>
          <h2 className='text-3xl p-3 m-5'>digital clock</h2>
          <button className='bg-blue-800 px-3 border border-white text-white text-2xl'>view </button>
        </div>
        <div className='w-30 h-30 text-white border border-white m-5 p-3'>
          <h2 className='text-3xl p-3 m-5'>Todo App</h2>
          <button className='bg-blue-800 px-3 border border-white text-white text-2xl'>view </button>
        </div>
      </div>

    </>
  )
}

export default About