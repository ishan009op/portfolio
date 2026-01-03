import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-white text-slate-800 py-20 px-6 md:px-20">
  <motion.h2 
    className="text-4xl font-bold mb-8 text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8 }}
  >
    About Me
  </motion.h2>

  <motion.p 
    className="text-lg max-w-3xl mx-auto mb-6 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    I am a web developer who loves building clean, responsive, and production-ready websites. Each project I create teaches me something new and helps me refine my skills.
  </motion.p>

  <motion.div
    className="flex flex-wrap justify-center gap-6 mt-6"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <span className="px-4 py-2 bg-[#45EB28]/20 text-[#45EB28] rounded-full">React</span>
    <span className="px-4 py-2 bg-[#45EB28]/20 text-[#45EB28] rounded-full">Node.js</span>
    <span className="px-4 py-2 bg-[#45EB28]/20 text-[#45EB28] rounded-full">MongoDB</span>
    <span className="px-4 py-2 bg-[#45EB28]/20 text-[#45EB28] rounded-full">Tailwind CSS</span>
    <span className="px-4 py-2 bg-[#45EB28]/20 text-[#45EB28] rounded-full">JavaScript</span>
  </motion.div>

  <motion.p
    className="mt-10 max-w-3xl mx-auto text-center italic text-slate-700"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    “I believe a website should not just look good but also feel intuitive for every user.”
  </motion.p>
</section>
  );
};

export default About;
