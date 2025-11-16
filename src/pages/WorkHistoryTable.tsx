// src/components/WorkHistoryTable.tsx

import React from 'react';
import './WorkHistoryTable.scss'; 

interface LogEntry {
    id: number;
    timestamp: string;
    user: string;
    type: 'Update' | 'Access' | 'Report' | 'Critical';
    description: string;
    status: 'Success' | 'Warning' | 'Error';
}

const historyLogs: LogEntry[] = [
    { id: 201, timestamp: '15 Nov 2025, 10:30', user: 'Admin User', type: 'Update', description: 'Mengubah Harga Besi Beton di Master Data', status: 'Success' },
    { id: 202, timestamp: '15 Nov 2025, 09:15', user: 'Standard User', type: 'Access', description: 'Gagal login (Password salah)', status: 'Error' },
    { id: 203, timestamp: '14 Nov 2025, 23:45', user: 'Superadmin', type: 'Report', description: 'Mencetak Laporan Anggaran Bulanan', status: 'Success' },
    { id: 204, timestamp: '14 Nov 2025, 14:00', user: 'Admin User', type: 'Critical', description: 'Percobaan akses file sensitif gagal', status: 'Warning' },
    { id: 205, timestamp: '13 Nov 2025, 08:00', user: 'Standard User', type: 'Access', description: 'Login berhasil', status: 'Success' },
];

const WorkHistoryTable: React.FC = () => {
    
    const getStatusClass = (status: LogEntry['status']) => {
        switch (status) {
            case 'Success':
                return 'status--log-success';
            case 'Warning':
                return 'status--log-warning';
            case 'Error':
                return 'status--log-error';
            default:
                return '';
        }
    };

    return (
        <div className="history-table-container">
            <table className="history-table">
                <thead>
                    <tr>
                        <th>Waktu</th>
                        <th>Pengguna</th>
                        <th>Tipe</th>
                        <th>Deskripsi Aktivitas</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {historyLogs.map((item) => (
                        <tr key={item.id}>
                            <td>{item.timestamp}</td>
                            <td>{item.user}</td>
                            <td>{item.type}</td>
                            <td>{item.description}</td>
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

export default WorkHistoryTable;