'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';
import { FiGithub, FiExternalLink, FiFolder, FiEye, FiCode, FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Color schemes
  const colors = {
    primary: {
      from: 'from-purple-600',
      to: 'to-pink-600',
      solid: 'bg-gradient-to-r from-purple-600 to-pink-600',
      light: 'from-purple-50 to-pink-50',
      text: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      hover: 'hover:from-purple-700 hover:to-pink-700'
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 uppercase tracking-wider">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Crafting digital experiences with modern technologies and creative solutions
          </p>
        </motion.div>
        
        {/* Filter Buttons - Modern Design */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setVisibleProjects(6);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                filter === cat 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        {displayedProjects.length === 0 ? (
          <p className="text-center text-gray-500 py-10">No projects found.</p>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    
                    {/* Card Header with Gradient */}
                    <div className="relative h-48 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                      <div className="absolute top-4 right-4">
                        <span className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <FiFolder className="text-white text-5xl opacity-20 group-hover:opacity-30 transition-all duration-300" />
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="text-xs px-2.5 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 rounded-full font-medium">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* Buttons */}
                      <div className="flex gap-3 mt-auto">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-purple-200 text-purple-600 rounded-xl text-sm font-semibold hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent transition-all duration-300"
                        >
                          <FiEye size={16} />
                          Preview
                        </button>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300"
                        >
                          <FiCode size={16} />
                          Github
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Load More Button */}
            {hasMore && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center mt-12"
              >
                <button
                  onClick={loadMore}
                  className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Explore More Projects</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* Project Details Modal - Modern Design */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white rounded-t-2xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                    <span className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full inline-block">
                      {selectedProject.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-white/80 hover:text-white text-3xl leading-none transition-colors"
                  >
                    ×
                  </button>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                {/* Description */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 text-lg flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
                    Description
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>
                </div>
                
                {/* Key Features */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3 text-lg flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
                      Key Features
                    </h4>
                    <div className="grid gap-2">
                      {selectedProject.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 text-lg flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FiGithub size={18} /> View Code
                  </a>
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-5 py-3 border-2 border-purple-200 text-purple-600 rounded-xl text-sm font-semibold hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FiExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}