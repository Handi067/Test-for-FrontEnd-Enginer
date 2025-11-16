// src/components/ProjectProgressChart.tsx

import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ProjectProgressChart.scss'; 

const ProjectProgressChart: React.FC = () => {
    return (
        <div className="chart-container">
            <h3 className="chart-title">Progress Proyek Individual</h3>
            <div className="chart-placeholder">
                {/* Karena library charting belum diinstal, kita gunakan placeholder div.
                    Jika menggunakan Recharts, kode akan terlihat seperti ini:
                */}
                
                {/* <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="name" stroke="#6b7280" />
                        <YAxis domain={[0, 100]} stroke="#6b7280" />
                        <Tooltip 
                            formatter={(value, name) => [`${value}%`, name]}
                            contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
                        />
                        <Bar dataKey="progress" fill="#4f46e5" name="Progress (%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer> 
                */}
                
                <p>
                    [Placeholder Chart] Bar Chart menunjukkan persentase progres untuk setiap proyek aktif.
                </p>
                <img 
                    src="" 
                    alt="Bar Chart Placeholder" 
                    className="placeholder-img"
                />
            </div>
        </div>
    );
};

export default ProjectProgressChart;