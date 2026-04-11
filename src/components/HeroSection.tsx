'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiDownload } from 'react-icons/fi';

export default function HeroSection() {
  const [text, setText] = useState('');
  const fullText = SITE_CONFIG.title;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 py-12">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Badge */}
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            👋 Available for Work
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-800">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Resham Kumari
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-4 h-16 font-medium">
            {text}
            <span className="animate-pulse text-blue-600">|</span>
          </div>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-lg mb-6 leading-relaxed">
            Motivated Computer Science graduate with hands-on experience in Java Full Stack Development, 
            React.js, and REST API integration. Skilled in building responsive web applications and 
            implementing scalable solutions.
          </p>
          
          {/* Location and Contact Info */}
          <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <FiMapPin className="text-blue-600" />
              <span>Delhi NCR, India</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <FiMail className="text-blue-600" />
              <span>reshamkri682001@gmail.com</span>
            </div>
          </div>
          
          {/* Social Links and Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
            <div className="flex gap-3">
              <a 
                href="https://github.com/RESHAM-KUMARI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition-all hover:scale-105"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/resham-kumari-99619a21b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="mailto:reshamkri682001@gmail.com"
                className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all hover:scale-105"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
            
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              <FiDownload size={18} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side - Image (Fixed to show full image) */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src="/images/reshampro.jpeg"
              alt="Resham Kumari"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}