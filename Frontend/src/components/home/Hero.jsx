import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-screen bg-white flex items-center px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            I build clean, fast websites <br />
            <span className="text-[#45EB28]">
              that help businesses grow
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-800 max-w-xl">
            Modern landing pages, admin panels, and full-stack websites built
            with performance, clarity, and scalability in mind.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-[#45EB28] text-black font-semibold hover:opacity-90 transition"
            >
              Get in touch
            </a>

            <a
              href="#services"
              className="px-6 py-3 rounded-full border border-slate-300 text-slate-800 font-medium hover:border-[#45EB28] transition"
            >
              View services
            </a>
          </div>
        </motion.div>

        {/* RIGHT: FLOATING UI CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Card 1 */}
          <motion.div
            className="bg-white border border-slate-200 rounded-xl p-5 shadow-md absolute top-0 left-6 w-64"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <h3 className="font-semibold text-slate-800 mb-2">
              Landing Page
            </h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>✔ Fast loading</li>
              <li>✔ Mobile responsive</li>
              <li>✔ SEO friendly</li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white border border-slate-200 rounded-xl p-5 shadow-md absolute top-32 right-6 w-64"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
          >
            <h3 className="font-semibold text-slate-800 mb-2">
              Admin Panel
            </h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>✔ User management</li>
              <li>✔ Secure auth</li>
              <li>✔ Clean dashboard</li>
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white border border-slate-200 rounded-xl p-5 shadow-md absolute top-64 left-12 w-64"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
          >
            <h3 className="font-semibold text-slate-800 mb-2">
              Full-Stack App
            </h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>✔ MERN stack</li>
              <li>✔ Scalable APIs</li>
              <li>✔ Production ready</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
