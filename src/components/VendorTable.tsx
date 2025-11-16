// src/components/VendorTable.tsx

import React from 'react';
import './VendorTable.scss'; 

interface VendorEntry {
    id: number;
    name: string;
    score: number;
    volume: number;
    deliveryTime: number; // in days
    status: 'Preferred' | 'Active' | 'Under Review';
}

const dummyVendors: VendorEntry[] = [
    { id: 1, name: 'PT. Mitra Utama', score: 9.2, volume: 150, deliveryTime: 4.5, status: 'Preferred' },
    { id: 2, name: 'CV. Karya Abadi', score: 8.5, volume: 120, deliveryTime: 5.8, status: 'Active' },
    { id: 3, name: 'PT. Baja Sentosa', score: 7.8, volume: 90, deliveryTime: 6.1, status: 'Active' },
    { id: 4, name: 'UD. Cepat Layanan', score: 6.5, volume: 55, deliveryTime: 8.2, status: 'Under Review' },
    { id: 5, name: 'PT. Global Supplier', score: 9.0, volume: 140, deliveryTime: 4.9, status: 'Preferred' },
];

const VendorTable: React.FC = () => {
    
    const getStatusClass = (status: VendorEntry['status']) => {
        switch (status) {
            case 'Preferred':
                return 'status--preferred';
            case 'Active':
                return 'status--active';
            case 'Under Review':
                return 'status--review';
            default:
                return '';
        }
    };

    return (
        <div className="vendor-table-container">
            <table className="vendor-table">
                <thead>
                    <tr>
                        <th>Peringkat</th>
                        <th>Nama Vendor</th>
                        <th>Skor Performa</th>
                        <th>Volume Transaksi (Unit)</th>
                        <th>Rata-rata Waktu Kirim (Hari)</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyVendors.sort((a, b) => b.score - a.score).map((item, index) => (
                        <tr key={item.id}>
                            <td>#{index + 1}</td>
                            <td>{item.name}</td>
                            <td>
                                <span className={`score-badge ${item.score > 8.5 ? 'high' : item.score > 7 ? 'medium' : 'low'}`}>
                                    {item.score.toFixed(1)}
                                </span>
                            </td>
                            <td>{item.volume.toLocaleString()}</td>
                            <td>{item.deliveryTime.toFixed(1)}</td>
                            <td>
                                <span className={`status-badge ${getStatusClass(item.status)}`}>
                                    {item.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VendorTable;