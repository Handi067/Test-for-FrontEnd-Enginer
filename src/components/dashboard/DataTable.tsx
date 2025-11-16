import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

import './DataTable.scss'; 
import Badge from '../ui/Badge'; 
import type { User } from '../../types';

const ITEMS_PER_PAGE = 5;

type DataTableProps = {
  users: User[];
};

type SortKey = keyof User;
type SortDirection = 'ascending' | 'descending';

const getRoleVariant = (role: User['role']): 'success' | 'warning' | 'danger' => {
  if (role === 'Admin') return 'danger';
  if (role === 'Editor') return 'warning';
  return 'success'; 
};

const DataTable: React.FC<DataTableProps> = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<'All' | User['role']>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: SortDirection } | null>({ key: 'id', direction: 'ascending' });

  const processedUsers = useMemo(() => {
    let filteredUsers = users.filter(user =>
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (roleFilter === 'All' || user.role === roleFilter)
    );

    if (sortConfig !== null) {
      filteredUsers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return filteredUsers;
  }, [users, searchTerm, roleFilter, sortConfig]);

  const totalPages = Math.ceil(processedUsers.length / ITEMS_PER_PAGE);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return processedUsers.slice(start, start + ITEMS_PER_PAGE);
  }, [processedUsers, currentPage]);

  const requestSort = (key: SortKey) => {
    let direction: SortDirection = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: SortKey) => {
    if (!sortConfig || sortConfig.key !== key) {
      return null;
    }
    if (sortConfig.direction === 'ascending') {
      return <ChevronUp size={16} />;
    }
    return <ChevronDown size={16} />;
  };

  const columns: { key: SortKey; label: string }[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'createdAt', label: 'Created At' },
    { key: 'transactions', label: 'Transactions' },
  ];

  return (
    <div className="data-table">
      <h2 className="data-table__title">Data Pengguna</h2>

      <div className="data-table__controls">
        <div className="data-table__search-wrapper">
          <Search size={18} className="data-table__search-icon" />
          <input
            type="text"
            placeholder="Cari Nama atau Email..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="data-table__search-input"
          />
        </div>
        <div className="data-table__filter-wrapper">
          <Filter size={18} className="data-table__filter-icon" />
          <select
            value={roleFilter}
            onChange={(e) => {
              setRoleFilter(e.target.value as 'All' | User['role']);
              setCurrentPage(1);
            }}
            className="data-table__filter-select"
          >
            <option value="All">Semua Peran</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>
      </div>

      {/* Tabel */}
      <div className="data-table__table-wrapper">
        <table className="data-table__table">
          <thead className="data-table__thead">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => requestSort(col.key)}
                  className="data-table__th"
                >
                  <div className="data-table__th-content">
                    {col.label} {getSortIcon(col.key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="data-table__tbody">
            {currentData.length > 0 ? (
              currentData.map((user) => (
                <tr key={user.id} className="data-table__tr">
                  <td className="data-table__td data-table__td--bold">{user.id}</td>
                  <td className="data-table__td">{user.name}</td>
                  <td className="data-table__td">{user.email}</td>
                  <td className="data-table__td">
                      <Badge variant={getRoleVariant(user.role)}>
                          {user.role}
                      </Badge>
                  </td>
                  <td className="data-table__td">{user.createdAt}</td>
                  <td className="data-table__td">{user.transactions.toLocaleString('id-ID')}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="data-table__empty-state">
                  Tidak ada data yang cocok dengan kriteria Anda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {processedUsers.length > 0 && (
        <div className="data-table__pagination-controls">
          <div className="data-table__pagination-info">
            Menampilkan {currentData.length} dari {processedUsers.length} total data (Halaman {currentPage} dari {totalPages}).
          </div>
          <div className="data-table__pagination-buttons">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="pagination-btn pagination-btn--secondary"
            >
              Previous
            </button>
            <span className="pagination-btn pagination-btn--active">
              {currentPage}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || totalPages === 0}
              className="pagination-btn pagination-btn--secondary"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;