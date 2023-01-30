import { AppBar, Toolbar,Typography,Button } from '@mui/material'

import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return  <AppBar position="static">
     <Toolbar>
     <Typography variant="h5" component="div" flexGrow={1}>My mui</Typography>
   
     <Button  to="/" color="inherit" flexGrow={2} component={NavLink}>Home</Button>
     <Button  to="/users" color="inherit" flexGrow={2} component={NavLink}>User</Button>
     </Toolbar>
  </AppBar>
}

export default Header;