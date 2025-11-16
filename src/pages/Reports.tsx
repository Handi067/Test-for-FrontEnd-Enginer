import React from 'react';
import { BarChart, TrendingUp, PieChart } from 'lucide-react';

const ReportsPage: React.FC = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Reports & Analytics Overview</h1>
      
      {/* Konten Utama Halaman Reports */}
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg border border-gray-100">
        <div className="flex items-center justify-start space-x-4 mb-6">
            <TrendingUp size={36} className="text-indigo-600" />
            <p className="text-xl font-medium text-gray-700">Analisis Mendalam</p>
        </div>
        
        <div className="text-center py-10 text-gray-500 border border-dashed border-gray-300 rounded-lg">
            <div className="flex justify-center space-x-8 mb-4">
                <BarChart size={40} />
                <PieChart size={40} />
            </div>
            <p className="text-lg font-semibold">Area ini dikhususkan untuk Laporan Kustom dan Visualisasi Data.</p>
            <p className="text-sm mt-2">Anda dapat menambahkan fitur seperti filter tanggal, ekspor data, atau laporan kinerja bulanan di sini.</p>
        </div>
      </div>
      
    </div>
  );
};

export default ReportsPage;