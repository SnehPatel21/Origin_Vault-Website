import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Layers, Leaf, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'features', 'sustainability', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Features', href: '#features', icon: Layers },
    { name: 'Sustainability', href: '#sustainability', icon: Leaf },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#"
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            FoodChain
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.name}
                  className="relative"
                  whileHover={{ y: -2 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </button>
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="nav-indicator w-full"
                    />
                  )}
                </motion.div>
              );
            })}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-lg shadow-green-500/20"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-black/95 backdrop-blur-lg absolute top-20 left-0 w-full py-4"
            >
              <div className="flex flex-col space-y-4 px-6">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </button>
                  );
                })}
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-lg shadow-green-500/20">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}