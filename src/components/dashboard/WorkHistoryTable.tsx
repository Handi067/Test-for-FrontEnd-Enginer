// src/components/dashboard/WorkHistoryTable.tsx

import React from 'react';
import './WorkHistoryTable.scss';

interface HistoryLog {
    id: string;
    timestamp: string;
    user: string;
    activityType: 'Login' | 'Update' | 'Report' | 'Logout';
    description: string;
}

const dummyHistory: HistoryLog[] = [
    { id: 'LOG-001', timestamp: '2023-10-27 10:05:12', user: 'Admin User', activityType: 'Login', description: 'User logged in successfully.' },
    { id: 'LOG-002', timestamp: '2023-10-27 10:15:30', user: 'Admin User', activityType: 'Update', description: 'Updated master data for "Lokasi Proyek".' },
    { id: 'LOG-003', timestamp: '2023-10-27 11:00:00', user: 'Standard User', activityType: 'Report', description: 'Generated "Budget Recap" report.' },
    { id: 'LOG-004', timestamp: '2023-10-27 12:30:45', user: 'Admin User', activityType: 'Logout', description: 'User logged out.' },
    { id: 'LOG-005', timestamp: '2023-10-26 15:20:10', user: 'Standard User', activityType: 'Update', description: 'Submitted a new Service Request #SR-0123.' },
];

const getTypeClass = (type: HistoryLog['activityType']) => {
    switch (type) {
        case 'Login': return 'type--login';
        case 'Update': return 'type--update';
        case 'Report': return 'type--report';
        case 'Logout': return 'type--logout';
        default: return '';
    }
};

const WorkHistoryTable: React.FC = () => {
    return (
        <div className="work-history-table-container">
            <table className="work-history-table">
                <thead>
                    <tr>
                        <th>Log ID</th>
                        <th>Timestamp</th>
                        <th>Pengguna</th>
                        <th>Jenis Aktivitas</th>
                        <th>Deskripsi</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyHistory.map((log) => (
                        <tr key={log.id}>
                            <td>{log.id}</td>
                            <td>{log.timestamp}</td>
                            <td>{log.user}</td>
                            <td>
                                <span className={`type-badge ${getTypeClass(log.activityType)}`}>
                                    {log.activityType}
                                </span>
                            </td>
                            <td>{log.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WorkHistoryTable;