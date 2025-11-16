// ui/Button.tsx (Kode yang Diperbarui)
import React from 'react';
import { Loader2 } from 'lucide-react';
import './Button.scss'; // <--- Ubah import CSS/SCSS

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
 children: React.ReactNode;
 variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
 size?: 'sm' | 'md' | 'lg';
 isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
 children,
 variant = 'primary', 
 size = 'md',    
 isLoading = false, 
 className = '',   
 disabled,
 ...rest
}) => {
 // Gabungkan semua kelas SCSS.
 const mergedClassName = `btn btn--${variant} btn--${size} ${className}`;

 return (
  <button
   className={mergedClassName}
   disabled={disabled || isLoading} 
   {...rest}
  >
   {isLoading ? (
    <>
     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
     Loading...
    </>
   ) : (
    children
   )}
  </button>
 );
};

export default Button;