import { TextField,Paper, Button } from '@mui/material'
import React,{useEffect, useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const VALIDATE_EMAIL = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function UsersForm() {
    const {id} = useParams();
    const {user,changeDataUser,saveUser} = useUser(id);
    
    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({});
    const isValidForm = !Object.keys(errors).length
     
    useEffect(()=>validate(user),[user]);

    const returnNavigate = useNavigate();
    
    function onInputChange(e){
    
        changeDataUser({[e.target.name]:e.target.value});
       // const updateUser = {...user,[e.target.name]:e.target.value};
        //validate(updateUser);
      } 
      function onInputBlur(e){
       setTouched({...touched,[e.target.name]: true});
      }
    

    function onFormSubmit(e){
        e.preventDefault();
        saveUser(user).then(()=>{
            returnNavigate('..')
        })
    }


    function validate(values){
      const errors = {};
      if (values.name === ''){
        errors.name = 'Name is not require';
      }
       if (values.surname === ''){
        errors.surname = 'Surname is not require';
      }
         if (values.email === ''){
        errors.email = 'Email is not require';
      }
      if (!VALIDATE_EMAIL.test(values.email)){
        errors.email = 'Email is not valid';
      }
      setErrors(errors);
    }
  return (
    <Paper>
     <form onSubmit={onFormSubmit}>
        <TextField sx={{marginBottom:3}} name="name" label="Name" value={user.name} onChange={onInputChange} onBlur={onInputBlur} helperText={touched.name && errors.name} error={touched.name && !!errors.name} fullWidth/>
        <TextField sx={{marginBottom:3}} name="surname" label="Surname" value={user.surname} onChange={onInputChange} onBlur={onInputBlur} helperText={touched.surname && errors.surname} error={touched.surname && !!errors.surname} fullWidth/>
        <TextField sx={{marginBottom:3}} name="email" label="Email" value={user.email} onChange={onInputChange} onBlur={onInputBlur} helperText={touched.email && errors.email} error={touched.email && !!errors.email} fullWidth/>
        <Button variant="contained"color="primary" type="submit" disabled={!isValidForm}>Save</Button>
        <Button variant="text"color="error"to=".."component={NavLink}>Cancel</Button>

     </form>
    </Paper>
  )
}

export default UsersForm