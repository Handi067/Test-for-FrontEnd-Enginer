// --- Tipe Data (Disederhanakan untuk keperluan file dummy) ---

interface SummaryItem {
    title: string;
    value: number | string;
    icon: string; // Placeholder string untuk ikon, akan diatasi di App.tsx
    color: string;
}

interface MonthlyData {
    month: string;
    revenue: number;
    transactions: number;
}

interface User {
    id: string;
    name: string;
    email: string;
    role: 'Admin' | 'Editor' | 'Viewer';
    createdAt: string;
    transactions: number;
}

// --- 1. Data Ringkasan (Summary Cards) ---
export const DUMMY_SUMMARY: SummaryItem[] = [
    {
        title: 'Total Pendapatan',
        value: 125000000,
        icon: 'DollarSign',
        color: 'bg-green-500',
    },
    {
        title: 'Transaksi Bulan Ini',
        value: 3250,
        icon: 'TrendingUp',
        color: 'bg-indigo-600',
    },
    {
        title: 'Pengguna Aktif',
        value: 1890,
        icon: 'Users',
        color: 'bg-yellow-500',
    },
    {
        title: 'Laporan Tertunda',
        value: 12,
        icon: 'AlertTriangle',
        color: 'bg-red-500',
    },
];

// --- 2. Data Grafik (Chart) ---
export const DUMMY_MONTHLY_DATA: MonthlyData[] = [
    { month: 'Jul', revenue: 7000000, transactions: 150 },
    { month: 'Agu', revenue: 9500000, transactions: 210 },
    { month: 'Sep', revenue: 12000000, transactions: 280 },
    { month: 'Okt', revenue: 15500000, transactions: 350 },
    { month: 'Nov', revenue: 18000000, transactions: 410 },
    { month: 'Des', revenue: 20000000, transactions: 450 },
];

// --- 3. Data Tabel (Data Table) ---
export const DUMMY_USERS: User[] = [
    // 10 data untuk contoh halaman pertama
    { id: 'U001', name: 'Rani Agustina', email: 'rani.a@email.com', role: 'Admin', createdAt: '2023-01-15', transactions: 125 },
    { id: 'U002', name: 'Bambang Sudiro', email: 'bambang.s@email.com', role: 'Editor', createdAt: '2023-03-22', transactions: 98 },
    { id: 'U003', name: 'Citra Dewi', email: 'citra.d@email.com', role: 'Viewer', createdAt: '2023-05-01', transactions: 210 },
    { id: 'U004', name: 'Dion Permana', email: 'dion.p@email.com', role: 'Viewer', createdAt: '2023-06-10', transactions: 35 },
    { id: 'U005', name: 'Eka Wijaya', email: 'eka.w@email.com', role: 'Admin', createdAt: '2023-07-05', transactions: 450 },
    { id: 'U006', name: 'Fina Oktavia', email: 'fina.o@email.com', role: 'Editor', createdAt: '2023-08-18', transactions: 15 },
    { id: 'U007', name: 'Gatot Subroto', email: 'gatot.s@email.com', role: 'Viewer', createdAt: '2023-09-29', transactions: 88 },
    { id: 'U008', name: 'Hesti Mulia', email: 'hesti.m@email.com', role: 'Viewer', createdAt: '2023-10-14', transactions: 105 },
    { id: 'U009', name: 'Iqbal Zulkarnain', email: 'iqbal.z@email.com', role: 'Editor', createdAt: '2023-11-20', transactions: 52 },
    { id: 'U010', name: 'Jihan Larasati', email: 'jihan.l@email.com', role: 'Admin', createdAt: '2023-12-03', transactions: 65 },
    // 10 data tambahan untuk mengaktifkan pagination
    { id: 'U011', name: 'Kurniawan Adi', email: 'kurniawan.a@email.com', role: 'Viewer', createdAt: '2024-01-08', transactions: 70 },
    { id: 'U012', name: 'Lia Putri', email: 'lia.p@email.com', role: 'Editor', createdAt: '2024-02-19', transactions: 91 },
    { id: 'U013', name: 'Mira Santika', email: 'mira.s@email.com', role: 'Viewer', createdAt: '2024-03-05', transactions: 24 },
    { id: 'U014', name: 'Nino Rahman', email: 'nino.r@email.com', role: 'Admin', createdAt: '2024-04-12', transactions: 156 },
    { id: 'U015', name: 'Oktavia Sari', email: 'oktavia.s@email.com', role: 'Viewer', createdAt: '2024-05-25', transactions: 42 },
    { id: 'U016', name: 'Putra Budi', email: 'putra.b@email.com', role: 'Editor', createdAt: '2024-06-01', transactions: 112 },
    { id: 'U017', name: 'Quinsa Ardelia', email: 'quinsa.a@email.com', role: 'Viewer', createdAt: '2024-07-11', transactions: 30 },
    { id: 'U018', name: 'Riko Hardiansyah', email: 'riko.h@email.com', role: 'Admin', createdAt: '2024-08-28', transactions: 200 },
    { id: 'U019', name: 'Sinta Dewi', email: 'sinta.d@email.com', role: 'Viewer', createdAt: '2024-09-04', transactions: 75 },
    { id: 'U020', name: 'Toni Wijaya', email: 'toni.w@email.com', role: 'Viewer', createdAt: '2024-10-17', transactions: 58 },
];