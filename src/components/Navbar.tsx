'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/constants';
import { FiMenu, FiX, FiHome, FiUser, FiFolder, FiMail, FiCode } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      if (pathname === '/') {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);
    
    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 64;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const handleHomeClick = () => {
    setIsOpen(false);
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  const navItems = [
    { name: "Home", id: "home", icon: FiHome, action: handleHomeClick },
    { name: "About", id: "about", icon: FiUser, action: () => handleNavigation('about') },
    { name: "Skills", id: "skills", icon: FiCode, action: () => handleNavigation('skills') },
    { name: "Projects", id: "projects", icon: FiFolder, action: () => handleNavigation('projects') },
    { name: "Contact", id: "contact", icon: FiMail, action: () => handleNavigation('contact') },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 h-16 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <button 
              onClick={handleHomeClick}
              className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
            >
              {SITE_CONFIG.name.split(' ')[0]}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === '/' && activeSection === item.id;
                
                return (
                  <button
                    key={item.name}
                    onClick={item.action}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'text-emerald-600 bg-emerald-50'
                        : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className={`text-lg ${isActive ? 'text-emerald-600' : 'text-gray-500'}`} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 md:hidden z-40 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-out z-50 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-5 border-b border-gray-100">
            <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Menu
            </span>
            <button onClick={() => setIsOpen(false)} className="p-1 text-gray-400 hover:text-emerald-600">
              <FiX size={20} />
            </button>
          </div>
          
          <div className="flex-1 py-4 px-4">
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === '/' && activeSection === item.id;
                
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      item.action();
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-600'
                    }`}
                  >
                    <Icon className={`text-lg ${isActive ? 'text-emerald-600' : 'text-gray-500'}`} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-100">
            <p className="text-xs text-center text-gray-400">
              © {new Date().getFullYear()} {SITE_CONFIG.name}
            </p>
          </div>
        </div>
      </div>

      <div className="h-16"></div>
    </>
  );
}