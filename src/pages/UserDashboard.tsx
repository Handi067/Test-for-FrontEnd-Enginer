// src/pages/UserDashboard.tsx

import React from 'react';
import { AlertCircle, Briefcase, Clock } from 'lucide-react';
import './Dashboard.scss'; 

// --- Halaman Dashboard Pengguna Biasa ---
const UserDashboardPage: React.FC = () => {
    return (
        <div className="dashboard-page">
            <h1 className="page-title">My Work Dashboard</h1>
            
            <section className="user-summary-cards">
                <div className="user-card color-indigo">
                    <AlertCircle size={28} />
                    <h3>Persetujuan Tertunda</h3>
                    <p className="value">3 Permintaan Layanan</p>
                </div>
                <div className="user-card color-yellow">
                    <Briefcase size={28} />
                    <h3>Proyek Saya</h3>
                    <p className="value">Akses ke 2 Proyek</p>
                </div>
                <div className="user-card color-green">
                    <Clock size={28} />
                    <h3>Sisa Jam Kerja</h3>
                    <p className="value">160 Jam</p>
                </div>
            </section>

            <section className="my-tasks">
                <h2>Service Request Anda</h2>
                <div className="placeholder-box">
                    <p>Daftar tiket atau Service Request yang dibuat/ditugaskan kepada pengguna akan muncul di sini.</p>
                </div>
            </section>
        </div>
    );
};

export default UserDashboardPage;