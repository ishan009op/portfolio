import { motion } from "framer-motion";

const services = [
  {
    title: "Landing Pages",
    description: "Clean, responsive, production-ready landing pages that convert visitors into leads.",
    demo: "https://your-landing-demo.com",
  },
  {
    title: "Admin Panels",
    description: "User-friendly dashboards to manage users, messages, and data securely.",
    demo: "https://your-admin-demo.com",
  },
  {
    title: "Custom Websites",
    description: "Full-stack websites built with modern technologies for startups and businesses.",
    demo: "https://your-custom-demo.com",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full bg-gray-900 py-20 px-6 md:px-20"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-fuchsia-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Services
      </motion.h2>

      {/* Service cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-tr from-fuchsia-500/20 to-cyan-400/20 rounded-xl p-6 hover:scale-105 transition-transform shadow-xl flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-fuchsia-500">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
            </div>
            {service.demo && (
              <a
                href={service.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-fuchsia-500 hover:bg-fuchsia-600 text-gray-900 font-semibold px-6 py-2 rounded-full text-center transition"
              >
                Demo
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
