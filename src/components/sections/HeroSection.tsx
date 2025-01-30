// src/components/sections/HeroSection.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Track Your Food's Journey <span className="text-green-400">on the <br />Blockchain</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Ensuring transparency, authenticity, and safety in the food supply chain<br /> through cutting-edge blockchain technology.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-green-500/20"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};