import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Rocket } from "lucide-react";
import { FaDatabase } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920&auto=format&fit=crop"
            alt="Developer working"
            className="rounded-2xl object-cover w-full h-[400px]"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Building digital products that actually work
          </h2>

          {/* Intro */}
          <p className="mt-6 text-gray-400 text-lg">
            I’m a full-stack developer focused on creating scalable, fast and visually clean web applications that deliver real results.
          </p>

          {/* FEATURES (No cards, just rows) */}
          <div className="mt-10 space-y-6">

            <div className="flex items-start gap-4">
              <Code2 className="text-blue-500 mt-1" size={28} />
              <div>
                <h4 className="text-xl font-semibold">Full Stack Development</h4>
                <p className="text-gray-400 text-sm">
                  Building complete MERN applications from frontend to backend.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Layout className="text-blue-500 mt-1" size={28} />
              <div>
                <h4 className="text-xl font-semibold">Modern UI Design</h4>
                <p className="text-gray-400 text-sm">
                  Clean, responsive and user-focused interfaces.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaDatabase className="text-blue-500 mt-1" size={24} />
              <div>
                <h4 className="text-xl font-semibold">Database & Backend</h4>
                <p className="text-gray-400 text-sm">
                  Efficient data handling and scalable backend systems.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Rocket className="text-blue-500 mt-1" size={28} />
              <div>
                <h4 className="text-xl font-semibold">Performance & Deployment</h4>
                <p className="text-gray-400 text-sm">
                  Fast, optimized and production-ready applications.
                </p>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;