import React from 'react';

// Tipe untuk menampung properti Badge
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'info', className = '' }) => {
  // Logika untuk menentukan gaya berdasarkan variant
  const variantStyles = {
    // Digunakan untuk status netral/informasi
    info: 'bg-indigo-100 text-indigo-800', 
    
    // Digunakan untuk status positif (misalnya, Viewer, Aktif)
    success: 'bg-green-100 text-green-800', 
    
    // Digunakan untuk status peringatan (misalnya, Editor, Pending)
    warning: 'bg-yellow-100 text-yellow-800', 
    
    // Digunakan untuk status negatif (misalnya, Admin, Error)
    danger: 'bg-red-100 text-red-800',
    
    // Warna sekunder/utama (bisa digunakan untuk label umum)
    primary: 'bg-gray-200 text-gray-800',
  };

  const baseStyle = 'px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap';

  // Gabungkan semua style
  const mergedClassName = `${baseStyle} ${variantStyles[variant]} ${className}`;

  return (
    <span className={mergedClassName}>
      {children}
    </span>
  );
};

export default Badge;