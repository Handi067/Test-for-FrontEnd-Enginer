// src/components/Header.tsx

import React from 'react';
import './Header.scss';

interface HeaderProps {
    pageTitle: string;
    userName: string; // Tambahkan prop ini
}

const Header: React.FC<HeaderProps> = ({ pageTitle, userName }) => {
    return (
        <header className="dashboard-header">
            <h1 className="header-title">{pageTitle}</h1>
            <div className="user-info">
                Hi, {userName.split(' ')[0]}! 
            </div>
        </header>
    );
};

export default Header;