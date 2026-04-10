'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/constants';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add scroll effect directly in component
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const isHomePage = pathname === '/';

  const navItems = [
    { name: "Home", action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: "About", action: () => scrollToSection('about') },
    { name: "Projects", action: () => scrollToSection('projects') },
    { name: "Contact", action: () => scrollToSection('contact') },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            {SITE_CONFIG.name.split(' ')[0]}
          </button>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiMenu /> : <FiX />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}