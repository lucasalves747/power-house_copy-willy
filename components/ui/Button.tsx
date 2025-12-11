import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  pulse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-center flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-900/40 border border-purple-500/20",
    secondary: "bg-white text-brand-dark hover:bg-gray-100",
    outline: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const pulseClass = pulse ? "animate-pulse" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${pulseClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};