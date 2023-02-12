import React from 'react';
import { Outlet } from 'react-router-dom';
import ProtectedRoute from '../common/auth/components/ProtectedRoute';

function AdminApp() {
  return (
    <ProtectedRoute roles={['admin','sales']}>
        <Outlet/>
    </ProtectedRoute>
  )
}

export default AdminApp