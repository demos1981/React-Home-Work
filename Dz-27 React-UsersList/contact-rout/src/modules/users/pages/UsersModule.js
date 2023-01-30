import React from 'react'
import { Outlet} from 'react-router-dom';
import UserNavigate from '../components/UserNavigate';


function UsersModule() {
  return (
    <div>
        <UserNavigate/>
        <Outlet/>
    </div>
  )
}

export default UsersModule