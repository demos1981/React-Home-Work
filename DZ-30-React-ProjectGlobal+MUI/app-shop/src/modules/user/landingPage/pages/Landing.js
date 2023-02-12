import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuthorize from '../../../common/auth/hooks/useAuthorize';

import useUser from '../../../common/auth/hooks/useUser';


function Landing() {
    const user = useUser();
    const isAuthorize = useAuthorize();

  return  <ul>
  <li>{isAuthorize && user.name}</li>
   <li>
       <NavLink to="/admin">Admin Panel</NavLink>
  
   </li>
   <li>
       <NavLink to="/admin/users">Users Panel</NavLink>
  
   </li>
   {isAuthorize ? (
   <li>
       <NavLink to="/auth/logout">Logout</NavLink>
   </li>
   ):(
   <li>
       <NavLink to="/auth/login">Login</NavLink>
   </li>
   )}
  </ul>
 
}

export default Landing;

