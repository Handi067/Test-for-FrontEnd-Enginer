// src/components/BudgetTable.tsx

import React from 'react';
import './BudgetTable.scss'; 

interface BudgetEntry {
    id: number;
    department: string;
    initialBudget: number;
    realization: number;
}

const dummyBudget: BudgetEntry[] = [
    { id: 1, department: 'Project P-001', initialBudget: 15000000000, realization: 12000000000 },
    { id: 2, department: 'Logistik', initialBudget: 5000000000, realization: 3500000000 },
    { id: 3, department: 'IT Support', initialBudget: 2500000000, realization: 1800000000 },
    { id: 4, department: 'Facility Management', initialBudget: 3000000000, realization: 2900000000 },
];

const BudgetTable: React.FC = () => {
    
    const formatRupiah = (number: number) => {
        return 'Rp ' + number.toLocaleString('id-ID');
    };
    
    return (
        <div className="budget-table-container">
            <table className="budget-table">
                <thead>
                    <tr>
                        <th>Departemen/Proyek</th>
                        <th>Anggaran Awal</th>
                        <th>Realisasi</th>
                        <th>Persentase (%)</th>
                        <th>Sisa Anggaran</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyBudget.map((item) => {
                        const percentage = (item.realization / item.initialBudget) * 100;
                        const remaining = item.initialBudget - item.realization;
                        
                        const getPercentageClass = (p: number) => {
                            if (p > 90) return 'status--critical';
                            if (p > 70) return 'status--warning';
                            return 'status--safe';
                        };

                        return (
                            <tr key={item.id}>
                                <td>{item.department}</td>
                                <td>{formatRupiah(item.initialBudget)}</td>
                                <td>{formatRupiah(item.realization)}</td>
                                <td>
                                    <span className={`percentage-badge ${getPercentageClass(percentage)}`}>
                                        {percentage.toFixed(1)}%
                                    </span>
                                </td>
                                <td>{formatRupiah(remaining)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default BudgetTable;