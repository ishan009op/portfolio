import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

// Replace these URLs with your own project screenshots if available
const projects = [
  {
    title: "XFit",
    desc: "Fitness portal with responsive layout & modern UI.",
    live: "https://xfit-snowy.vercel.app",
    code: "https://github.com/yourusername/xfit",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "SmartSalon",
    desc: "Salon booking & management platform with smooth UX.",
    live: "https://smart-salon-ten.vercel.app",
    code: "https://github.com/yourusername/smartsalon",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Let’s Eat",
    desc: "Restaurant discovery & ordering platform with clean UI.",
    live: "https://lets-eat-green.vercel.app",
    code: "https://github.com/yourusername/letseat",
    img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1200&auto=format&fit=crop",
  },
];

const Projects = () => {
  return (
    <section id="project" className="bg-black text-white relative overflow-hidden py-32 px-6">
      {/* Background floating cloud images */}
      <motion.img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
        alt="cloud1"
        className="absolute top-10 left-0 w-60 opacity-20 blur-2xl"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
        alt="cloud2"
        className="absolute top-1/3 right-0 w-72 opacity-15 blur-2xl"
        animate={{ x: [0, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
        alt="cloud3"
        className="absolute bottom-20 left-1/4 w-80 opacity-10 blur-3xl"
        animate={{ x: [0, 80, 0] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-20 text-center"
      >
        Selected Projects
      </motion.h2>

      {/* Projects */}
      <div className="flex flex-col gap-32 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="grid md:grid-cols-2 gap-10 items-center group"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer">
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <motion.div
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-xl"
              />
            </div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-3xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-lg">{project.desc}</p>

              <div className="flex gap-5 pt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition"
                >
                  Live <FiExternalLink />
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gray-400 px-5 py-2 rounded-xl hover:bg-white hover:text-black transition"
                >
                  Code <FiGithub />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;