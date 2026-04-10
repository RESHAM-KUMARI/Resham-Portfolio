
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import { SITE_CONFIG } from '@/lib/constants';

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
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resham
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-600 mb-4 h-16">
            {text}
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-lg text-gray-600 max-w-lg mb-8">
            I build responsive, performant, and user-friendly web applications
            with modern technologies. 3+ years of experience in full-stack development.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <Button href="/projects">View My Work →</Button>
            <Button href="/contact" variant="outline">Contact Me</Button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-tr from-blue-500 to-purple-500">
            <Image
              src="/images/reshampro.jpeg"
              alt="Resham"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
