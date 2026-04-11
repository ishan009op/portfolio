import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full group"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
              alt="Contact Illustration"
              className="rounded-3xl w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.6)]"
        >
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Let’s Build Something <span className="text-blue-500">Amazing</span>
          </h2>

          <p className="text-gray-400 mb-8 text-sm">
            Got an idea, project, or business? Let’s turn it into a powerful digital experience.
          </p>

          <form className="flex flex-col gap-5">
            
            {/* Inputs */}
            {["Your Name", "Your Email"].map((placeholder, i) => (
              <input
                key={i}
                type={i === 1 ? "email" : "text"}
                placeholder={placeholder}
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition"
              />
            ))}

            <textarea
              placeholder="Your Message"
              rows="5"
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition"
            ></textarea>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="relative overflow-hidden bg-blue-600 px-6 py-3 rounded-xl font-semibold"
            >
              <span className="relative z-10">Send Message</span>

              {/* Shine Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-700"></span>
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;