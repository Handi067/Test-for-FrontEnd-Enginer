import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Asumsikan MonthlyData telah didefinisikan di src/types/index.ts
// import { MonthlyData } from '../types'; 
interface MonthlyData {
  month: string;
  revenue: number;
  transactions: number;
}

interface ChartComponentProps {
  data: MonthlyData[];
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Tren Pendapatan & Transaksi (6 Bulan Terakhir)</h2>
      
      {/* Container Responsif untuk Grafik */}
      <div className='h-80 w-full'>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            
            {/* Sumbu X (Bulan) */}
            <XAxis dataKey="month" stroke="#6b7280" />
            
            {/* Sumbu Y Kiri (Pendapatan) */}
            <YAxis 
              yAxisId="left" 
              orientation="left" 
              stroke="#10b981" 
              tickFormatter={(value) => `Rp ${Math.round(value / 1000000)} Jt`} // Format ringkas
            />
            
            {/* Sumbu Y Kanan (Transaksi) */}
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              stroke="#3b82f6" 
              tickFormatter={(value) => value.toLocaleString('id-ID', { minimumFractionDigits: 0 })} 
            />
            
            {/* Tooltip (Popup saat hover) */}
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }} 
              formatter={(value: number, name: string) => [
                // Mengubah format di Tooltip berdasarkan jenis data
                name === 'Pendapatan (IDR)' ? value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }) : value.toLocaleString('id-ID'), 
                name
              ]} 
            />
            
            {/* Garis Data Pendapatan */}
            <Line 
              yAxisId="left" 
              type="monotone" 
              dataKey="revenue" 
              stroke="#10b981" // Green
              strokeWidth={3} 
              name="Pendapatan (IDR)" 
              activeDot={{ r: 8 }} 
            />
            
            {/* Garis Data Transaksi */}
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="transactions" 
              stroke="#3b82f6" // Blue
              strokeWidth={3} 
              name="Jumlah Transaksi" 
              activeDot={{ r: 8 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartComponent;