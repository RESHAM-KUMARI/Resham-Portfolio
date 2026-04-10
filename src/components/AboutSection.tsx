import Button from '@/components/Button';
import Skills from '@/components/Skills';
import { SITE_CONFIG } from '@/lib/constants';

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h1>
      
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            Hi! I'm {SITE_CONFIG.name}, a passionate Full Stack Developer with 3+ years of experience
            building web applications that solve real-world problems.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">My Journey</h2>
          <p>
            I started coding in college and fell in love with creating things for the web. 
            Since then, I've worked with startups, agencies, and freelance clients to deliver 
            high-quality applications.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Skills & Technologies</h2>
          <Skills />
          
          <h2 className="text-2xl font-bold mt-8 mb-4">What I Do</h2>
          <ul>
            <li>Full-stack web development with React/Next.js</li>
            <li>Building RESTful APIs and backend services</li>
            <li>Database design and optimization</li>
            <li>Responsive and accessible UI development</li>
            <li>Performance optimization and SEO</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Beyond Coding</h2>
          <p>
            When I'm not coding, you'll find me contributing to open source, writing tech articles,
            or exploring new technologies.
          </p>
        </div>
        
        <div className="mt-10 text-center">
          <Button href="/resume.pdf" variant="outline">
            Download Resume →
          </Button>
        </div>
      </div>
    </div>
  );
}