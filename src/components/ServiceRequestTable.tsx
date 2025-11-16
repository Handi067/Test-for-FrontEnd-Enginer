// src/components/ServiceRequestTable.tsx

import React from 'react';
import './ServiceRequestTable.scss'; 

interface RequestEntry {
    id: string;
    date: string;
    title: string;
    category: string;
    priority: 'High' | 'Medium' | 'Low';
    pic: string;
    status: 'Selesai' | 'Tertunda' | 'Dalam Proses' | 'Dibatalkan';
}

const dummyRequests: RequestEntry[] = [
    { id: 'SR-0051', date: '12 Nov 2025', title: 'Perbaikan Sistem Otomatisasi Gudang A', category: 'IT Support', priority: 'High', pic: 'Budi S.', status: 'Tertunda' },
    { id: 'SR-0050', date: '10 Nov 2025', title: 'Permintaan Seragam Karyawan Baru', category: 'HR/GA', priority: 'Medium', pic: 'Dina R.', status: 'Dalam Proses' },
    { id: 'SR-0049', date: '08 Nov 2025', title: 'Permintaan Bahan Proyek P-007', category: 'Logistik', priority: 'High', pic: 'Ahmad Z.', status: 'Selesai' },
    { id: 'SR-0048', date: '05 Nov 2025', title: 'Pengecekan Kebocoran Pipa Air', category: 'Facility', priority: 'Medium', pic: 'Citra K.', status: 'Selesai' },
    { id: 'SR-0047', date: '01 Nov 2025', title: 'Pembaruan Lisensi Software Akuntansi', category: 'IT Support', priority: 'Low', pic: 'Budi S.', status: 'Dibatalkan' },
];

const ServiceRequestTable: React.FC = () => {
    
    const getStatusClass = (status: RequestEntry['status']) => {
        switch (status) {
            case 'Selesai': return 'status--sr-success';
            case 'Tertunda': return 'status--sr-warning';
            case 'Dalam Proses': return 'status--sr-info';
            case 'Dibatalkan': return 'status--sr-error';
            default: return '';
        }
    };
    
    const getPriorityClass = (priority: RequestEntry['priority']) => {
        switch (priority) {
            case 'High': return 'priority--high';
            case 'Medium': return 'priority--medium';
            case 'Low': return 'priority--low';
            default: return '';
        }
    };

    return (
        <div className="sr-table-container">
            <table className="sr-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tanggal</th>
                        <th>Judul Permintaan</th>
                        <th>Kategori</th>
                        <th>Prioritas</th>
                        <th>PIC</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyRequests.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.date}</td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>
                                <span className={`priority-badge ${getPriorityClass(item.priority)}`}>
                                    {item.priority}
                                </span>
                            </td>
                            <td>{item.pic}</td>
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

export default ServiceRequestTable;