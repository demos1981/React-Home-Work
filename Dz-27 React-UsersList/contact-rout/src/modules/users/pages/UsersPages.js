import React from 'react';
import { Paper,Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Button } from '@mui/material';
import useUsersPages from '../hooks/useUsersPages';
import { NavLink } from 'react-router-dom';

function UsersPages() {
    const {users,deleteUser} = useUsersPages();
  return (
    <div>
          <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Surname</TableCell>
            <TableCell >E-mail</TableCell>
            <TableCell >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {users.map(user=>(
                <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.surname}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                        <Button variant="outlined" to={user.id} component={NavLink}>Edit</Button>
                        <Button variant="outlined" color='error'onClick={()=>deleteUser(user.id)}>Delete</Button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default UsersPages