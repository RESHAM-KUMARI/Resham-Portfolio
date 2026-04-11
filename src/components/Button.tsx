'use client';

import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  className = '' 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:scale-105 focus:ring-blue-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 focus:ring-blue-500"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={combinedClassName}>
      {children}
    </button>
  );
}