import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  withArrow = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center rounded-lg px-6 py-3 text-lg font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-white text-gray-900 hover:bg-blue-50",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border-2 border-white text-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} group`}
      {...props}
    >
      {children}
      {withArrow && (
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
};

export default Button;