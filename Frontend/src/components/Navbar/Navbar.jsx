import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
  
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold text-[#45EB28]">
          Ishan.
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-slate-800 font-medium">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className="hover:text-[#45EB28] transition-colors"
              >
                {link.name}
              </a>
              {/* underline animation */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#45EB28] transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-800 focus:outline-none text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden bg-white/95 flex flex-col items-center space-y-6 py-6 text-slate-800 font-medium shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#45EB28] transition-colors text-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
