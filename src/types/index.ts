export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}