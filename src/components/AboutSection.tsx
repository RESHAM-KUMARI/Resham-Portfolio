'use client';

import { FiBriefcase, FiCalendar, FiMapPin, FiAward, FiUser, FiCode, FiTrendingUp } from 'react-icons/fi';
import { SITE_CONFIG } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "MIRTH KITH KIN ONLINE ALLIANCE PRIVATE LIMITED",
      location: "Remote, Kolkata",
      period: "FEB 2026 – APR 2026",
      achievements: [
        "Developed full stack web applications with frontend and backend integration",
        "Designed responsive user interfaces using HTML, CSS, JavaScript, React.js",
        "Implemented dynamic UI components and handled backend logic",
        "Optimized application performance and improved user experience"
      ]
    },
    {
      title: "Web Developer",
      company: "MOBILOITTE TECHNOLOGIES",
      location: "Okhla Phase 1, New Delhi",
      period: "JAN 2024 – APR 2024",
      achievements: [
        "Developed and maintained React.js-based web applications",
        "Integrated REST APIs with frontend applications",
        "Built reusable components and responsive UI designs",
        "Collaborated with cross-functional teams for project delivery"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "SOFTMIND INFOTECH PRIVATE LTD",
      location: "Sector 15, Noida",
      period: "JAN 2025 – JUN 2025",
      achievements: [
        "Trained in Core Java, Advanced Java, and React.js",
        "Developed mini projects using frontend and backend technologies",
        "Implemented database connectivity using JDBC, Servlets, and MySQL",
        "Gained practical experience in building and testing web applications"
      ]
    }
  ];

  const certifications = [
    {
      name: "Java Full Stack Developer",
      organization: "4Achievers, Noida",
      period: "AUG 2023 – OCT 2024",
      details: [
        "Completed comprehensive training in Core Java (JDK 1.8), Advanced Java, and Full Stack Development",
        "Gained hands-on experience with Servlets, JDBC, Hibernate, and Spring Boot",
        "Developed responsive web applications using HTML, CSS, Bootstrap, and React.js",
        "Worked on real-time projects involving REST API integration and database connectivity (MySQL)"
      ]
    }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3">
            <span className="px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full inline-flex items-center gap-2 shadow-lg">
              <FiUser size={14} />
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get to know me, my journey, and what I bring to the table
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-6">
          
          {/* Bio Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-purple-100"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{SITE_CONFIG.name.split(' ')[0]}</span>!
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Motivated Computer Science graduate with hands-on experience in Java Full Stack Development, 
                  React.js, and REST API integration. Skilled in building responsive web applications and 
                  implementing scalable solutions. Seeking an entry-level role to apply technical skills and 
                  contribute to real-world projects.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <FiCalendar className="text-purple-600" />
                    <span className="text-gray-700">B.Tech(CSE) 2020-2024</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <FiMapPin className="text-purple-600" />
                    <span className="text-gray-700">Delhi NCR, India</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <FiCode className="text-purple-600" />
                    <span className="text-gray-700">Java | React | Spring Boot</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <span className="text-5xl">👩‍💻</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-purple-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <FiBriefcase className="text-white" size={20} />
              </div>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Work Experience</span>
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="border-l-4 border-purple-500 pl-4 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 p-4 rounded-r-lg transition-all">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">{exp.title}</h4>
                    <span className="text-sm text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-2 flex items-center gap-1">
                    <FiMapPin size={14} className="text-purple-500" /> {exp.location}
                  </p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certification Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-purple-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <FiAward className="text-white" size={20} />
              </div>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Certifications & Training</span>
            </h3>
            
            {certifications.map((cert, idx) => (
              <div key={idx} className="border-l-4 border-pink-500 pl-4 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 p-4 rounded-r-lg transition-all">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">{cert.name}</h4>
                  <span className="text-sm text-pink-600 font-medium bg-pink-100 px-2 py-1 rounded-full">
                    {cert.period}
                  </span>
                </div>
                <p className="text-gray-600 font-medium mb-2">{cert.organization}</p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  {cert.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Education Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-purple-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <FiCalendar className="text-white" size={20} />
              </div>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Education</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                  <FiTrendingUp className="text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">B.Tech (CSE)</h4>
                <p className="text-gray-600 text-sm">MAHARISHI DAYANAND UNIVERSITY</p>
                <p className="text-purple-600 text-xs mt-1 font-medium">2020 - 2024</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                  <FiCalendar className="text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">XII (PCM)</h4>
                <p className="text-gray-600 text-sm">G.H SCHOOL DR.VKS.COLLEGE</p>
                <p className="text-purple-600 text-xs mt-1 font-medium">2017 - 2019</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                  <FiCalendar className="text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">X (PCM)</h4>
                <p className="text-gray-600 text-sm">G.H SCHOOL DR.VKS.COLLEGE</p>
                <p className="text-purple-600 text-xs mt-1 font-medium">2016 - 2017</p>
              </div>
            </div>
          </motion.div>
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