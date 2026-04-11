import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Project", href: "#project" },
    { title: "Contact", href: "#contact" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -8 }, // reduced to avoid overflow
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      
     
      <div className="max-w-full overflow-x-hidden">
        
        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-wide"
          >
            <span className="text-white">developer</span>{" "}
            <span className="text-blue-500">Ishan</span>
          </motion.div>

          {/* Desktop Menu */}
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="hidden md:flex gap-8 items-center"
          >
            {links.map((link) => (
              <motion.li key={link.title} variants={item}>
                <a
                  href={link.href}
                  className="text-gray-200 hover:text-blue-400 transition font-medium"
                >
                  {link.title}
                </a>
              </motion.li>
            ))}

            <motion.li variants={item}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition">
                Hire me
              </button>
            </motion.li>
          </motion.ul>

          {/* Mobile Icon */}
          <div className="md:hidden text-white">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              
              
              className="md:hidden w-full overflow-x-hidden bg-black/90 backdrop-blur-lg px-5 py-6"
            >
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-6"
              >
                {links.map((link) => (
                  <motion.li key={link.title} variants={item}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-white text-lg"
                    >
                      {link.title}
                    </a>
                  </motion.li>
                ))}

                <motion.li variants={item}>
                  <button className="w-full bg-blue-600 py-3 rounded-xl text-white">
                    Hire me
                  </button>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;