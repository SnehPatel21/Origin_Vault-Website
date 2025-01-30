import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Scene } from './components/Scene';
import { Navbar } from './components/Navbar';
import { Cursor } from './components/Cursor';
import { Loader } from './components/Loader';
import { Scan, Shield, LineChart, ArrowRight, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-green-900">
        <Cursor />
        <Navbar />
        
        {/* 3D Background */}
        <div className="fixed inset-0" style={{ background: 'transparent' }}>
          <Canvas camera={{ position: [0, 0, 8] }} style={{ background: 'transparent' }}>
            <ScrollControls pages={3} damping={0.1}>
              <Scene />
              <Scroll html>
                {/* Content */}
                <div className="relative">
                  {/* Hero Section */}
                  <section id="home" className="min-h-screen flex items-center">
                    <div className="container mx-auto px-6 pt-20">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                      >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                          Track Your Food's Journey
                          <span className="text-green-400"> on the Blockchain</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-12">
                          Ensuring transparency, authenticity, and safety in the food supply chain through cutting-edge blockchain technology.
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-green-500/20"
                        >
                          Get Started <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </section>

                  {/* Features Section */}
                  <section id="features" className="min-h-screen py-24 bg-black/30 backdrop-blur-lg">
                    <div className="container mx-auto px-6">
                      <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center text-white mb-16"
                      >
                        Why Choose Our Platform?
                      </motion.h2>
                      <div className="grid md:grid-cols-3 gap-12">
                        {[
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
                        ].map((feature, index) => (
                          <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 rounded-xl bg-white/5 backdrop-blur-lg"
                          >
                            <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                              {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Sustainability Section */}
                  <section id="sustainability" className="min-h-screen py-24">
                    <div className="container mx-auto px-6">
                      <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="flex-1"
                        >
                          <div className="flex items-center gap-2 mb-6">
                            <Leaf className="w-6 h-6 text-green-400" />
                            <span className="text-green-400 font-semibold">Sustainability First</span>
                          </div>
                          <h2 className="text-4xl font-bold text-white mb-6">
                            Making Food Supply Chains Sustainable
                          </h2>
                          <p className="text-gray-300 text-lg mb-8">
                            Our blockchain solution helps reduce food waste, optimize transportation routes, and promote sustainable farming practices through data-driven insights.
                          </p>
                          <motion.img
                            whileHover={{ scale: 1.02 }}
                            src="https://images.unsplash.com/photo-1620200423727-8127f75d4181?auto=format&fit=crop&q=80&w=1200"
                            alt="Sustainable Farming"
                            className="rounded-lg shadow-xl"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="flex-1"
                        >
                          <motion.img
                            whileHover={{ scale: 1.02 }}
                            src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&q=80&w=1200"
                            alt="Supply Chain Technology"
                            className="rounded-lg shadow-xl mb-8"
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
                              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-green-500/20"
                            >
                              Learn More <ArrowRight className="w-5 h-5" />
                            </motion.button>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </section>
                </div>
              </Scroll>
            </ScrollControls>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;