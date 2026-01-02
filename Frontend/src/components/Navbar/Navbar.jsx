import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/logo.png"; // <-- your logo path here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 md:h-12 w-auto" />
          <span className="ml-2 text-fuchsia-500 font-bold text-xl md:text-2xl hidden md:inline">
            Ishan
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-100 font-medium">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:text-emerald-400 transition">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-100 focus:outline-none text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden bg-gray-900/95 flex flex-col items-center space-y-6 py-6 text-gray-100 font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <li key={link.name} className="hover:text-emerald-400 transition">
                <a href={link.href} onClick={() => setIsOpen(false)}>
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
