import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

const Home = () => {
  return (
    <div id="home" className="relative bg-black w-full min-h-screen flex items-center overflow-hidden">
      
      {/* Background Image */}
      <img 
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1920&auto=format&fit=crop"
        alt="Background tech"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6"
      >
        
        <div className="max-w-2xl text-left">
          
          <motion.h2 
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-extrabold tracking-tight leading-tight"
          >
            Clean code meets <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              clean design
            </span>
          </motion.h2>

          <motion.p 
            variants={item}
            className="mt-6 text-gray-300 text-lg sm:text-xl"
          >
            Building scalable full-stack applications with precision and modern aesthetics.
          </motion.p>

          <motion.div 
            variants={item}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
              View Projects
            </button>
            <button className="border border-gray-400 text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
              Contact Me
            </button>
          </motion.div>

        </div>

      </motion.div>
    </div>
  )
}

export default Home