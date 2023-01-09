import React from 'react'
import ListBody from '../ListBody/ListBody'
import ListHeader from '../ListHeader/ListHeader'

function List({contacts, onDelete,onEdit}) {
  console.log('List',contacts);
  return (
    <div>
        <ListHeader />
        <ListBody 
        contacts={contacts} 
        onDelete={onDelete} 
        onEdit={onEdit}/>
    </div>
  )
}

export default List