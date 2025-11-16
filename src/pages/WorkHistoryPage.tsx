// src/pages/WorkHistoryPage.tsx

import React from 'react';
import { History, FileText, AlertTriangle, Filter } from 'lucide-react';
import './ModulePage.scss';
import WorkHistoryTable from '../components/dashboard/WorkHistoryTable'; // Path diperbaiki

// --- Komponen Kartu Ringkasan (Mirip SummaryCard di ModulePage.scss) ---
interface SummaryCardProps {
    icon: React.FC<any>;
    title: string;
    value: string;
    bgColor: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon: Icon, title, value, bgColor }) => (
    <div className={`summary-card ${bgColor}`}>
        <Icon size={28} />
        <h3>{title}</h3>
        <p>{value}</p>
    </div>
);

// --- Halaman Work History Utama ---
const WorkHistoryPage: React.FC = () => {
    return (
        <div className="module-page">
            <h1 className="page-title">Work History</h1>
            
            <section className="dashboard-section">
                <h2>Ringkasan Log</h2>
                <div className="summary-grid">
                    <SummaryCard
                        icon={History}
                        title="Log Bulan Ini"
                        value="4,500 Entri"
                        bgColor="bg-indigo"
                    />
                    <SummaryCard
                        icon={FileText}
                        title="Laporan Terbit"
                        value="12 Laporan"
                        bgColor="bg-green"
                    />
                    <SummaryCard
                        icon={AlertTriangle}
                        title="Aktivitas Kritis"
                        value="25 Item"
                        bgColor="bg-yellow"
                    />
                </div>
            </section>

            <section className="dashboard-section">
                <h2>Filter Riwayat Pekerjaan</h2>
                
                {/* Antarmuka Filter */}
                <div className="filter-interface">
                    <div className="filter-controls">
                        <Filter size={18} className="icon" />
                        <select className="input-field">
                            <option value="">Filter Jenis Aktivitas</option>
                            <option value="login">Login/Logout</option>
                            <option value="update">Update Master Data</option>
                            <option value="report">Pembuatan Laporan</option>
                        </select>
                        <input type="date" className="input-field" placeholder="Dari Tanggal" />
                        <input type="date" className="input-field" placeholder="Sampai Tanggal" />
                        <input type="text" className="input-field" placeholder="Cari Berdasarkan Pengguna..." />
                        <button className="default-button button--primary-filter">Terapkan Filter</button>
                    </div>
                </div>

                {/* Tabel Log Aktivitas */}
                <div className="history-table-area">
                    {/* Placeholder teks dari gambar asli */}
                    <p className="description-text">Tabel log aktivitas yang dapat difilter berdasarkan tanggal, pengguna, dan jenis aktivitas.</p>
                    <WorkHistoryTable /> 
                </div>
            </section>
        </div>
    );
};

export default WorkHistoryPage;