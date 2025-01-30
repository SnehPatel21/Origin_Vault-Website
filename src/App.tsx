import React, { useState, useEffect, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = useCallback(() => {
    const sections = ['home', 'features', 'sustainability', 'contact'];
    const scrollPosition = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const currentIndex = Math.floor(scrollPosition / windowHeight);
    const currentSection = sections[currentIndex] || sections[sections.length - 1];
    setCurrentSection(currentSection);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>
      
      <div className="relative min-h-screen">
        {/* Fixed Background */}
        <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-green-900" />
        
        <div className="fixed inset-0">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ScrollControls pages={4} damping={0.2}>
              <Scene />
              <Scroll>
                <></>
              </Scroll>
              <Scroll html style={{ width: '100%' }}>
                <div className="absolute top-0 left-0 w-full">
                  {/* Fixed Elements */}
                  <Cursor />
                  <Navbar activeSection={currentSection} />

                  {/* Content Sections */}
                  <HeroSection />
                  <FeaturesSection />
                  <SustainabilitySection />
                  <ContactSection />
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