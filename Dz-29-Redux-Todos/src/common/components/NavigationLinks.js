import React from 'react'

function NavigationLinks({path,label,currentPath,navigate}) {
  return (
    <a className={'button' + 
    (currentPath === path ? ' active': '')}
    href="#"
    onClick={()=>navigate(path)}>
    {label}
    </a>
  )
}

export default NavigationLinks