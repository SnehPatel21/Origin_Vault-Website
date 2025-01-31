import React, { useState, useEffect, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { Navbar } from './components/Navbar';
import { Cursor } from './components/Cursor';
import { Loader } from './components/Loader';
import { AnimatePresence } from 'framer-motion';

// Import sections
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { SustainabilitySection } from './components/sections/SustainabilitySection';
import { ContactSection } from './components/sections/ContactSection';

// ScrollManager to handle both scroll tracking and programmatic scrolling
const ScrollManager = ({ onScroll, scrollTo }: { 
  onScroll: (offset: number) => void;
  scrollTo: number | null;
}) => {
  const scroll = useScroll();

  useEffect(() => {
    if (scrollTo !== null) {
      scroll.el.scrollTo({ 
        top: scrollTo * scroll.el.scrollHeight, 
        behavior: 'smooth' 
      });
    }
  }, [scrollTo]);

  useFrame(() => {
    onScroll(scroll.offset);
  });

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');
  const [targetScroll, setTargetScroll] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = useCallback((offset: number) => {
    const sections = ['home', 'features', 'sustainability', 'contact'];
    const index = Math.round(offset * sections.length); // More precise rounding
    setCurrentSection(sections[Math.min(index, sections.length - 1)]);
  }, []);

  const handleNavigation = useCallback((section: string) => {
    const sections = ['home', 'features', 'sustainability', 'contact'];
    const index = sections.indexOf(section);
    if (index !== -1) {
      const targetOffset = index / sections.length; // Adjust offset calculation
      setTargetScroll(targetOffset);
      setTimeout(() => setTargetScroll(null), 300); // Reset targetScroll after animation
    }
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

      <div className="relative min-h-screen">
        <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-green-900" />
        <Cursor />
        <Navbar activeSection={currentSection} onNavigate={handleNavigation} />

        <div className="fixed inset-0">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ScrollControls pages={4} distance={1} damping={0.2}>
              <ScrollManager onScroll={handleScroll} scrollTo={targetScroll} />
              <Scene />
              <Scroll />
              <Scroll html style={{ width: '100%' }}>
                <div className="w-full mx-auto max-w-[1280px]">
                  <div className="container mx-auto px-6">
                    <HeroSection />
                    <FeaturesSection />
                    <SustainabilitySection />
                    <ContactSection />
                  </div>
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