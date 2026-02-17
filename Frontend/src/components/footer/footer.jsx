import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Mail size={20} />, href: "mailto:hello@ishan.dev", label: "Email" },
  ];

  return (
    <footer className="relative bg-[#020617] text-slate-400 py-12 px-6 md:px-20 border-t border-slate-800/50">
      {/* Top Decoration Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* LEFT: BRANDING */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#hero" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center font-bold text-white group-hover:bg-indigo-600 transition-colors">
                I.
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Ishan<span className="text-indigo-500">.</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 max-w-xs text-center md:text-left">
              Building high-performance web experiences with precision and purpose.
            </p>
          </div>

          {/* CENTER: BACK TO TOP */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 hover:text-white hover:border-indigo-500 transition-all shadow-lg"
          >
            <ChevronUp size={24} />
          </motion.button>

          {/* RIGHT: SOCIALS & COPYRIGHT */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:text-white transition-colors p-2 bg-slate-900/50 rounded-lg border border-transparent hover:border-slate-700"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-xs font-medium tracking-wider uppercase text-slate-600">
              &copy; {new Date().getFullYear()} Ishan Dev — All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;