'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/constants';
import { FiMenu, FiX, FiHome, FiUser, FiFolder, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const router = useRouter();

  // Scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect active section only on home page
      if (pathname === '/') {
        const sections = ['home', 'about', 'projects', 'contact'];
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

  // Lock body scroll when mobile menu is open
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
        const offset = 64; // Fixed navbar height
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
    { name: "Projects", id: "projects", icon: FiFolder, action: () => handleNavigation('projects') },
    { name: "Contact", id: "contact", icon: FiMail, action: () => handleNavigation('contact') },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 h-16 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <button 
              onClick={handleHomeClick}
              className="group relative text-2xl font-bold focus:outline-none"
              aria-label="Go to home"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {SITE_CONFIG.name.split(' ')[0]}
              </span>
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
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 group ${
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    aria-label={item.name}
                  >
                    <Icon className={`text-lg transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? 'text-blue-600' : 'text-gray-500'
                    }`} />
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden relative w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-500 md:hidden ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Mobile Menu Drawer */}
        <div 
          className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-500 ease-out z-50 md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Menu
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all"
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>
            </div>
            
            {/* Mobile Navigation Items */}
            <div className="flex-1 py-8 px-6">
              <div className="space-y-2">
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
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                    >
                      <Icon className={`text-xl transition-transform duration-300 group-hover:scale-110 ${
                        isActive ? 'text-blue-600' : 'text-gray-500'
                      }`} />
                      <span>{item.name}</span>
                      {isActive && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Mobile Menu Footer */}
            <div className="p-6 border-t">
              <p className="text-xs text-center text-gray-500">
                © {new Date().getFullYear()} {SITE_CONFIG.name}
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* Fixed spacer - exactly navbar height */}
      <div className="h-16"></div>
    </>
  );
}