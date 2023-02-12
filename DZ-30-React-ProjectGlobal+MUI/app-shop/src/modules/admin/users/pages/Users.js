import React from 'react'
import ProtectedRoute from '../../../common/auth/components/ProtectedRoute'

function Users() {
  return (
    <ProtectedRoute roles={['admin']}>Users</ProtectedRoute>
   
  );
}

export default Users