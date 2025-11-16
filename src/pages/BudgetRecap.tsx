// src/pages/BudgetRecap.tsx

import React from 'react';
import { FileDown, MapPin } from 'lucide-react';
import './ModulePage.scss';
import BudgetTable from '../components/dashboard/BudgetTable'; // Path diperbaiki

// --- Halaman Budget Recap Utama ---
const BudgetRecapPage: React.FC = () => {
    return (
        <div className="module-page">
            <h1 className="page-title">Budget Recap</h1>
            
            <section className="dashboard-section">
                <div className="budget-controls">
                    <button className="default-button button--export">
                        <FileDown size={18} /> Export Data
                    </button>
                    <button className="default-button button--secondary">
                        <MapPin size={18} /> Lihat Alokasi Detil
                    </button>
                </div>
            </section>

            <section className="dashboard-section">
                <h2>Ringkasan Anggaran Departemen</h2>
                <div className="budget-table-area">
                    <p className="description-text">
                        Tabel interaktif dengan kolom (Departemen, Anggaran Awal, Realisasi, Persentase, Sisa) akan muncul di sini.
                    </p>
                    <BudgetTable /> 
                </div>
            </section>
        </div>
    );
};

export default BudgetRecapPage;