import React from 'react'
import { Button,Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';

function UserNavigate() {
  return (
    <Paper sx={{
        marginBottom:'70px',
    }}>
        <Button to="" component={NavLink}>
            Pages
        </Button>
        <Button to="add" component={NavLink}>
            Add
        </Button>
    </Paper>
  )
}

export default UserNavigate;