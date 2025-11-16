// src/pages/ServiceRequestPage.tsx

import React from 'react';
import { FileText, CheckCircle, Clock, XCircle } from 'lucide-react';
import './ModulePage.scss';
import ServiceRequestTable from '../components/ServiceRequestTable'; // Kita akan buat komponen ini

// --- Komponen Kartu Status Tiket (Menggunakan SummaryCard dari ModulePage.scss) ---
interface StatusCardProps {
    icon: React.FC<any>;
    title: string;
    value: string;
    bgColor: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ icon: Icon, title, value, bgColor }) => (
    <div className={`summary-card ${bgColor}`}>
        <Icon size={28} />
        <h3>{title}</h3>
        <p>{value}</p>
    </div>
);

// --- Halaman Service Request Utama ---
const ServiceRequestPage: React.FC = () => {
    return (
        <div className="module-page">
            <h1 className="page-title">Service Request Management</h1>
            
            <section className="dashboard-section">
                <h2>Status Tiket</h2>
                <div className="summary-grid">
                    <StatusCard
                        icon={FileText}
                        title="Tiket Total"
                        value="125 Tiket"
                        bgColor="bg-indigo"
                    />
                    <StatusCard
                        icon={CheckCircle}
                        title="Selesai"
                        value="85 Tiket"
                        bgColor="bg-green"
                    />
                    <StatusCard
                        icon={Clock}
                        title="Tertunda (SLA)"
                        value="15 Tiket"
                        bgColor="bg-yellow"
                    />
                    <StatusCard
                        icon={XCircle}
                        title="Dibatalkan"
                        value="5 Tiket"
                        bgColor="bg-red"
                    />
                </div>
            </section>

            <section className="dashboard-section">
                <h2>Tabel Service Request</h2>
                <div className="service-request-area">
                    <p className="description-text">
                        Tabel "Service Request" dengan status, prioritas, dan PIC.
                    </p>
                    <ServiceRequestTable /> 
                </div>
            </section>
        </div>
    );
};

export default ServiceRequestPage;