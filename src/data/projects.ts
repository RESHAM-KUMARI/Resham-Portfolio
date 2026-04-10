import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with cart and payments",
    longDescription: "A complete e-commerce solution built with Next.js 14, featuring product catalog, shopping cart, user authentication, and Stripe payment integration. Includes admin dashboard for product management.",
    image: "/images/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Prisma", "PostgreSQL"],
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Productivity app with real-time updates",
    longDescription: "Collaborative task management tool with drag-and-drop interface, real-time updates using WebSockets, team workspaces, and detailed analytics dashboard.",
    image: "/images/project2.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind"],
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com/yourusername/taskmanager",
    category: "Full Stack",
    featured: true
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "Generate images using AI",
    longDescription: "Web app that uses OpenAI's DALL-E API to generate unique images from text prompts. Includes gallery, download options, and prompt history.",
    image: "/images/project3.jpg",
    technologies: ["Next.js", "OpenAI API", "Tailwind", "TypeScript"],
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com/yourusername/ai-image",
    category: "AI/ML",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern developer portfolio",
    longDescription: "Clean, responsive portfolio website with dark mode, smooth animations, and optimized performance. Built with Next.js and Tailwind CSS.",
    image: "/images/project4.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    liveUrl: "https://yourportfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    category: "Frontend",
    featured: true
  }
];