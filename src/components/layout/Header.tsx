// src/components/layout/Header.tsx

import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
    pageTitle: string;
    userName: string;
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ pageTitle, userName, isSidebarOpen, toggleSidebar }) => {
    return (
        <header className="main-header">
            <button 
                onClick={toggleSidebar}
                className="main-header__menu-btn"
                aria-label="Toggle Menu"
            >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="main-header__info">
                <span className="main-header__title">{pageTitle}</span>
                <div className="main-header__user">Hi, {userName.split(' ')[0]}!</div>
            </div>
        </header>
    );
};

export default Header;