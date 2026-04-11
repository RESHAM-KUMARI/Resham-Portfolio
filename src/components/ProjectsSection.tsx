'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';
import { FiGithub, FiExternalLink, FiFolder, FiEye } from 'react-icons/fi';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);
  
  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMore = visibleProjects < filteredProjects.length;

  const loadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            My Projects
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-4"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Here's a collection of my work. Each project represents different challenges and solutions.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setVisibleProjects(6);
              }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        {displayedProjects.length === 0 ? (
          <p className="text-center text-gray-500 py-10">No projects found.</p>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="p-5 flex flex-col h-full">
                    {/* Icon and Title */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <FiFolder className="text-blue-500 text-xl" />
                        <h3 className="text-lg font-semibold text-gray-800">
                          {project.title}
                        </h3>
                      </div>
                      <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 text-gray-600 rounded-full text-sm hover:bg-gray-50 transition-colors"
                      >
                        <FiEye size={14} />
                        View
                      </button>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-green-500 text-white rounded-full text-sm hover:bg-gray-900 transition-colors"
                      >
                        <FiGithub size={14} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            {hasMore && (
              <div className="text-center mt-10">
                <button
                  onClick={loadMore}
                  className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
                >
                  View More Projects
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center rounded-t-xl">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{selectedProject.title}</h3>
                <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full mt-1 inline-block">
                  {selectedProject.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-5">
              {/* Full Description */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
              </div>
              
              {/* Key Features */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-500 text-sm">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Technologies */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
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
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-full text-sm hover:bg-gray-900 transition flex items-center justify-center gap-2"
                >
                  <FiGithub size={16} /> Code
                </a>
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-600 rounded-full text-sm hover:bg-gray-50 transition flex items-center justify-center gap-2"
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