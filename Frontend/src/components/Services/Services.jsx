import { motion } from "framer-motion";

const services = [
  {
    title: "Landing Pages",
    description:
      "Clean, responsive, production-ready landing pages that convert visitors into leads.",
    demo: "https://demo-landing-page.com",
  },
  {
    title: "Admin Panels",
    description:
      "User-friendly dashboards to manage users, messages, and data securely.",
    demo: "https://demo-admin-panel.com",
  },
  {
    title: "Full-Stack Websites",
    description:
      "Complete websites built with modern technologies for startups and businesses.",
    demo: "https://demo-fullstack.com",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full bg-white text-slate-800 py-20 px-6 md:px-20"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-[#45EB28]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Services
      </motion.h2>

      {/* Service Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-md hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-slate-700 mb-4">{service.description}</p>
            <a
              href={service.demo}
              target="_blank"
              className="inline-block px-4 py-2 rounded-full border border-[#45EB28] text-[#45EB28] font-medium hover:bg-[#45EB28] hover:text-white transition"
            >
              View Demo
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
