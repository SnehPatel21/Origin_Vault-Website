// src/components/sections/ContactSection.tsx
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setMessage("");

    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      console.error("Missing EmailJS credentials in .env file!");
      setMessage("Email service is not configured properly. ❌");
      setIsSending(false);
      return;
    }

    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log("EmailJS Response:", response);
      setMessage("Message sent successfully! ✅");
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setMessage("Failed to send message. ❌ Check console for details.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-24">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-gray-300 mb-12 text-center">
            Join the growing network of businesses using FoodChain to ensure transparency and sustainability.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-lg p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">Schedule a Demo</h3>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <textarea
                  name="message"
                  required
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  disabled={isSending}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all shadow-lg ${
                    isSending ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white shadow-green-500/20"
                  }`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
              {message && <p className="mt-4 text-center text-white">{message}</p>}
            </motion.div>

            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-lg p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
                <p className="text-gray-300">
                  Email: chauhanyuvraj666@gmail.com<br />
                  Phone: +91 7228061101<br />
                  Hours: Mon-Fri 9:00-18:00
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
