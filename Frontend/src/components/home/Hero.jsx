import { motion } from "framer-motion";
import { Terminal, Layout, ShieldCheck, Zap } from "lucide-react"; // Optional: npm i lucide-react

const Hero = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cards = [
    {
      title: "Performance First",
      desc: "99+ Lighthouse scores.",
      icon: <Zap className="text-yellow-400" />,
      color: "from-yellow-500/20 to-transparent",
    },
    {
      title: "Secure by Design",
      desc: "JWT & OAuth integration.",
      icon: <ShieldCheck className="text-blue-400" />,
      color: "from-blue-500/20 to-transparent",
    },
    {
      title: "Scalable Arch",
      desc: "Built for 10k+ users.",
      icon: <Terminal className="text-purple-400" />,
      color: "from-purple-500/20 to-transparent",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#020617] overflow-hidden flex items-center px-6 md:px-20">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 mb-6 rounded-full border border-slate-700 bg-slate-800/50 text-indigo-300 text-sm font-medium">
            ✨ Available for new projects
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            Digital experiences <br />
            <span className="bg-gradient-to-r from-indigo-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              engineered to scale.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-8 text-lg text-slate-400 max-w-lg leading-relaxed">
            I specialize in building high-conversion landing pages and complex 
            full-stack applications using the **MERN stack** and **Next.js**.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-5">
            <button className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300">
              Start a Project
            </button>
            <button className="px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:bg-slate-800 transition-all">
              View Case Studies
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT: INTERACTIVE GRID */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Main Large Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="sm:col-span-2 bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm group"
          >
            <Layout className="mb-4 text-indigo-400 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Modern Dashboards</h3>
            <p className="text-slate-400">Custom admin panels with real-time data visualization and complex state management.</p>
            <div className="mt-6 h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1 }}
                className="h-full bg-indigo-500" 
              />
            </div>
          </motion.div>

          {/* Smaller Feature Cards */}
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`bg-slate-900/50 border border-slate-800 p-6 rounded-3xl backdrop-blur-sm bg-gradient-to-b ${card.color}`}
            >
              <div className="mb-3">{card.icon}</div>
              <h4 className="font-bold text-white text-md">{card.title}</h4>
              <p className="text-sm text-slate-400 mt-1">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;