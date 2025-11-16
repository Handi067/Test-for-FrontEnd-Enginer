// src/pages/MaterialManagementPage.tsx (Diperbarui)

import React from 'react';
import { Truck, Package, Search } from 'lucide-react'; // Icons are used in the summary cards
import MaterialTable from '../components/dashboard/MaterialTable'; // <-- Path diperbaiki
import './ModulePage.scss';

// ... (Komponen Stat Card dan Summary Grid tetap sama) ...

const MaterialManagementPage: React.FC = () => {
    return (
        <div className="module-page">
            <h1 className="page-title">Material Management</h1>
            
            <section className="dashboard-section">
                <h2>Ringkasan Inventaris</h2>
                <div className="summary-grid">
                    <div className="summary-card bg-indigo">
                        <Truck size={28} />
                        <h3>Total Stok</h3>
                        <p>1,250 Unit Material</p>
                    </div>
                    <div className="summary-card bg-green">
                        <Package size={28} />
                        <h3>Permintaan Baru</h3>
                        <p>15 Permintaan Hari Ini</p>
                    </div>
                    <div className="summary-card bg-yellow">
                        <Search size={28} />
                        <h3>Perlu Pemesanan Ulang</h3>
                        <p>25 Item Kritis</p>
                    </div>
                </div>
            </section>
            
            <section className="dashboard-section">
                <h2>Daftar Material dan Status</h2>
                {/* Ganti placeholder dengan tabel */}
                <MaterialTable /> 
            </section>
        </div>
    );
};

export default MaterialManagementPage;