import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
};

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}: ButtonProps) {
  const baseStyles = "rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5";
  
  const variantStyles = {
    primary: "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
    secondary: "bg-[#f2f2f2] dark:bg-[#1a1a1a] hover:bg-[#e5e5e5] dark:hover:bg-[#2a2a2a]",
    outline: "border border-solid border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]"
  };
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
} 