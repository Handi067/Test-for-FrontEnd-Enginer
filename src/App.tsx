import React, { useState, useCallback } from 'react';
import './index.scss'; 

// Import Komponen Layout & Halaman
import Layout from './components/layout/Layout';
import LoginPage from './pages/LoginPage'; 

// Halaman Dashboard
import AdminDashboardPage from './pages/AdminDashboard'; 
import UserDashboardPage from './pages/UserDashboard'; 

// Halaman Administration and Budget
import OverviewPage from './pages/OverviewPage';
import BudgetRecapPage from './pages/BudgetRecapPage';

// Halaman Modul Lain
import MaterialManagementPage from './pages/MaterialManagementPage';
import ServiceRequestPage from './pages/ServiceRequestPage';       
import VendorPerformancePage from './pages/VendorPerformancePage'; 
import WorkHistoryPage from './pages/WorkHistoryPage';             
import MasterDataPage from './pages/MasterDataPage';               
import SettingsPage from './pages/SettingsPage';                   

// --- TIPE DATA BARU ---
type UserRole = 'admin' | 'user' | null;

// --- LOGIKA AUTENTIKASI ---
const AUTH_CREDENTIALS = [
 { email: 'admin@example.com', password: 'admin123', role: 'admin', name: 'Admin User' },
 { email: 'user@example.com', password: 'user123', role: 'user', name: 'Standard User' }, 
];

const handleLogin = (email: string, password: string): { success: boolean, role: UserRole, name: string } => {
    const user = AUTH_CREDENTIALS.find(
        c => c.email === email && c.password === password
    );
    if (user) {
        return { success: true, role: user.role as UserRole, name: user.name };
    }
    return { success: false, role: null, name: '' };
};

// --- Halaman Placeholder Default ---
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
 <div className="main-page-content__wrapper">
  <h1 className="page-title">{title}</h1> 
  <div className="placeholder-box"> 
   <p className="text-xl">Konten halaman {title} akan ditampilkan di sini.</p>
  </div>
 </div>
);

// --- KOMPONEN UTAMA APLIKASI ---
const App: React.FC = () => {
 const [isAuthenticated, setIsAuthenticated] = useState(false);
 const [userName, setUserName] = useState('Guest');
 const [userRole, setUserRole] = useState<UserRole>(null);
 const [currentPage, setCurrentPage] = useState('Project'); // Default page saat login

 const attemptLogin = (email: string, password: string) => {
    const result = handleLogin(email, password);
    if (result.success) {
        setIsAuthenticated(true);
        setUserName(result.name);
        setUserRole(result.role);
        setCurrentPage('Project'); 
        return true;
    }
    return false;
  };

 const handleLogout = () => {
  setIsAuthenticated(false);
  setUserName('Guest');
  setUserRole(null);
  setCurrentPage('Project'); 
 };

 // Logika Rendering Konten berdasarkan Peran (Role-Based Routing)
 const renderContent = useCallback(() => {
    if (userRole === 'admin') {
        switch (currentPage) {
            case 'Project':
                return <AdminDashboardPage />;
            // Administration and Budget
            case 'Overview':
                return <OverviewPage />;
            case 'BudgetRecap':
                return <BudgetRecapPage />;
            // Modul Lain
            case 'MaterialManagement':
                return <MaterialManagementPage />;
            case 'ServiceRequest':
                return <ServiceRequestPage />;
            case 'VendorPerformance':
                return <VendorPerformancePage />;
            case 'WorkHistory':
                return <WorkHistoryPage />;
            case 'MasterData':
                return <MasterDataPage />;
            case 'Settings':
                return <SettingsPage />;
            default:
                return <AdminDashboardPage />;
        }
    } else if (userRole === 'user') {
        // Routing untuk Pengguna Biasa (Hanya modul yang diizinkan)
        switch (currentPage) {
            case 'Project':
                return <UserDashboardPage />;
            case 'ServiceRequest':
                return <ServiceRequestPage />;
            case 'WorkHistory':
                return <WorkHistoryPage />;
            case 'Settings':
                return <SettingsPage />;
            default:
                return <UserDashboardPage />;
        }
    }
    return <PlaceholderPage title="Welcome" />;
 }, [currentPage, userRole]);


 // Tampilkan halaman Login jika belum terautentikasi
 if (!isAuthenticated) {
  return <LoginPage 
   onLogin={attemptLogin}
  />;
 }

 // Tampilkan Layout utama
 return (
  <Layout
   currentPage={currentPage}
   setCurrentPage={setCurrentPage}
   userName={userName}
      userRole={userRole} 
   onLogout={handleLogout}
  >
   {renderContent()}
  </Layout>
 );
};

export default App;