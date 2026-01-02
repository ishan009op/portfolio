import { motion } from "framer-motion";

const Hero = () => {
  const services = ["Landing Pages", "Admin Panels", "Websites"];

  return (
    <section id="hero" className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden flex flex-col justify-center items-center px-6 md:px-20">
      
      {/* Floating background blobs */}
      <div className="absolute -top-32 -right-32 w-72 h-72 md:w-96 md:h-96 bg-fuchsia-500/20 blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -left-32 w-72 h-72 md:w-96 md:h-96 bg-cyan-400/20 blur-3xl rounded-full animate-pulse-slow"></div>

      {/* Main content */}
      <motion.div
        className="relative text-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-fuchsia-500">
          I Build Modern Websites
        </h1>
        <p className="mt-4 text-gray-300 text-lg md:text-xl">
          Clean, responsive, and production-ready web solutions to grow your business.
        </p>

        {/* Call-to-action buttons */}
        <div className="mt-6 flex gap-4 justify-center flex-wrap">
          <a
            href="#services"
            className="px-6 py-3 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 text-gray-900 font-semibold transition"
          >
            View Services
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-semibold transition"
          >
            Contact Me
          </a>
        </div>

        {/* Mini service cards */}
        <div className="mt-10 flex gap-6 justify-center flex-wrap">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-4 rounded-xl text-center shadow-lg hover:scale-105 transition-transform min-w-[150px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {service}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
