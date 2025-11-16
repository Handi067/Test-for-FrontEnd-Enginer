// src/components/dashboard/RecentActivityTable.tsx

import React from 'react';
import './RecentActivityTable.scss'; 

interface Activity {
    id: number;
    activity: string;
    project: string;
    user: string;
    timestamp: string;
    status: 'Success' | 'Pending' | 'Rejected';
}

const recentActivities: Activity[] = [
    { id: 101, activity: 'Mengajukan Service Request', project: 'JASA REHAB RANGKA B', user: 'Standard User', timestamp: '15 Nov 2025, 10:30', status: 'Pending' },
    { id: 102, activity: 'Mengunggah Laporan Bulanan', project: 'JASA REPAIR DRAINASE', user: 'Admin User', timestamp: '15 Nov 2025, 09:15', status: 'Success' },
    { id: 103, activity: 'Mencoba login gagal', project: 'N/A', user: 'Guest', timestamp: '14 Nov 2025, 23:45', status: 'Rejected' },
    { id: 104, activity: 'Approval Budget Recap', project: 'N/A', user: 'Superadmin', timestamp: '14 Nov 2025, 14:00', status: 'Success' },
    { id: 105, activity: 'Membuat Entri Master Data', project: 'N/A', user: 'Admin User', timestamp: '13 Nov 2025, 08:00', status: 'Success' },
];

const RecentActivityTable: React.FC = () => {
    
    const getStatusClass = (status: Activity['status']) => {
        switch (status) {
            case 'Success':
                return 'status--success';
            case 'Pending':
                return 'status--pending';
            case 'Rejected':
                return 'status--rejected';
            default:
                return '';
        }
    };

    return (
        <div className="activity-table-container">
            <table className="activity-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Aktivitas</th>
                        <th>Proyek</th>
                        <th>Pengguna</th>
                        <th>Waktu</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {recentActivities.map((item) => (
                        <tr key={item.id}>
                            <td>#{item.id}</td>
                            <td>{item.activity}</td>
                            <td>{item.project}</td>
                            <td>{item.user}</td>
                            <td>{item.timestamp}</td>
                            <td>
                                <span className={`status-badge ${getStatusClass(item.status)}`}>
                                    {item.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecentActivityTable;