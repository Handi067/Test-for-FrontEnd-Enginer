// src/components/layout/Layout.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';
import './Layout.scss'; 

interface LayoutProps {
    children: React.ReactNode;
    currentPage: string;
    setCurrentPage: (page: string) => void;
    userName: string;
    userRole: 'admin' | 'user' | null;
    onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, setCurrentPage, userName, userRole, onLogout }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="app-layout">
            
            <Sidebar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                userName={userName}
                userRole={userRole}
                onLogout={onLogout}
                isSidebarOpen={isSidebarOpen}
            />

            <main className="main-content-area">
                
                <header className="main-header">
                    <button 
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="main-header__menu-btn"
                        aria-label="Toggle Menu"
                    >
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <div className="main-header__info">
                        <span className="main-header__title">{currentPage}</span>
                        <div className="main-header__user">Hi, {userName.split(' ')[0]}!</div>
                    </div>
                </header>

                <div className="main-page-content">
                    {children}
                </div>
            </main>
            
            {isSidebarOpen && (
                <div 
                    className="sidebar-overlay" 
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default Layout;