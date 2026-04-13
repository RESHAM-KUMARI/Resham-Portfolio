'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/constants';
import { FiMenu, FiX, FiHome, FiUser, FiFolder, FiMail, FiCode, FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

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
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
            : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button 
              onClick={handleHomeClick}
              className="group relative text-2xl font-bold"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
                {SITE_CONFIG.name.split(' ')[0]}
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === '/' && activeSection === item.id;
                
                return (
                  <button
                    key={item.name}
                    onClick={item.action}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden group ${
                      isActive
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl"></div>
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/0 via-indigo-50/50 to-indigo-50/0 dark:from-indigo-900/0 dark:via-indigo-900/20 dark:to-indigo-900/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                    
                    <Icon className={`relative text-lg transition-all duration-300 ${
                      isActive 
                        ? 'text-indigo-600 dark:text-indigo-400' 
                        : 'text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
                    }`} />
                    <span className="relative">{item.name}</span>
                  </button>
                );
              })}
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="ml-2 p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-md transition-all duration-500 md:hidden z-40 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-500 ease-out z-50 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Menu
            </span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 rounded-xl text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <FiX size={22} />
            </button>
          </div>
          
          {/* Navigation Items */}
          <div className="flex-1 py-6 px-4">
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
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                  >
                    <Icon className={`text-xl transition-all duration-300 ${
                      isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'
                    }`} />
                    <span>{item.name}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Theme Toggle in Mobile */}
          <div className="p-4 border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <span className="text-sm font-medium">Switch Theme</span>
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
          
          {/* Footer */}
          <div className="p-6 border-t border-gray-100 dark:border-gray-800">
            <p className="text-xs text-center text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} {SITE_CONFIG.name}
            </p>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-16"></div>
    </>
  );
}