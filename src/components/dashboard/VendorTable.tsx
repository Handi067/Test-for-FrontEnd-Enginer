// src/components/dashboard/VendorTable.tsx

import React from 'react';
import '../../styles/VendorTable.scss'; // Path to the new SCSS file

interface Vendor {
    id: number;
    name: string;
    score: number;
    transactionVolume: number;
    onTimeRate: number;
    status: 'Active' | 'On Hold' | 'Inactive';
}

const dummyVendors: Vendor[] = [
    { id: 1, name: 'PT. Mitra Utama', score: 9.2, transactionVolume: 120, onTimeRate: 98, status: 'Active' },
    { id: 2, name: 'CV. Sinar Jaya', score: 8.5, transactionVolume: 85, onTimeRate: 92, status: 'Active' },
    { id: 3, name: 'PT. Bangun Perkasa', score: 7.8, transactionVolume: 45, onTimeRate: 85, status: 'On Hold' },
    { id: 4, name: 'UD. Logam Mulia', score: 8.9, transactionVolume: 95, onTimeRate: 95, status: 'Active' },
    { id: 5, name: 'PT. Konstruksi Abadi', score: 6.5, transactionVolume: 20, onTimeRate: 70, status: 'Inactive' },
];

const getStatusClass = (status: Vendor['status']) => {
    switch (status) {
        case 'Active': return 'status--active';
        case 'On Hold': return 'status--on-hold';
        case 'Inactive': return 'status--inactive';
        default: return '';
    }
};

const VendorTable: React.FC = () => {
    return (
        <div className="vendor-table-container">
            <table className="vendor-table">
                <thead>
                    <tr>
                        <th>Nama Vendor</th>
                        <th className="text-center">Skor</th>
                        <th className="text-center">Volume Transaksi</th>
                        <th className="text-center">Tepat Waktu (%)</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyVendors.map((vendor) => (
                        <tr key={vendor.id}>
                            <td>{vendor.name}</td>
                            <td className="text-center">{vendor.score.toFixed(1)}</td>
                            <td className="text-center">{vendor.transactionVolume}</td>
                            <td className="text-center">{vendor.onTimeRate}%</td>
                            <td>
                                <span className={`status-badge ${getStatusClass(vendor.status)}`}>
                                    {vendor.status}
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