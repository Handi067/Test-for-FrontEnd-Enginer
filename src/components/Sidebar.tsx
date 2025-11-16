// src/components/Sidebar.tsx

import React, { useState } from 'react';
import { 
    Briefcase, 
    Database, 
    Settings, 
    LogOut, 
    ChevronDown, 
    ChevronUp, 
    Box, 
    ClipboardCheck, 
    Zap, 
    BarChart3,
    Trello
} from 'lucide-react';
import './Sidebar.scss';

// --- TIPE DATA DARI App.tsx ---
type UserRole = 'admin' | 'user' | null;
type PageName = string; // Menggunakan string untuk kompatibilitas

interface SidebarProps {
    currentPage: PageName;
    setCurrentPage: (page: PageName) => void;
    userRole: UserRole;
    onLogout: () => void;
}

// Struktur Navigasi
const navItems = [
    { name: 'Project', icon: Briefcase, path: 'Project', roles: ['admin', 'user'] },
    {
        name: 'Administration and Budget',
        icon: Trello,
        path: 'AdministrationAndBudget',
        roles: ['admin'], // Hanya Admin yang bisa melihat ini
        subItems: [
            { name: 'Overview', path: 'Overview', roles: ['admin'] },
            { name: 'Budget Recap', path: 'Budget Recap', roles: ['admin'] },
        ],
    },
    { name: 'Material Management', icon: Box, path: 'Material Management', roles: ['admin'] },
    { name: 'Service Request', icon: ClipboardCheck, path: 'Service Request', roles: ['admin', 'user'] },
    { name: 'Vendor Performance', icon: Zap, path: 'Vendor Performance', roles: ['admin'] },
    { name: 'Work History', icon: BarChart3, path: 'Work History', roles: ['admin', 'user'] },
    { name: 'Master Data', icon: Database, path: 'Master Data', roles: ['admin'] },
    { name: 'Settings', icon: Settings, path: 'Settings', roles: ['admin', 'user'] },
];


const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage, userRole, onLogout }) => {
    
    // State untuk sub-menu yang terbuka. Default ke sub-menu Admin jika user adalah admin.
    const initialOpenMenu = navItems.find(item => 
        item.subItems && item.roles.includes(userRole!) && item.name === 'Administration and Budget'
    )?.name || null;

    const [openSubMenu, setOpenSubMenu] = useState<string | null>(initialOpenMenu);
    
    // Fungsi untuk toggle sub-menu
    const toggleSubMenu = (name: string) => {
        setOpenSubMenu(openSubMenu === name ? null : name);
    };

    return (
        <div className="sidebar">
            <div className="admin-panel-title">
                <h3>Admin Panel</h3>
            </div>
            
            <nav className="sidebar-nav">
                {navItems.map((item) => {
                    // Filter berdasarkan peran pengguna
                    if (userRole && !item.roles.includes(userRole)) {
                        return null;
                    }
                    
                    const isActive = item.path === currentPage || (item.subItems && openSubMenu === item.name);

                    return (
                        <div key={item.name} className="nav-item-container">
                            {item.subItems ? (
                                <div 
                                    className={`nav-link with-submenu ${isActive ? 'active' : ''}`}
                                    onClick={() => toggleSubMenu(item.name)}
                                >
                                    <item.icon size={18} />
                                    <span>{item.name}</span>
                                    {openSubMenu === item.name ? <ChevronUp size={16} className="chevron" /> : <ChevronDown size={16} className="chevron" />}
                                </div>
                            ) : (
                                <div 
                                    className={`nav-link ${item.path === currentPage ? 'active' : ''}`}
                                    onClick={() => setCurrentPage(item.path)}
                                >
                                    <item.icon size={18} />
                                    <span>{item.name}</span>
                                </div>
                            )}

                            {item.subItems && openSubMenu === item.name && (
                                <div className="submenu">
                                    {item.subItems.map((subItem) => {
                                        // Filter sub-item berdasarkan peran
                                        if (userRole && !subItem.roles.includes(userRole)) {
                                            return null;
                                        }

                                        return (
                                            <div 
                                                key={subItem.name} 
                                                className={`sub-link ${subItem.path === currentPage ? 'active' : ''}`}
                                                onClick={() => setCurrentPage(subItem.path)}
                                            >
                                                <span>{subItem.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>

            <div className="sidebar-footer">
                <div className="logged-in-as">Logged in as: {userRole === 'admin' ? 'Admin User' : 'Standard User'}</div>
                <button className="logout-button" onClick={onLogout}>
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;