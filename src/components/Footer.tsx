import { SITE_CONFIG } from '@/lib/constants';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" 
               className="text-2xl hover:text-blue-400 transition">
              <FaGithub />
            </a>
            <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer"
               className="text-2xl hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href={SITE_CONFIG.twitter} target="_blank" rel="noopener noreferrer"
               className="text-2xl hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`}
               className="text-2xl hover:text-blue-400 transition">
              <FaEnvelope />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}