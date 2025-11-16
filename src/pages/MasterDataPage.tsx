// src/pages/MasterDataPage.tsx

import React, { useState } from 'react';
import { Users, Briefcase, Tag, Database, MapPin, DollarSign } from 'lucide-react';
import './ModulePage.scss';

// --- Komponen Kartu Manajemen Entitas ---
interface EntityCardProps {
    icon: React.FC<any>;
    title: string;
    subtitle: string;
    bgColor: string;
    onClick: () => void;
}

const EntityCard: React.FC<EntityCardProps> = ({ icon: Icon, title, subtitle, bgColor, onClick }) => (
    <div className={`entity-card ${bgColor}`} onClick={onClick}>
        <div className="entity-card__icon">
            <Icon size={32} />
        </div>
        <div className="entity-card__content">
            <p className="entity-card__subtitle">{subtitle}</p>
            <h3 className="entity-card__title">{title}</h3>
        </div>
    </div>
);

// --- Antarmuka Placeholder Data yang Dipilih ---
const DataEditInterface: React.FC<{ type: string }> = ({ type }) => {
    return (
        <div className="edit-interface-box">
            <h4 className="edit-interface-title">Manajemen Data: {type}</h4>
            <div className="placeholder-form">
                <p>Antarmuka tabular atau formulir rinci untuk mengedit dan mengelola **{type}** akan dimuat di sini.</p>
                {/* Contoh kontrol placeholder */}
                <div className="form-row">
                    <label>Tambah Entri Baru:</label>
                    <input type="text" placeholder={`Nama ${type}...`} className="input-field" />
                    <button className="default-button button--add">Tambah</button>
                </div>
                <div className="data-list-placeholder">
                    {type} yang ada: [Data1, Data2, Data3, ...]
                </div>
            </div>
        </div>
    );
};

// --- Halaman Master Data Utama ---
const MasterDataPage: React.FC = () => {
    const [selectedDataType, setSelectedDataType] = useState('Lokasi Proyek'); // Default yang dipilih

    const dataTypes = [
        { key: 'Lokasi Proyek', icon: MapPin },
        { key: 'Unit Bisnis', icon: Briefcase },
        { key: 'Kode Anggaran', icon: DollarSign },
        { key: 'Jenis Material', icon: Database },
    ];

    return (
        <div className="module-page">
            <h1 className="page-title">Master Data</h1>
            
            <section className="dashboard-section">
                <h2>Entity Management</h2>
                <div className="master-data-entity-grid">
                    <EntityCard
                        icon={Users}
                        title="Kelola Akun & Role"
                        subtitle="Data Pengguna"
                        bgColor="bg-indigo-dark" 
                        onClick={() => setSelectedDataType('Data Pengguna')}
                    />
                    <EntityCard
                        icon={Briefcase}
                        title="Tambahkan Proyek Baru"
                        subtitle="Katalog Proyek"
                        bgColor="bg-green-primary" 
                        onClick={() => setSelectedDataType('Katalog Proyek')}
                    />
                    <EntityCard
                        icon={Tag}
                        title="Ubah Jenis Layanan"
                        subtitle="Kategori SR"
                        bgColor="bg-gold-primary" 
                        onClick={() => setSelectedDataType('Kategori Service Request')}
                    />
                </div>
            </section>
            
            <section className="dashboard-section">
                <h2>Pilih Data untuk Diedit</h2>
                <div className="data-edit-selection">
                    {dataTypes.map((item) => (
                        <button 
                            key={item.key}
                            className={`data-type-button ${selectedDataType === item.key ? 'active' : ''}`}
                            onClick={() => setSelectedDataType(item.key)}
                        >
                            <item.icon size={20} />
                            {item.key}
                        </button>
                    ))}
                </div>

                <div className="data-edit-area">
                    <DataEditInterface type={selectedDataType} />
                </div>
            </section>
        </div>
    );
};

export default MasterDataPage;