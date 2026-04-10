'use client';

import { useEffect, useState } from 'react';
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
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {SITE_CONFIG.name}
          </span>
        </h1>
        
        <div className="text-2xl md:text-3xl text-gray-600 mb-6 h-16">
          {text}
          <span className="animate-pulse">|</span>
        </div>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          I build responsive, performant, and user-friendly web applications
          with modern technologies. 3+ years of experience in full-stack development.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="/projects">View My Work →</Button>
          <Button href="/contact" variant="outline">Contact Me</Button>
        </div>
      </div>
    </section>
  );
}