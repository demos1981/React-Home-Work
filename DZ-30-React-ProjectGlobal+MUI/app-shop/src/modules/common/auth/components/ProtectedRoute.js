import React from 'react';
import useAuthorize from '../hooks/useAuthorize';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children,roles}) {
    const isAuthorize = useAuthorize(roles);
  return (
   isAuthorize ? children:<Navigate to="/auth/login"/>
  )
}

export default ProtectedRoute