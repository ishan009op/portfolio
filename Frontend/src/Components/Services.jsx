import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Code2, Layout, Rocket } from "lucide-react";

const services = [
  {
    title: "Landing Page",
    desc: "Modern, fast and responsive page for your brand.",
    price: "Starting at ₹3,000",
    icon: Layout,
  },
  {
    title: "Business Website",
    desc: "Multi-page website with clean UI and essential features.",
    price: "Starting at ₹6,000",
    icon: Code2,
  },
  {
    title: "Full Stack App",
    desc: "Complete MERN application with backend and database.",
    price: "Starting at ₹12,000",
    icon: Rocket,
  },
];

const Services = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });

  return (
    <section
      id="services"
      ref={ref}
      className="bg-black text-white py-32 px-6"
    >
      <div className="max-w-6xl mx-auto relative">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-24 text-center">
          Services & Pricing
        </h2>

        {/* Timeline container */}
        <div className="relative">

          {/* Base line */}
          <div className="absolute left-1/2 top-0 w-[3px] h-full bg-white/10 -translate-x-1/2" />

          {/* Animated progress line */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-1/2 top-0 w-[3px] h-full bg-white origin-top -translate-x-1/2 shadow-[0_0_20px_rgba(255,255,255,0.7)]"
          />

          {/* Items */}
          <div className="flex flex-col gap-32">

            {services.map((service, index) => {
              const isLeft = index % 2 === 0;

              // Per item animation range
              const start = index * 0.3;
              const end = start + 0.3;

              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0.3, 1]
              );

              const scale = useTransform(
                scrollYProgress,
                [start, end],
                [0.9, 1]
              );

              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  style={{ opacity, scale }}
                  className={`flex items-center justify-between ${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  }`}
                >

                  {/* TEXT */}
                  <div className="w-[45%]">
                    <h3 className="text-2xl font-semibold">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 mt-2">
                      {service.desc}
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                      {service.price}
                    </p>
                  </div>

                  {/* ICON */}
                  <motion.div
                    style={{ scale }}
                    className="relative z-10 bg-black border border-white/20 p-4 rounded-full"
                  >
                    <Icon size={26} className="text-blue-500" />

                    {/* Glow when active */}
                    <motion.div
                      style={{ opacity }}
                      className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"
                    />
                  </motion.div>

                  {/* Empty side */}
                  <div className="w-[45%]" />

                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;