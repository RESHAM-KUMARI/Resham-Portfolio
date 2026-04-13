'use client';

import { skills } from '@/data/skills';
import { FiCode, FiMonitor, FiServer, FiDatabase, FiTool, FiBook, FiCpu, FiZap, FiActivity } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  // Group skills by category
  const languages = skills.filter(s => ["Java", "JavaScript", "TypeScript"].includes(s.name));
  const frontend = skills.filter(s => ["React.js", "Next.js", "HTML/CSS", "Bootstrap", "Tailwind CSS"].includes(s.name));
  const backend = skills.filter(s => ["Spring Boot", "Hibernate", "JSP/Servlet", "JDBC", "REST APIs"].includes(s.name));
  const database = skills.filter(s => ["MySQL"].includes(s.name));
  const tools = skills.filter(s => ["Git/GitHub", "Eclipse/VS Code"].includes(s.name));
  const concepts = skills.filter(s => ["OOP Concepts", "DBMS"].includes(s.name));
  
  // AI Skills - Simple
  const aiSkills = [
    { name: "Machine Learning" },
    { name: "Deep Learning" },
    { name: "Natural Language Processing" },
    { name: "Computer Vision" },
    { name: "Python for AI" }
  ];

  const skillCategories = [
    {
      title: "Languages",
      icon: <FiCode size={24} />,
      skills: languages,
      gradient: "from-purple-500 to-pink-500",
      bg: "from-purple-50 to-pink-50",
      text: "text-purple-600",
      iconBg: "bg-purple-100",
      badge: "bg-purple-100 text-purple-700"
    },
    {
      title: "Frontend",
      icon: <FiMonitor size={24} />,
      skills: frontend,
      gradient: "from-blue-500 to-cyan-500",
      bg: "from-blue-50 to-cyan-50",
      text: "text-blue-600",
      iconBg: "bg-blue-100",
      badge: "bg-blue-100 text-blue-700"
    },
    {
      title: "Backend",
      icon: <FiServer size={24} />,
      skills: backend,
      gradient: "from-green-500 to-emerald-500",
      bg: "from-green-50 to-emerald-50",
      text: "text-green-600",
      iconBg: "bg-green-100",
      badge: "bg-green-100 text-green-700"
    },
    {
      title: "Database",
      icon: <FiDatabase size={24} />,
      skills: database,
      gradient: "from-orange-500 to-red-500",
      bg: "from-orange-50 to-red-50",
      text: "text-orange-600",
      iconBg: "bg-orange-100",
      badge: "bg-orange-100 text-orange-700"
    },
    {
      title: "AI & ML",
      icon: <FiActivity size={24} />,
      skills: aiSkills,
      gradient: "from-violet-500 to-purple-600",
      bg: "from-violet-50 to-purple-50",
      text: "text-violet-600",
      iconBg: "bg-violet-100",
      badge: "bg-violet-100 text-violet-700"
    },
    {
      title: "Tools",
      icon: <FiTool size={24} />,
      skills: tools,
      gradient: "from-teal-500 to-green-500",
      bg: "from-teal-50 to-green-50",
      text: "text-teal-600",
      iconBg: "bg-teal-100",
      badge: "bg-teal-100 text-teal-700"
    },
    {
      title: "Concepts",
      icon: <FiBook size={24} />,
      skills: concepts,
      gradient: "from-indigo-500 to-purple-500",
      bg: "from-indigo-50 to-purple-50",
      text: "text-indigo-600",
      iconBg: "bg-indigo-100",
      badge: "bg-indigo-100 text-indigo-700"
    }
  ];

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Animated Gradient Background */}
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
          <div className="inline-block mb-3">
            <span className="px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full inline-flex items-center gap-2 shadow-lg">
              <FiCpu size={14} />
              My Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Technologies and tools I work with to build amazing products
          </p>
        </motion.div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 h-full`}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 + skillIdx * 0.05 }}
                      className={`px-3 py-1.5 ${category.badge} rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default shadow-sm`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Level Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-purple-100">
            <FiZap className="text-purple-500" />
            <span className="text-gray-700">Always learning & improving my skills</span>
            <FiCode className="text-pink-500" />
          </div>
        </motion.div>
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