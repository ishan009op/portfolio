import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    const res=await axios.post("https://portfolio-7564.onrender.com/api/user",{
      name:Name,
      email:Email,
      message:msg
    })

    console.log(res.data)

    alert(`Message sent! \nName: ${Name}\nEmail: ${Email}\nMessage: ${msg}`);
    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <section
      id="contact"
      className="w-full bg-white text-slate-800 py-20 px-6 md:px-20"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-8 text-[#45EB28]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white border border-slate-200 rounded-xl p-8 shadow-md flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-slate-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#45EB28]"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-slate-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#45EB28]"
        />
        <textarea
          placeholder="Your Message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          required
          className="border border-slate-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#45EB28]"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-[#45EB28] text-white font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
