'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';
import { 
  FiGithub, 
  FiExternalLink, 
  FiFolder, 
  FiEye, 
  FiCode, 
  FiArrowRight, 
  FiGrid, 
  FiCpu,
  FiTrendingUp, 
  FiHeart,
  FiStar,
  FiZap
} from 'react-icons/fi';
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

  // Different gradient colors for cards
  const cardGradients = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500',
    'from-yellow-500 to-orange-500',
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Colorful Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-20 -right-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block mb-2">
            <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full inline-flex items-center gap-1 shadow-lg">
              <FiStar className="text-yellow-300" size={12} />
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 mx-auto mb-3 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">
            Crafting unique digital experiences with passion and creativity
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-1.5 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setVisibleProjects(6);
              }}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid - Smaller Cards */}
        {displayedProjects.length === 0 ? (
          <p className="text-center text-gray-400 py-10">No projects found.</p>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 h-full flex flex-col">
                    
                    {/* Card Header - Smaller */}
                    <div className={`relative h-24 bg-gradient-to-r ${cardGradients[index % cardGradients.length]} overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                      <div className="absolute top-2 right-2">
                        <span className="text-[10px] px-1.5 py-0.5 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <FiFolder className="text-white/30 text-2xl group-hover:text-white/50 transition-all duration-300" />
                      </div>
                      <div className="absolute top-2 left-2">
                        <FiZap className="text-white/20 text-sm" />
                      </div>
                    </div>
                    
                    {/* Card Content - Compact */}
                    <div className="p-3 flex flex-col flex-grow">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-sm font-bold text-white line-clamp-1">
                          {project.title}
                        </h3>
                        <FiTrendingUp size={12} className="text-gray-300 group-hover:text-yellow-400 transition-colors" />
                      </div>
                      
                      <p className="text-gray-200 text-[11px] mb-2 line-clamp-2 flex-grow leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Technologies - Smaller */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="text-[9px] px-1.5 py-0.5 bg-white/20 text-white rounded-full font-medium">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-[9px] px-1.5 py-0.5 bg-white/10 text-gray-300 rounded-full font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* Buttons - Smaller */}
                      <div className="flex gap-1.5 mt-auto">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 bg-white/20 text-white rounded-lg text-[10px] font-semibold hover:bg-white/30 transition-all duration-300"
                        >
                          <FiEye size={10} />
                          Preview
                        </button>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 bg-white/20 text-white rounded-lg text-[10px] font-semibold hover:bg-white/30 transition-all duration-300"
                        >
                          <FiCode size={10} />
                          Code
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
                className="text-center mt-8"
              >
                <button
                  onClick={loadMore}
                  className="group inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Load More</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={12} />
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* Modal - Smaller */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-4 text-white rounded-t-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{selectedProject.title}</h3>
                    <span className="text-[10px] px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full inline-block">
                      {selectedProject.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-white/80 hover:text-white text-2xl leading-none transition-colors w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20"
                  >
                    ×
                  </button>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="p-4">
                <div className="mb-4">
                  <h4 className="font-semibold text-purple-300 mb-1 text-xs flex items-center gap-1">
                    <FiStar className="text-yellow-400" size={12} />
                    Description
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>
                </div>
                
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-pink-300 mb-1 text-xs flex items-center gap-1">
                      <FiHeart className="text-pink-400" size={12} />
                      Key Features
                    </h4>
                    <div className="grid gap-1.5">
                      {selectedProject.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-gray-300 text-xs">
                          <div className="w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-1"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mb-4">
                  <h4 className="font-semibold text-cyan-300 mb-1 text-xs flex items-center gap-1">
                    <FiCpu className="text-cyan-400" size={12} />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.technologies.map((tech: string, idx: number) => (
                      <span key={idx} className="text-[10px] px-1.5 py-0.5 bg-white/10 text-cyan-300 rounded-full font-medium border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-3 border-t border-white/10">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-1.5 bg-white/10 text-white rounded-lg text-xs font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-1"
                  >
                    <FiGithub size={12} /> Code
                  </a>
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-xs font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1"
                    >
                      <FiExternalLink size={12} /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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