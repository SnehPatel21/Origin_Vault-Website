// src/components/sections/ContactSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
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
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Schedule a Demo
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-green-500/20"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Visit Us
                </h3>
                <p className="text-gray-300">
                  123 Blockchain Street<br />
                  Tech Valley, CA 94025<br />
                  United States
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Contact Info
                </h3>
                <p className="text-gray-300">
                  Email: hello@foodchain.com<br />
                  Phone: +1 (555) 123-4567<br />
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