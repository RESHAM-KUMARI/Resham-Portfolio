import { SITE_CONFIG } from '@/lib/constants';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://github.com/RESHAM-KUMARI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/resham-kumari-99619a21b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
              <FaLinkedin size={18} />
            </a>
            <a href="https://x.com/ReshamK17061138" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaTwitter size={18} />
            </a>
            <a href="mailto:reshamkri682001@gmail.com" className="text-gray-400 hover:text-red-400 transition">
              <FaEnvelope size={18} />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-500 text-xs">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}