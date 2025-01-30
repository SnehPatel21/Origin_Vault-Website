// src/components/sections/SustainabilitySection.tsx
import React from 'react';
import { Leaf, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="relative min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
              <Leaf className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">Sustainability First</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 text-center md:text-left">
              Making Food Supply Chains Sustainable
            </h2>
            <p className="text-gray-300 text-lg mb-8 text-center md:text-left">
              Our blockchain solution helps reduce food waste, optimize transportation routes, and promote sustainable farming practices through data-driven insights.
            </p>
            <img
              src="/api/placeholder/600/400"
              alt="Sustainable Farming"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img
              src="/api/placeholder/600/400"
              alt="Supply Chain Technology"
              className="rounded-lg shadow-xl mb-8 w-full"
            />
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Join the Future of Food Supply Chain
              </h3>
              <p className="text-gray-300 mb-6">
                Be part of the revolution in food traceability. Our platform connects farmers, distributors, retailers, and consumers in a transparent ecosystem.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-green-500/20"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};