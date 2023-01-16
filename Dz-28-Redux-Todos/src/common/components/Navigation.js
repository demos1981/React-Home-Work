import React from 'react'
import './Navigation.css'
import NavigationLinks from './NavigationLinks'

function Navigation({currentPath,navigate}) {
  return (
    <div className='wrap'>
    <NavigationLinks 
    path={'todos'} 
    label='Todos'
    currentPath={currentPath}
    navigate = {navigate}
    />

<NavigationLinks 
    path={'users'} 
    label='Users'
    currentPath={currentPath}
    navigate = {navigate}
    />
     <NavigationLinks 
    path={'posts'} 
    label='Posts'
    currentPath={currentPath}
    navigate = {navigate}
    />

    </div>
  )
}

export default Navigation