'use client';

import { FiMail, FiMapPin, FiClock, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Phone",
      value: "+91 8409199953",
      link: "tel:8409199953",
      gradient: "from-purple-500 to-pink-500",
      bg: "from-purple-50 to-pink-50",
      text: "text-purple-600"
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      value: "reshamkri682001@gmail.com",
      link: "mailto:reshamkri682001@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      bg: "from-blue-50 to-cyan-50",
      text: "text-blue-600"
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Location",
      value: "Delhi NCR, India",
      subtitle: "Remote / Worldwide",
      gradient: "from-green-500 to-emerald-500",
      bg: "from-green-50 to-emerald-50",
      text: "text-green-600"
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Availability",
      value: "Open for opportunities",
      subtitle: "Freelance & Full-time",
      gradient: "from-orange-500 to-red-500",
      bg: "from-orange-50 to-red-50",
      text: "text-orange-600"
    }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>
        
        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group bg-gradient-to-br ${info.bg} border border-gray-100 rounded-2xl p-6 text-center transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <div className={`inline-flex p-4 bg-gradient-to-r ${info.gradient} rounded-2xl mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {info.icon}
              </div>
              <h3 className={`font-bold text-lg ${info.text} mb-2`}>{info.title}</h3>
              {info.link ? (
                <a href={info.link} className="text-gray-600 hover:text-gray-800 text-sm block font-medium">
                  {info.value}
                </a>
              ) : (
                <>
                  <p className="text-gray-700 text-sm font-medium">{info.value}</p>
                  {info.subtitle && <p className="text-gray-500 text-xs mt-1">{info.subtitle}</p>}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}