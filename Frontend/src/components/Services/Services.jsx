import { motion, useMotionValue, useTransform } from "framer-motion";
import { Layout, Shield, Database, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "High-Conversion Landing Pages",
    description: "I build blazing-fast landing pages optimized for SEO and user retention. Perfect for startups looking to make a massive first impression.",
    icon: <Layout className="text-indigo-400" size={32} />,
    features: ["A/B Testing Ready", "Core Web Vitals Optimized", "Framer Motion Animations"],
    tags: ["Next.js", "Tailwind", "GSAP"],
    link: "#"
  },
  {
    title: "Enterprise Admin Panels",
    description: "Custom internal tools and dashboards that turn complex data into actionable insights. Secure, scalable, and easy to manage.",
    icon: <Shield className="text-emerald-400" size={32} />,
    features: ["Role-based Auth", "Data Visualization", "Real-time Analytics"],
    tags: ["React Query", "Recharts", "Node.js"],
    link: "#"
  },
  {
    title: "Scalable Full-Stack Solutions",
    description: "End-to-end development of complex web applications. From database architecture to seamless frontend integration.",
    icon: <Database className="text-purple-400" size={32} />,
    features: ["REST/GraphQL APIs", "Database Indexing", "Cloud Deployment"],
    tags: ["MERN Stack", "PostgreSQL", "AWS"],
    link: "#"
  },
];

const ServiceCard = ({ service, index }) => {
  // Mouse tracking for the spotlight effect
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-3xl border border-slate-800 bg-slate-900/50 p-8 overflow-hidden"
    >
      {/* Spotlight Hover Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
          ),
        }}
      />

      <div className="relative z-10">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 border border-slate-700 group-hover:border-indigo-500/50 transition-colors">
          {service.icon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-slate-400 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Feature List */}
        <ul className="space-y-3 mb-8">
          {service.features.map((feat, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 size={16} className="text-indigo-500" />
              {feat}
            </li>
          ))}
        </ul>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {service.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={service.link}
          className="inline-flex items-center gap-2 text-white font-semibold group/link"
        >
          Explore Solution 
          <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform text-indigo-400" />
        </a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="bg-[#020617] py-24 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-4"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Solutions Tailored to <br /> 
            <span className="text-slate-500 font-light italic text-3xl md:text-4xl">Modern Businesses</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;