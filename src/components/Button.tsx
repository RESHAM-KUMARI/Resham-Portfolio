import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  variant = "primary", 
  onClick, 
  href, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
  };
  
  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}