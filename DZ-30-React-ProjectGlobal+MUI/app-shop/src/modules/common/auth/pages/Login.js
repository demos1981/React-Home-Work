import React from 'react';
import {Formik,Form} from 'formik';
import useAuth from '../hooks/useAuth';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import useAuthorize from '../hooks/useAuthorize';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SuperTextField from '../components/form/SuperTextField';

import { Navigate } from 'react-router-dom';

const initValue = {username: '',password: '',role: 'admin'};

function Login() {

  const {login} = useAuth();
  const isAuthorize = useAuthorize();


  function onSubmit({username,password, role}) {
      login(username,password, role);
      console.log(username,password);
  }

  return (
    <Formik initValue={initValue} onSubmit={onSubmit}>

  <Form noValidate>
  {isAuthorize && <Navigate replace={true} to="/"/>}
    <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box  sx={{ mt: 1 }}>
            <SuperTextField
              margin="normal"
              required
              fullWidth
              label="Username"
              name="username"
              autoFocus
            />
            <SuperTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
            />
        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
           
          </Box>
        </Box>
      </Form>
    </Formik>
  );

}

export default Login;

