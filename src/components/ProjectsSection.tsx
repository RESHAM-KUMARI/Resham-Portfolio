'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import type { Project } from '@/types';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            My Projects
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's a collection of my work. Each project represents different challenges and solutions.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-500 py-10">No projects found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div 
                  className="relative h-48 bg-gray-100 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FiCode className="text-4xl text-gray-400" />
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 
                      className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-gray-600"
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* GitHub Button */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-900 transition-colors w-full justify-center"
                  >
                    <FiGithub size={16} />
                    View Code on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-5">
              {/* Image */}
              <div className="relative h-56 rounded-lg overflow-hidden mb-4 bg-gray-100">
                {selectedProject.image ? (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FiCode className="text-5xl text-gray-400" />
                  </div>
                )}
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {selectedProject.description}
              </p>
              
              {/* Features */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Technologies */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Links */}
              <div className="flex gap-3 pt-3 border-t">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-900 transition flex items-center justify-center gap-2"
                >
                  <FiGithub size={16} /> View Code
                </a>
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-50 transition flex items-center justify-center gap-2"
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}