
interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ title, description, technologies = [], image, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {image && (
        <div className="h-48 bg-gray-200 relative">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-lg">📱 {title}</span>
          </div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Live Demo →
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 font-semibold"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
