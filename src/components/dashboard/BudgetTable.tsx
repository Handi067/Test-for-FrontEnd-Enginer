// src/components/dashboard/BudgetTable.tsx

import React from 'react';
import '../../styles/BudgetTable.scss'; // Path ke file SCSS baru

interface BudgetData {
    department: string;
    initialBudget: number;
    realization: number;
}

const dummyBudgetData: BudgetData[] = [
    { department: 'Teknik Sipil', initialBudget: 15_000_000_000, realization: 12_500_000_000 },
    { department: 'Mekanikal & Elektrikal', initialBudget: 12_000_000_000, realization: 9_000_000_000 },
    { department: 'Logistik & Material', initialBudget: 20_000_000_000, realization: 19_500_000_000 },
    { department: 'HSE (K3)', initialBudget: 3_000_000_000, realization: 1_200_000_000 },
    { department: 'Administrasi Umum', initialBudget: 5_000_000_000, realization: 5_100_000_000 }, // Contoh overbudget
];

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value);
};

const ProgressBar: React.FC<{ percentage: number }> = ({ percentage }) => {
    const displayPercentage = Math.min(percentage, 100); // Cap at 100% for visual
    const isOverBudget = percentage > 100;

    return (
        <div className="progress-bar-container">
            <div 
                className={`progress-bar ${isOverBudget ? 'over-budget' : ''}`} 
                style={{ width: `${displayPercentage}%` }}
            >
                {percentage.toFixed(1)}%
            </div>
        </div>
    );
};

const BudgetTable: React.FC = () => {
    return (
        <div className="budget-table-container">
            <table className="budget-recap-table">
                <thead>
                    <tr>
                        <th>Departemen</th>
                        <th className="text-right">Anggaran Awal</th>
                        <th className="text-right">Realisasi</th>
                        <th className="text-center">Persentase</th>
                        <th className="text-right">Sisa Anggaran</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyBudgetData.map((item) => {
                        const percentage = (item.realization / item.initialBudget) * 100;
                        const remaining = item.initialBudget - item.realization;
                        return (
                            <tr key={item.department}>
                                <td>{item.department}</td>
                                <td className="text-right">{formatCurrency(item.initialBudget)}</td>
                                <td className="text-right">{formatCurrency(item.realization)}</td>
                                <td className="text-center">
                                    <ProgressBar percentage={percentage} />
                                </td>
                                <td className={`text-right ${remaining < 0 ? 'text-danger' : ''}`}>{formatCurrency(remaining)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default BudgetTable;