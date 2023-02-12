import React from 'react'
import useAuth from '../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import useAuthorize from '../hooks/useAuthorize';
import { Navigate } from 'react-router-dom';

function Logout() {
  const {logout} = useAuth();
  const isAuthorize = useAuthorize();
  return (
    <div>
    {!isAuthorize && <Navigate to="/auth/login" /> }
    <button onClick={logout}>Logout</button>
    <NavLink to="/">Home</NavLink>
    </div>
  )
}

export default Logout