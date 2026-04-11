'use client';

import { skills } from '@/data/skills';
import { FiCode } from 'react-icons/fi';

export default function SkillsSection() {
  // Group skills by category
  const languages = skills.filter(s => ["Java", "JavaScript", "TypeScript"].includes(s.name));
  const frontend = skills.filter(s => ["React.js", "Next.js", "HTML/CSS", "Bootstrap", "Tailwind CSS"].includes(s.name));
  const backend = skills.filter(s => ["Spring Boot", "Hibernate", "JSP/Servlet", "JDBC", "REST APIs"].includes(s.name));
  const database = skills.filter(s => ["MySQL"].includes(s.name));
  const tools = skills.filter(s => ["Git/GitHub", "Eclipse/VS Code"].includes(s.name));
  const concepts = skills.filter(s => ["OOP Concepts", "DBMS"].includes(s.name));

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Technical Skills
          </h2>
          <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Languages */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-2xl">💻</span> Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          
          {/* Frontend */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-2xl">🎨</span> Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {frontend.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-lg text-sm font-medium">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          
          {/* Backend */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-2xl">⚙️</span> Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {backend.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-sm font-medium">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          
          {/* Database */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-2xl">🗄️</span> Database
            </h3>
            <div className="flex flex-wrap gap-2">
              {database.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-orange-50 text-orange-600 rounded-lg text-sm font-medium">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-2xl">🛠️</span> Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          
          {/* Concepts */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-2xl">📚</span> Concepts
            </h3>
            <div className="flex flex-wrap gap-2">
              {concepts.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}