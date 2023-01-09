import React from 'react';
import './ListItem.css';

function ListItem({contact:{id,name,surname,email},onDelete,onEdit}) {
  return (
      <div className='row'>
    <div className='basic items'>{name}</div>
    <div className='basic items'>{surname}</div>
    <div className='basic items'>{email}</div>
    <div className='basic items'>
       <button className='buttonDelete' onClick={()=>onDelete(id)}>Delete</button> 
       <button className='buttonEdit' onClick={()=>onEdit(id)}>Edit</button> 
    </div>
    </div>
  )
}

export default ListItem