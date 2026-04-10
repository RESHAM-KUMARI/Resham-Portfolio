'use client';

import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <div key={skill.name} className="text-center p-4 bg-white rounded-lg shadow-md">
          <div className="text-4xl mb-2">{skill.icon}</div>
          <h3 className="font-semibold mb-2">{skill.name}</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}