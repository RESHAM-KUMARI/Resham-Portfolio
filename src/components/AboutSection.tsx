'use client';

import { FiBriefcase, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import { SITE_CONFIG } from '@/lib/constants';

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
    <section id="about" className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Get to know me, my journey, and what I bring to the table
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          
          {/* Bio Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Hi, I'm {SITE_CONFIG.name.split(' ')[0]}!</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Motivated Computer Science graduate with hands-on experience in Java Full Stack Development, 
                  React.js, and REST API integration. Skilled in building responsive web applications and 
                  implementing scalable solutions. Seeking an entry-level role to apply technical skills and 
                  contribute to real-world projects.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-blue-500" />
                    <span>B.Tech(CSE) 2020-2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-blue-500" />
                    <span>Delhi NCR, India</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-5xl">👩‍💻</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FiBriefcase className="text-blue-500" />
              Work Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4 hover:bg-gray-50 p-4 rounded-r-lg transition-colors">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">{exp.title}</h4>
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-2 flex items-center gap-1">
                    <FiMapPin size={14} /> {exp.location}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certification Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FiAward className="text-blue-500" />
              Certifications & Training
            </h3>
            
            {certifications.map((cert, idx) => (
              <div key={idx} className="border-l-4 border-purple-500 pl-4 hover:bg-gray-50 p-4 rounded-r-lg transition-colors">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">{cert.name}</h4>
                  <span className="text-sm text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded">
                    {cert.period}
                  </span>
                </div>
                <p className="text-gray-600 font-medium mb-2">{cert.organization}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  {cert.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FiCalendar className="text-blue-500" />
              Education
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-800">B.Tech (CSE)</h4>
                <p className="text-gray-600 text-sm">MAHARISHI DAYANAND UNIVERSITY</p>
                <p className="text-gray-500 text-sm">2020 - 2024</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-800">XII (PCM)</h4>
                <p className="text-gray-600 text-sm">G.H SCHOOL DR.VKS.COLLEGE</p>
                <p className="text-gray-500 text-sm">2017 - 2019</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-800">XI (PCM)</h4>
                <p className="text-gray-600 text-sm">G.H SCHOOL DR.VKS.COLLEGE</p>
                <p className="text-gray-500 text-sm">2016 - 2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}