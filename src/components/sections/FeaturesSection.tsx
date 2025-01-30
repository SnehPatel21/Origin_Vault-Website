// src/components/sections/FeaturesSection.tsx
import React from 'react';
import { Scan, Shield, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Scan className="w-8 h-8 text-green-400" />,
    title: "Real-time Tracking",
    description: "Monitor your food's journey from farm to table with complete transparency and real-time updates."
  },
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: "Immutable Records",
    description: "Blockchain technology ensures that all data is secure, tamper-proof, and permanently recorded."
  },
  {
    icon: <LineChart className="w-8 h-8 text-green-400" />,
    title: "Supply Chain Analytics",
    description: "Gain valuable insights into your supply chain with advanced analytics and reporting tools."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative min-h-screen py-24">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Why Choose Our Platform?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-xl bg-white/5 backdrop-blur-lg"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};