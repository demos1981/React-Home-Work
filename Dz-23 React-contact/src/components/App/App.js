import React, { useEffect, useState } from 'react';
import './App.css';

import List from '../ContactList/List';
import Form from '../Form/Form';
import { createItem, deleteItem, getList,updateItem } from '../../services/ContactServices';

function App() {
  const [contactsList, setContactsList] = useState([]);
  const [currentContact,setCurrentContact] = useState({});
  
  useEffect(()=>{
    getList().then(setContactsList);
  },[]);


  function saveContact(contact){
    if(contact.id) {
      updateContact(contact);
    }else {
      delete contact.id;
      createContact(contact);
    }

    setCurrentContact({});
  }
  function createContact(contact){
    createItem(contact).then((data)=>{
      setContactsList([...contactsList,data]);
    })

  }
  
  function editContact(id) {
    const contact = contactsList.find((item) => item.id === id);

    setCurrentContact(contact);
}


function updateContact(contact) {
  updateItem(contact).then((data) =>
      setContactsList(
          contactsList.map((item) => (item.id === data.id ? data : item))
      )
  );
}

  function deleteContact(id){
    deleteItem(id).then(()=>{
      setContactsList(contactsList.filter((item)=>item.id!==id));
    });
  }

  
  return (
    <div className='container'>
      <List 
      contacts={contactsList} 
      onDelete={deleteContact}
      onEdit={editContact}/>
      <Form onSave={saveContact} contact={currentContact}/> 
    </div>
  )
}

export default App;