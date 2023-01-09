import React from 'react';
import './Form.css';
function Form({onSave,contact}) {
  function onFormSubmit(e){
    e.preventDefault();
    const form = e.target.elements;
    onSave({
      id:form.id.value,
      name:form.name.value,
      surname:form.surname.value,
      email:form.email.value,
    });

    e.target.reset();
  }
  return (
    
   <div className='row'>
   <form onSubmit={onFormSubmit}>
    <div className='input columns'>
      <input name="id" type="hidden" defaultValue={contact.id} />
      <input name='name' placeholder='name' type='text' defaultValue={contact.name}/>
    </div>
    <div className='input columns'>
      <input name="surname" type="text" placeholder='surname'  defaultValue={contact.surname}/>
      </div>
      <div className='input columns'>
      <input name="email" type="text" placeholder='email' defaultValue={contact.email}/>
      </div>
      <div className='input button'>
        <button className='buttonSave'>Save</button>
      </div>
      </form>
      </div>
  )

}

export default Form
