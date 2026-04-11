'use client';

import { FiMail, FiMapPin, FiClock, FiPhone } from 'react-icons/fi';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Get In Touch
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's work together!
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          
          {/* Phone */}
          <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
            <div className="inline-flex p-3 bg-gray-100 rounded-full mb-4">
              <FiPhone className="text-2xl text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
            <a href="tel:8409199953" className="text-gray-600 hover:text-gray-800 text-sm">
              8409199953
            </a>
          </div>
          
          {/* Email */}
          <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
            <div className="inline-flex p-3 bg-gray-100 rounded-full mb-4">
              <FiMail className="text-2xl text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
            <a href="mailto:reshamkri682001@gmail.com" className="text-gray-600 hover:text-gray-800 text-sm break-all">
              reshamkri682001@gmail.com
            </a>
          </div>
          
          {/* Location */}
          <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
            <div className="inline-flex p-3 bg-gray-100 rounded-full mb-4">
              <FiMapPin className="text-2xl text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600 text-sm">Delhi NCR, India</p>
            <p className="text-gray-500 text-xs mt-1">Remote / Available Worldwide</p>
          </div>
          
          {/* Availability */}
          <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
            <div className="inline-flex p-3 bg-gray-100 rounded-full mb-4">
              <FiClock className="text-2xl text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Availability</h3>
            <p className="text-gray-600 text-sm">Open for freelance</p>
            <p className="text-gray-600 text-sm">& full-time opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}