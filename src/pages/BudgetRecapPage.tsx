// src/pages/BudgetRecapPage.tsx

import React from 'react';
import { ListChecks, FileSpreadsheet } from 'lucide-react';
import './Administration.scss'; 

// Data simulasi untuk Budget Recap
interface BudgetEntry {
    department: string;
    initialBudget: number; // Dalam juta
    realization: number;   // Dalam juta
    percentage: string;
    remaining: number;     // Dalam juta
}

const budgetData: BudgetEntry[] = [
    { department: 'Project Development A', initialBudget: 35000, realization: 28000, percentage: '80%', remaining: 7000 },
    { department: 'Maintenance & Repair B', initialBudget: 15000, realization: 10500, percentage: '70%', remaining: 4500 },
    { department: 'Human Capital', initialBudget: 5000, realization: 3500, percentage: '70%', remaining: 1500 },
    { department: 'Procurement', initialBudget: 25000, realization: 18750, percentage: '75%', remaining: 6250 },
    { department: 'General Affairs', initialBudget: 10000, realization: 5000, percentage: '50%', remaining: 5000 },
];

const formatCurrency = (amount: number): string => {
    return `Rp ${amount.toLocaleString('id-ID')} Jt`;
};

// --- Halaman Budget Recap ---
const BudgetRecapPage: React.FC = () => {
    return (
        <div className="admin-page">
            <h1 className="page-title">Budget Recap and Allocation</h1>
            
            <section className="controls">
                <button className="button button--primary">
                    <FileSpreadsheet size={18} /> Export Data
                </button>
                <button className="button button--secondary">
                    <ListChecks size={18} /> Lihat Alokasi Detil
                </button>
            </section>

            <section className="recap-table-container">
                <h2>Ringkasan Anggaran per Departemen</h2>
                <div className="table-responsive">
                    <table className="budget-recap-table">
                        <thead>
                            <tr>
                                <th>Departemen</th>
                                <th>Anggaran Awal</th>
                                <th>Realisasi</th>
                                <th>Persentase</th>
                                <th>Sisa Anggaran</th>
                            </tr>
                        </thead>
                        <tbody>
                            {budgetData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.department}</td>
                                    <td>{formatCurrency(item.initialBudget)}</td>
                                    <td>{formatCurrency(item.realization)}</td>
                                    <td>
                                        <div className="progress-bar-container">
                                            <div 
                                                className="progress-bar" 
                                                style={{ width: item.percentage }}
                                            >
                                                {item.percentage}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{formatCurrency(item.remaining)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default BudgetRecapPage;