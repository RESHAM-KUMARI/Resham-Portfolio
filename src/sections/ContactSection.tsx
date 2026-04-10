'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import InputField from '@/components/InputField';
import { SITE_CONFIG } from '@/lib/constants';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get In Touch</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Have a project in mind? I'd love to hear about it. Let's work together!
      </p>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
            <FiMail className="text-2xl text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-600 hover:text-blue-600">
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
            <FiMapPin className="text-2xl text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600">Remote / Available Worldwide</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
            <FiPhone className="text-2xl text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold">Availability</h3>
              <p className="text-gray-600">Open for freelance & full-time opportunities</p>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <InputField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            textarea
          />
          
          <Button type="submit" className="w-full">
            {status === 'loading' ? 'Sending...' : 'Send Message →'}
          </Button>
          
          {status === 'success' && (
            <p className="text-green-600 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}