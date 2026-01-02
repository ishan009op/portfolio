import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
  
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full  bg-gray-900 text-gray-100 py-14 px-6 md:px-20">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo + Tagline */}
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold text-fuchsia-500">Ishan.</span>
          <p className="text-gray-400 text-sm">
            Building modern websites that help businesses grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-fuchsia-500 font-semibold mb-2">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-fuchsia-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-fuchsia-500 font-semibold mb-2">Follow Me</h4>
          <div className="flex justify-center gap-4 text-xl">
            <a
              href="mailto:developer.ishan@example.com"
              className="hover:text-fuchsia-500 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://instagram.com/developer_ishan09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/developerishan09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.hr
        className="my-6 border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      />

      {/* Copyright */}
      <motion.p
        className="text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        &copy; {new Date().getFullYear()} Ishan. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
