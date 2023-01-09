import React from 'react'
import './Gallery.css'
function AlbumsListItem({albums:{id,title},onOpened}) {
  
  return (
  
    <li onClick={()=>onOpened(id)}>{title}  (albums id ={id})</li>
  );
}

export default AlbumsListItem