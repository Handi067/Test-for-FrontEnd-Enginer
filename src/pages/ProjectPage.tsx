// src/pages/ProjectPage.tsx

import React from 'react';
import { Briefcase, DollarSign, Activity, FileText } from 'lucide-react';
import './ModulePage.scss';
import ProjectProgressChart from '../components/ProjectProgressChart'; 
import ProjectCard, { dummyProjects } from '../components/ProjectCard'; // Import ProjectCard dan data dummy

// Catatan: Interface SummaryCardProps & SummaryCard diasumsikan sudah ada di file ini.

// --- Halaman Project Overview Utama ---
const ProjectPage: React.FC = () => {
    return (
        <div className="module-page">
            {/* Header Proyek - Sesuai gambar 820e64.png */}
            <div className="project-header-container">
                <h1 className="page-title">Project Overview</h1>
                <div className="project-controls">
                    {/* Filter dan tombol aksi sesuai gambar 820e64.png */}
                    <input type="text" className="input-field" placeholder="Search" />
                    <select className="input-field">
                        <option>Project</option>
                    </select>
                    <select className="input-field">
                        <option>On Progress</option>
                    </select>
                    <button className="default-button button--secondary">
                        See All Project Location
                    </button>
                </div>
            </div>
            
            <section className="dashboard-section">
                {/* Ringkasan Statistik - Sesuai gambar 83fd4e.png */}
                <div className="summary-grid">
                    <div className="summary-card bg-indigo">
                        <Briefcase size={28} />
                        <h3>Total Proyek Aktif</h3>
                        <p>12</p>
                    </div>
                    <div className="summary-card bg-green">
                        <DollarSign size={28} />
                        <h3>Total Anggaran</h3>
                        <p>Rp 50 Miliar</p>
                    </div>
                    <div className="summary-card bg-yellow">
                        <Activity size={28} />
                        <h3>Progress Rata-Rata</h3>
                        <p>67%</p>
                    </div>
                    <div className="summary-card bg-red">
                        <FileText size={28} />
                        <h3>Dokumen Terbit</h3>
                        <p>450</p>
                    </div>
                </div>
            </section>
            
            {/* Konten Utama Proyek (Card Grid) - Sesuai gambar 912548.png */}
            <section className="dashboard-section">
                <h2>Daftar Proyek Aktif</h2>
                <div className="project-card-grid">
                    {dummyProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

            {/* Placeholder untuk Chart */}
            <section className="dashboard-section">
                <h2>Progress Visual Proyek</h2>
                <ProjectProgressChart />
            </section>

        </div>
    );
};

export default ProjectPage;