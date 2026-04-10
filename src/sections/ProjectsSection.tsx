'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">My Projects</h1>
      <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
        Here's a collection of my work. Each project represents different challenges and solutions.
      </p>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full transition-all ${
              filter === cat 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <p className="text-center text-gray-500 py-20">No projects found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}