import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-16 pb-10 px-6 overflow-hidden">

      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Branding */}
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-white">developer</span>{" "}
          <span className="text-blue-500">Ishan</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {["Home", "About", "Services", "Projects", "Contact"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="relative group text-gray-400 hover:text-white transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[
            { icon: <FiGithub />, link: "https://github.com/yourusername" },
            { icon: <FiLinkedin />, link: "https://linkedin.com/in/yourusername" },
            { icon: <FiTwitter />, link: "https://twitter.com/yourusername" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-blue-500 backdrop-blur-md transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative mt-10 flex flex-col items-center gap-3">

        {/* CTA Line */}
        <p className="text-gray-400 text-sm">
          Building modern, high-performance web experiences 🚀
        </p>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} developer Ishan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;