import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full rounded-md bg-gradient-to-tr from-cyan-400/10 to-fuchsia-500/10 py-20 px-6 md:px-20"
    >
      <motion.h2
        className="text-4xl font-bold text-fuchsia-500 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-gray-100 max-w-3xl mx-auto text-center text-lg md:text-xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I am a MERN stack developer focused on building production-ready websites for startups and businesses.
        Each project teaches me something new, and I enjoy transforming ideas into functional, user-friendly websites.
      </motion.p>
    </section>
  );
};

export default About;
