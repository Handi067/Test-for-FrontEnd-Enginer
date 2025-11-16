// src/components/layout/DashboardLayout.tsx

import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Path diperbaiki
import Header from './Header';   // Path diperbaiki
import './Layout.scss';      // Menggunakan kembali SCSS dari Layout.tsx

// --- TIPE DATA DARI App.tsx ---
type UserRole = 'admin' | 'user' | null;

interface DashboardLayoutProps {
    children: React.ReactNode;
    currentPage: string; // Harus sesuai dengan state di App.tsx (misal: "Project")
    setCurrentPage: (page: string) => void;
    userName: string;
    userRole: UserRole;
    onLogout: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
    children, 
    currentPage, 
    setCurrentPage, 
    userName, 
    userRole, 
    onLogout 
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    return (
        <div className="app-layout">
            {/* Meneruskan props ke Sidebar */}
            <Sidebar 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                userName={userName}
                userRole={userRole}
                onLogout={onLogout}
                isSidebarOpen={isSidebarOpen}
            />
            <div className="main-content-area">
                <Header 
                    pageTitle={currentPage} 
                    userName={userName}
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                /> 
                <main className="main-page-content">
                    {children}
                </main>
            </div>
            {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)} />}
        </div>
    );
};

export default DashboardLayout;