import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-slate-800 py-8 px-6 md:px-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ishan. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#45EB28] transition">
            GitHub
          </a>
          <a href="#" className="hover:text-[#45EB28] transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-[#45EB28] transition">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer