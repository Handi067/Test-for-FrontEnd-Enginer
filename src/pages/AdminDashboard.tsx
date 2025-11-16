// src/pages/AdminDashboard.tsx (Diperbarui)

import React from 'react';
import { Briefcase, DollarSign, Activity, FileText } from 'lucide-react'; 
import RecentActivityTable from '../components/dashboard/RecentActivityTable'; // <-- Import Baru
import './Dashboard.scss'; 

// --- Komponen Kartu Statistik (Tetap Sama) ---
interface StatCardProps {
    title: string;
    value: string | number;
    icon: React.FC<any>;
    colorClass: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, colorClass }) => (
    <div className={`stat-card ${colorClass}`}>
        <div className="stat-card__icon">
            <Icon size={32} />
        </div>
        <div className="stat-card__content">
            <p className="stat-card__title">{title}</p>
            <h2 className="stat-card__value">{value}</h2>
        </div>
    </div>
);

// --- Halaman Dashboard Admin Utama (Diperbarui) ---
const AdminDashboardPage: React.FC = () => {
    return (
        <div className="dashboard-page">
            <h1 className="page-title">Project Overview</h1>
            
            <section className="stat-cards-grid">
                <StatCard 
                    title="Total Proyek Aktif" 
                    value={12} 
                    icon={Briefcase} 
                    colorClass="color-indigo"
                />
                <StatCard 
                    title="Total Anggaran" 
                    value="Rp 50 Miliar" 
                    icon={DollarSign} 
                    colorClass="color-green"
                />
                <StatCard 
                    title="Progress Rata-Rata" 
                    value="67%" 
                    icon={Activity} 
                    colorClass="color-yellow"
                />
                <StatCard 
                    title="Dokumen Terbit" 
                    value={450} 
                    icon={FileText} 
                    colorClass="color-red"
                />
            </section>

            <section className="recent-activity">
                <h2>Aktivitas Terbaru</h2>
                {/* Komponen Tabel yang Diimpor */}
                <RecentActivityTable /> 
            </section>
        </div>
    );
};

export default AdminDashboardPage;