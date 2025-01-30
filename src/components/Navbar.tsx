import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, Home, Layers, Leaf, Mail, LucideIcon } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

interface NavLink {
  name: string;
  href: string;
  icon: LucideIcon;
  id: string;
  hasIndicator?: boolean;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const activeElement = navRefs.current[activeSection];
      const container = navContainerRef.current;
      
      if (activeElement && container) {
        const containerRect = container.getBoundingClientRect();
        const textElement = activeElement.querySelector('span');
        if (textElement) {
          const textRect = textElement.getBoundingClientRect();
          setIndicatorStyle({
            width: textRect.width,
            left: textRect.left - containerRect.left
          });
        }
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks: NavLink[] = [
    { name: 'Home', href: '#home', icon: Home, id: 'home' },
    { name: 'Features', href: '#features', icon: Layers, id: 'features' },
    { 
      name: 'Sustainability', 
      href: '#sustainability', 
      icon: Leaf, 
      id: 'sustainability',
      hasIndicator: true 
    },
    { name: 'Contact', href: '#contact', icon: Mail, id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/50 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-white">
            FoodChain
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div ref={navContainerRef} className="relative flex items-center">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <div key={link.name} className="relative">
                    <a
                      ref={el => navRefs.current[link.id] = el}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className={`relative text-gray-300 hover:text-white transition-colors flex items-center gap-2 px-4 py-2 group ${
                        activeSection === link.id ? 'text-white' : ''
                      }`}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                      <span>{link.name}</span>
                      {link.hasIndicator && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />
                      )}
                    </a>
                  </div>
                );
              })}
              {/* Animated underline indicator */}
              <div
                className="absolute bottom-0 h-0.5 bg-green-400 transition-all duration-300"
                style={{
                  width: `${indicatorStyle.width}px`,
                  left: `${indicatorStyle.left}px`,
                  transform: 'translateY(8px)'
                }}
              />
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-black/95 backdrop-blur-lg absolute top-20 left-0 w-full py-4 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <div key={link.name} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`relative text-gray-300 hover:text-white transition-colors flex items-center gap-2 ${
                      activeSection === link.id ? 'text-white' : ''
                    }`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                    <span>{link.name}</span>
                    {link.hasIndicator && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />
                    )}
                  </a>
                </div>
              );
            })}
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}