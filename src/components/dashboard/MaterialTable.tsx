// src/components/dashboard/MaterialTable.tsx

import React from 'react';
import '../../styles/MaterialTable.scss'; // Path diperbaiki untuk menunjuk ke file SCSS yang baru

interface Material {
  id: string;
  name: string;
  category: string;
  stock: number;
  unit: string;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
}

const dummyMaterials: Material[] = [
  { id: 'MT-001', name: 'Semen Tipe A', category: 'Konstruksi', stock: 150, unit: 'sak', status: 'in-stock' },
  { id: 'MT-002', name: 'Pipa PVC 4"', category: 'Plumbing', stock: 25, unit: 'batang', status: 'low-stock' },
  { id: 'MT-003', name: 'Kabel NYM 3x2.5mm', category: 'Elektrikal', stock: 500, unit: 'meter', status: 'in-stock' },
  { id: 'MT-004', name: 'Cat Tembok Putih', category: 'Finishing', stock: 0, unit: 'kaleng', status: 'out-of-stock' },
  { id: 'MT-005', name: 'Besi Beton 10mm', category: 'Konstruksi', stock: 80, unit: 'batang', status: 'in-stock' },
];

const getStatusClass = (status: Material['status']) => {
  if (status === 'in-stock') return 'status--in-stock';
  if (status === 'low-stock') return 'status--low-stock';
  return 'status--out-of-stock';
};

const MaterialTable: React.FC = () => {
  return (
    <div className="material-table-container">
      <table className="material-table">
        <thead>
          <tr>
            <th>ID Material</th>
            <th>Nama Material</th>
            <th>Kategori</th>
            <th>Status</th>
            <th className="text-right">Stok</th>
          </tr>
        </thead>
        <tbody>
          {dummyMaterials.map((material) => (
            <tr key={material.id}>
              <td>{material.id}</td>
              <td>{material.name}</td>
              <td>{material.category}</td>
              <td>
                <span className={`status-badge ${getStatusClass(material.status)}`}>
                  {material.status.replace('-', ' ')}
                </span>
              </td>
              <td className="text-right">{`${material.stock.toLocaleString()} ${material.unit}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaterialTable;