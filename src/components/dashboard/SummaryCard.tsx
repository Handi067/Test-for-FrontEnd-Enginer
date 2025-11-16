// dashboard/SummaryCard.tsx (Kode yang Diperbarui)
import React from 'react';
import './SummaryCard.scss'; // <-- Ubah impor

interface SummaryCardProps {
 title: string;
 value: string | number;
 icon: React.ReactNode;
 color: string; // Properti ini akan diubah menjadi SCSS variable atau kelas
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon, color }) => {
 // Format mata uang IDR jika nilainya adalah angka
 const displayValue = typeof value === 'number'
  ? value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })
  : value;

 // Cek apakah 'icon' adalah React Element yang valid
 const clonedIcon = icon && React.isValidElement(icon)
  // Di sini, kita tetap menggunakan kelas sederhana untuk styling ikon (misalnya warna putih)
  ? React.cloneElement(icon, { size: 60, className: 'text-white' } as any)
  : null;
    
    // Gunakan kelas dasar dan kelas dinamis untuk warna
 return (
  <div className={`summary-card summary-card--${color}`}>
   
   {/* Background Icon Effect */}
   {clonedIcon && (
    <div className="summary-card__icon-bg">
     {clonedIcon}
    </div>
   )}

   <div className="summary-card__content">
    <span className="summary-card__title">{title}</span>
    <span className="summary-card__value">
     {displayValue}
    </span>
   </div>
  </div>
 );
};

export default SummaryCard;