'use client';

import { ChangeEvent } from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}

export default function InputField({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  required = false,
  textarea = false,
  placeholder
}: InputFieldProps) {
  const baseInputStyles = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200";
  
  if (textarea) {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          id={name}
          name={name}
          rows={5}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
          className={`${baseInputStyles} resize-none`}
        />
      </div>
    );
  }
  
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
        className={baseInputStyles}
      />
    </div>
  );
}