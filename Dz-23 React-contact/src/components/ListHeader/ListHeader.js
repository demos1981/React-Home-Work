import React from 'react'
import './ListHeader.css';
function ListHeader() {
  return (
    <div className='row'>
    <div className='basic columns'>Name</div>
    <div className='basic columns'>Surname</div>
    <div className='basic columns'>Email</div>
    <div className='basic columns'>Action</div>
    </div>
  )
}

export default ListHeader