// src/components/layout/Sidebar.tsx

import React, { useState } from 'react';
import { 
    LayoutDashboard, BarChart3, LogOut,
    Briefcase, ChevronDown, ChevronUp, Layers,
    ClipboardCheck, Zap, Database, Settings, 
    ListChecks 
} from 'lucide-react';
import './Sidebar.scss'; 

interface NavItem {
    name: string;
    icon: React.ComponentType<any>; // Allow any React component, including Lucide icons
    page: string;
    hasSubMenu: boolean;
    subMenu?: NavItem[];
}

interface SidebarProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
    userName: string;
    userRole: 'admin' | 'user' | null;
    onLogout: () => void;
    isSidebarOpen: boolean; 
}

// Definisikan menu untuk admin
const adminNavItems: NavItem[] = [
    { 
        name: 'Project', 
        icon: Briefcase, 
        page: 'Project',
        hasSubMenu: false,
    },
    { 
        name: 'Administration and Budget', 
        icon: Layers, 
        page: 'AdministrationAndBudget',
        hasSubMenu: true,
        subMenu: [
            { name: 'Overview', icon: LayoutDashboard, page: 'Overview', hasSubMenu: false },
            { name: 'Budget Recap', icon: ListChecks, page: 'BudgetRecap', hasSubMenu: false },
        ]
    },
    { 
        name: 'Material Management', 
        icon: Database, 
        page: 'MaterialManagement',
        hasSubMenu: false, // Ubah ke true jika Anda ingin ada submenu nanti
    },
    { 
        name: 'Service Request', 
        icon: ClipboardCheck, 
        page: 'ServiceRequest',
        hasSubMenu: false,
    },
    { 
        name: 'Vendor Performance', 
        icon: Zap, 
        page: 'VendorPerformance',
        hasSubMenu: false,
    },
    { 
        name: 'Work History', 
        icon: BarChart3, 
        page: 'WorkHistory',
        hasSubMenu: false,
    },
    { 
        name: 'Master Data', 
        icon: Database, 
        page: 'MasterData',
        hasSubMenu: false,
    },
    { 
        name: 'Settings', 
        icon: Settings, 
        page: 'Settings',
        hasSubMenu: false,
    },
];

// Definisikan menu untuk user biasa
const userNavItems: NavItem[] = [
    { name: 'Project', icon: Briefcase, page: 'Project', hasSubMenu: false },
    { name: 'Service Request', icon: ClipboardCheck, page: 'ServiceRequest', hasSubMenu: false },
    { name: 'Settings', icon: Settings, page: 'Settings', hasSubMenu: false },
];

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage, userName, userRole, onLogout, isSidebarOpen }) => {
    
    const navItems = userRole === 'admin' ? adminNavItems : userNavItems;
    const [openMenu, setOpenMenu] = useState<string | null>('AdministrationAndBudget'); 

    const sidebarClass = `sidebar ${isSidebarOpen ? 'sidebar--open' : ''}`;

    const handleMenuClick = (pageName: string, hasSubMenu: boolean) => {
        if (hasSubMenu) {
            setOpenMenu(openMenu === pageName ? null : pageName);
        } else {
            setCurrentPage(pageName);
        }
    };

    const renderNavItems = (items: NavItem[], isSubMenu = false) => (
        <ul className={isSubMenu ? 'sidebar__submenu' : 'sidebar__nav'}>
            {items.map((item) => {
                const isActive = currentPage === item.page;
                const Icon = item.icon;
                const isOpen = item.hasSubMenu && openMenu === item.page;

                return (
                    <li key={item.page} className={`sidebar__list-item ${isSubMenu ? 'sidebar__list-item--sub' : ''}`}>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleMenuClick(item.page, item.hasSubMenu);
                            }}
                            className={`sidebar__item ${isActive ? 'sidebar__item--active' : ''} ${item.hasSubMenu ? 'sidebar__item--parent' : ''}`}
                        >
                            <div className="sidebar__item-content">
                                <Icon size={isSubMenu ? 16 : 20} />
                                {item.name}
                            </div>
                            {item.hasSubMenu && (
                                <span className="sidebar__chevron">
                                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </span>
                            )}
                        </a>

                        {item.hasSubMenu && item.subMenu && isOpen && (
                            renderNavItems(item.subMenu, true)
                        )}
                    </li>
                );
            })}
        </ul>
    );

    return (
        <aside className={sidebarClass}>
            
            <h1 className="sidebar__header">Admin Panel</h1>
            
            {renderNavItems(navItems)}

            <div className="sidebar__footer">
                <div className="sidebar__user-info">Logged in as: {userName}</div>
                <button 
                    onClick={onLogout} 
                    className="sidebar__logout-btn"
                >
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;