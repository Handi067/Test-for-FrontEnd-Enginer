import React from 'react';

import DataTable from '../components/dashboard/DataTable'; 

import { DUMMY_USERS } from '../utils/dummyData'; 

const UsersPage: React.FC = () => {
  return (
    <div className="users-page-container">
      <h1 className="users-page-title">Manajemen Pengguna Aplikasi</h1>

      {/* Komponen DataTable di mana semua logika sorting, filtering, dan pagination berada */}
      <DataTable users={DUMMY_USERS} />
    </div>
  );
};

export default UsersPage;