import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return alert("Please fill all fields");

    try {
      setLoading(true);
      const res = await axios.post(
        "https://portfolio-7564.onrender.com/api/user", // replace with your contact endpoint
        { name, email, message }
      );

      setSuccess("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-gray-900 text-gray-100 py-20 px-6 md:px-20"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-fuchsia-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Buttons */}
        <motion.div
          className="flex flex-col gap-4 justify-center items-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-gray-300">
            Prefer direct contact? Click below:
          </p>
          <div className="flex gap-4">
          <a
            href="mailto:developer.ishan@example.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 transition font-semibold"
          >
            <FaEnvelope className="text-gray-900" /> Email Me
          </a>
          <a
            href="https://instagram.com/developer_ishan09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-400 hover:bg-emerald-500 transition font-semibold text-gray-900"
          >
            <FaInstagram /> Instagram
          </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-xl space-y-4 shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none resize-none"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 text-gray-900 font-semibold transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && <p className="text-green-400">{success}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
