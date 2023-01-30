import { TextField,Paper, Button } from '@mui/material'
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';

function UsersForm() {
    const {id} = useParams();
    const {user,changeDataUser,saveUser} = useUser(id);
    const returnNavigate = useNavigate();
    
    function onInputChange(e){
        changeDataUser({[e.target.name]:e.target.value});
    }

    function onFormSubmit(e){
        e.preventDefault();
        saveUser(user).then(()=>{
            returnNavigate('..')
        })
    }
  return (
    <Paper>
     <form onSubmit={onFormSubmit}>
        <TextField name="name" label="Name" value={user.name} onChange={onInputChange} fullWidth/>
        <TextField name="surname" label="Surname" value={user.surname} onChange={onInputChange} fullWidth/>
        <TextField name="email" label="Email" value={user.email} onChange={onInputChange} fullWidth/>
        <Button variant="contained"color="primary" type="submit">Save</Button>
        <Button variant="text"color="error"to=".."component={NavLink}>Cancel</Button>

     </form>
    </Paper>
  )
}

export default UsersForm