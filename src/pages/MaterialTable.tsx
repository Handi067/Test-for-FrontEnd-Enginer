// src/components/MaterialTable.tsx

import React from 'react';
import '../MaterialTable.scss'; // Buat file SCSS baru

interface Material {
    id: string;
    name: string;
    unit: string;
    quantity: number;
    location: string;
    status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

const materialData: Material[] = [
    { id: 'MTL-001', name: 'Semen Portland (50kg)', unit: 'Bag', quantity: 250, location: 'WH-A1', status: 'In Stock' },
    { id: 'MTL-002', name: 'Besi Beton Ø12mm', unit: 'Batang', quantity: 45, location: 'Site Yard B', status: 'Low Stock' },
    { id: 'MTL-003', name: 'Pipa PVC 4 inch', unit: 'Batang', quantity: 10, location: 'WH-C3', status: 'Out of Stock' },
    { id: 'MTL-004', name: 'Kabel Listrik NYA 2.5mm', unit: 'Roll', quantity: 150, location: 'WH-A2', status: 'In Stock' },
    { id: 'MTL-005', name: 'Cat Tembok Dasar (Putih)', unit: 'Galon', quantity: 5, location: 'WH-B1', status: 'Low Stock' },
];

const MaterialTable: React.FC = () => {
    
    const getStatusClass = (status: Material['status']) => {
        switch (status) {
            case 'In Stock':
                return 'status--in-stock';
            case 'Low Stock':
                return 'status--low-stock';
            case 'Out of Stock':
                return 'status--out-of-stock';
            default:
                return '';
        }
    };

    return (
        <div className="material-table-container">
            <table className="material-table">
                <thead>
                    <tr>
                        <th>Kode</th>
                        <th>Nama Material</th>
                        <th>Unit</th>
                        <th className="text-right">Kuantitas</th>
                        <th>Lokasi</th>
                        <th>Status Stok</th>
                    </tr>
                </thead>
                <tbody>
                    {materialData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unit}</td>
                            <td className="text-right">{item.quantity.toLocaleString('id-ID')}</td>
                            <td>{item.location}</td>
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

export default MaterialTable;