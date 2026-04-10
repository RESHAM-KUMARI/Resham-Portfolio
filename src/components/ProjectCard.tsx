import Image from 'next/image';
import { Project } from '@/types';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
             className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition">
            <FiExternalLink size={20} />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
             className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition">
            <FiGithub size={20} />
          </a>
        </div>
        {/* Placeholder image - replace with actual images */}
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-4xl">
          {project.title[0]}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map(tech => (
            <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-gray-500">+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
}