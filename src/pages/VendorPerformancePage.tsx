// src/pages/VendorPerformancePage.tsx

import React from 'react';
import { TrendingUp, Award, Clock } from 'lucide-react';
import './ModulePage.scss';
import VendorTable from '../components/dashboard/VendorTable'; // Path diperbaiki

// --- Komponen Kartu Metrik Kinerja (Menggunakan SummaryCard dari ModulePage.scss) ---
interface MetricCardProps {
    icon: React.FC<any>;
    title: string;
    value: string;
    bgColor: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon: Icon, title, value, bgColor }) => (
    <div className={`summary-card ${bgColor}`}>
        <Icon size={28} />
        <h3>{title}</h3>
        <p>{value}</p>
    </div>
);

// --- Halaman Vendor Performance Utama ---
const VendorPerformancePage: React.FC = () => {
    return (
        <div className="module-page">
            <h1 className="page-title">Vendor Performance</h1>
            
            <section className="dashboard-section">
                <h2>Metrik Kinerja Utama</h2>
                <div className="summary-grid">
                    <MetricCard
                        icon={TrendingUp}
                        title="Skor Rata-Rata"
                        value="8.5 / 10"
                        bgColor="bg-indigo"
                    />
                    <MetricCard
                        icon={Award}
                        title="Vendor Terbaik"
                        value="PT. Mitra Utama"
                        bgColor="bg-green"
                    />
                    <MetricCard
                        icon={Clock}
                        title="Rata-Rata Waktu Kirim"
                        value="5.2 Hari"
                        bgColor="bg-yellow"
                    />
                    {/* Catatan: Gambar hanya menunjukkan 3 kartu, tetapi kita bisa tambahkan 1 lagi jika diperlukan, atau biarkan 3 agar sesuai gambar. */}
                </div>
            </section>

            <section className="dashboard-section">
                <h2>Tabel Peringkat Vendor</h2>
                <div className="vendor-table-area">
                    <p className="description-text">
                        Tabel daftar vendor dengan skor performa, volume transaksi, dan kriteria penilaian.
                    </p>
                    <VendorTable /> 
                </div>
            </section>
        </div>
    );
};

export default VendorPerformancePage;