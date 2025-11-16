// src/pages/OverviewPage.tsx

import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, } from 'lucide-react'; // Menghapus BarChart2 karena tidak digunakan
import './Administration.scss'; 

// --- Komponen Kartu Ringkasan Anggaran (Tidak berubah secara fungsional) ---
interface BudgetSummaryCardProps {
    title: string;
    value: string;
    icon: React.FC<any>;
    bgColor: string;
}

const BudgetSummaryCard: React.FC<BudgetSummaryCardProps> = ({ title, value, icon: Icon, bgColor }) => (
    <div className={`budget-card ${bgColor}`}>
        <div className="budget-card__content">
            <h3 className="budget-card__title">{title}</h3>
            <p className="budget-card__value">{value}</p>
        </div>
        <Icon size={40} className="budget-card__icon" />
    </div>
);

// --- Halaman Overview ---
const OverviewPage: React.FC = () => {
    return (
        <div className="admin-page">
            <h1 className="page-title">Administration and Budget Overview</h1>
            
            <section className="summary-grid">
                <BudgetSummaryCard
                    title="Total Anggaran Tahun Ini"
                    value="Rp 95 M"
                    icon={DollarSign}
                    bgColor="bg-dark-blue" // Warna baru sesuai gambar
                />
                <BudgetSummaryCard
                    title="Realisasi Anggaran"
                    value="Rp 60 M (63%)"
                    icon={TrendingUp}
                    bgColor="bg-green-primary" // Warna baru sesuai gambar
                />
                <BudgetSummaryCard
                    title="Anggaran Tersisa"
                    value="Rp 35 M"
                    icon={TrendingDown} // Menggunakan TrendingDown untuk konsistensi
                    bgColor="bg-gold-primary" // Warna baru sesuai gambar
                />
            </section>

            <section className="chart-container">
                <h2>Tren Pengeluaran vs. Rencana</h2>
                <div className="chart-placeholder-content">
                    {/* Representasi sederhana dari grafik */}
                    <div className="chart-area">
                        <div className="y-axis">
                            <span>8%</span><span>7%</span><span>6%</span><span>5%</span><span>4%</span><span>3%</span><span>2%</span><span>1%</span><span>0%</span>
                        </div>
                        <div className="chart-bars">
                            {/* Bar dan garis sesuai gambar */}
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div key={i} className="bar" style={{ height: `${(Math.random() * 4) + 2}%` }}></div>
                            ))}
                        </div>
                        <div className="chart-line">
                            {/* Garis representasi */}
                            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <polyline fill="none" stroke="red" strokeWidth="2"
                                    points="
                                        0,70 10,65 20,60 30,55 40,50 50,45 60,40 70,35 80,30 90,25 100,20
                                    "
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="x-axis-labels">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Jun</span><span>Jun</span><span>Jun</span><span>Jun</span><span>Sum</span><span>Sum</span>
                    </div>
                    <div className="chart-legends">
                        <span className="legend-item"><span className="legend-color-box bg-blue"></span> Rencana Pengeluaran</span>
                        <span className="legend-item"><span className="legend-color-box bg-red"></span> Realisasi Pengeluaran</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OverviewPage;