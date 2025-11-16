// src/pages/SettingsPage.tsx

import React from 'react';
import { Lock, User, Bell } from 'lucide-react';
import './ModulePage.scss'; // Menggunakan gaya umum untuk modul

// --- Komponen Kartu Pengaturan Cepat ---
interface SettingCardProps {
    icon: React.FC<any>;
    title: string;
    description: string;
}

const SettingCard: React.FC<SettingCardProps> = ({ icon: Icon, title, description }) => (
    <div className="setting-card">
        <div className="setting-card__icon">
            <Icon size={28} />
        </div>
        <div className="setting-card__content">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

// --- Halaman Pengaturan Utama ---
const SettingsPage: React.FC = () => {
    return (
        <div className="module-page">
            <h1 className="page-title">System Settings</h1>
            
            <section className="dashboard-section">
                <h2>Pengaturan Pengguna</h2>
                <div className="setting-card-grid">
                    <SettingCard
                        icon={Lock}
                        title="Security Settings"
                        description="Ganti password, kelola 2FA."
                    />
                    <SettingCard
                        icon={User}
                        title="User Profile"
                        description="Edit nama dan informasi kontak."
                    />
                    <SettingCard
                        icon={Bell}
                        title="Notifications"
                        description="Kelola preferensi notifikasi email/aplikasi."
                    />
                </div>
            </section>

            <section className="dashboard-section">
                <h2>Konfigurasi Sistem</h2>
                <div className="system-config-box">
                    <div className="config-form-placeholder">
                        <p>Formulir untuk mengatur variabel global seperti SLA default atau jam kerja sistem akan muncul di sini.</p>
                        {/* Placeholder elemen formulir */}
                        <div className="form-controls">
                            <label>Default Service Level Agreement (SLA):</label>
                            <input type="number" placeholder="48" className="input-field" />
                            <small>Jam</small>
                        </div>
                        <div className="form-controls">
                            <label>Jam Kerja Harian:</label>
                            <select className="input-field">
                                <option>08:00 - 17:00</option>
                                <option>09:00 - 18:00</option>
                            </select>
                        </div>
                        <button className="default-button button--save">Simpan Konfigurasi</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SettingsPage;