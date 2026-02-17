import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Sparkles } from "lucide-react";

const About = () => {
  const skills = [
    { name: "React", icon: <Code2 size={16} />, color: "text-blue-400" },
    { name: "Node.js", icon: <Cpu size={16} />, color: "text-emerald-400" },
    { name: "MongoDB", icon: <Globe size={16} />, color: "text-green-500" },
    { name: "Tailwind", icon: <Sparkles size={16} />, color: "text-cyan-400" },
    { name: "Next.js", icon: <Code2 size={16} />, color: "text-white" },
    { name: "TypeScript", icon: <Cpu size={16} />, color: "text-blue-500" },
  ];

  return (
    <section id="about" className="relative bg-[#020617] text-slate-300 py-24 px-6 md:px-20 overflow-hidden">
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* LEFT: HEADING & INTRO (2 Columns) */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-500 uppercase mb-4">
                01. Discovery
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Behind the <br /> 
                <span className="text-slate-500 italic font-light">Codebase</span>
              </h3>
              <p className="text-lg leading-relaxed text-slate-400 mb-8">
                I don't just write lines of code; I architect digital solutions. 
                With a focus on **User Experience** and **System Performance**, 
                I bridge the gap between complex backend logic and pixel-perfect frontends.
              </p>
              
              <div className="p-6 border-l-2 border-indigo-500 bg-indigo-500/5 rounded-r-xl italic text-slate-300">
                “I believe a website should not just look good but also feel intuitive for every user.”
              </div>
            </motion.div>
          </div>

          {/* RIGHT: SKILLS & STATS (3 Columns) */}
          <div className="lg:col-span-3">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ y: -5, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm transition-colors"
                >
                  <span className={skill.color}>{skill.icon}</span>
                  <span className="font-medium text-slate-200">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* EXPERIENCE CARDS */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-all">
                <h4 className="text-indigo-400 font-bold text-2xl mb-1">2+ Years</h4>
                <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Experience</p>
                <p className="mt-4 text-slate-400 text-sm">Worked with startups to build MVPs and scale existing platforms.</p>
              </div>

              <div className="group p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-all">
                <h4 className="text-emerald-400 font-bold text-2xl mb-1">15+ Projects</h4>
                <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Completed</p>
                <p className="mt-4 text-slate-400 text-sm">From landing pages to complex E-commerce and SaaS dashboards.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;