import React from 'react';
import { BarChart, Users, Activity } from 'lucide-react';

const DashboardPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
          <BarChart className="h-10 w-10 text-indigo-500" />
          <div>
            <p className="text-gray-500 text-sm">Sales</p>
            <p className="text-2xl font-bold text-gray-800">$12,345</p>
          </div>
        </div>
        {/* Placeholder Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
          <Users className="h-10 w-10 text-green-500" />
          <div>
            <p className="text-gray-500 text-sm">New Users</p>
            <p className="text-2xl font-bold text-gray-800">150</p>
          </div>
        </div>
        {/* Placeholder Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
          <Activity className="h-10 w-10 text-red-500" />
          <div>
            <p className="text-gray-500 text-sm">Recent Activity</p>
            <p className="text-2xl font-bold text-gray-800">67</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;