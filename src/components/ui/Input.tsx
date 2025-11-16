import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

// Menggunakan React.forwardRef agar komponen ini dapat digunakan
// dengan React Hook Form atau untuk pengelolaan fokus secara manual.
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, type = 'text', ...rest }, ref) => {

    // Gunakan ID yang disediakan atau buat ID dari label
    const inputId = id || (label ? label.toLowerCase().replace(/\s/g, '-') : undefined);

    // Styling dasar untuk input
    const baseStyle = 'mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm transition duration-150';

    // Styling berdasarkan status (error atau normal)
    const statusStyle = error
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500 text-red-900 placeholder-red-300'
      : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500';

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        
        {/* Input Field */}
        <input
          id={inputId}
          ref={ref}
          type={type}
          className={`${baseStyle} ${statusStyle} ${className}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...rest}
        />
        
        {/* Error Message */}
        {error && (
          <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600 font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input'; // Nama display untuk debugging React

export default Input;