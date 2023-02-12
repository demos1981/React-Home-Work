import Landing from './modules/user/landingPage/pages/Landing';
import './App.css';
import { Routes,Route,Navigate } from 'react-router-dom';
import Dashboard from './modules/admin/dashboard/pages/Dashboard';
import Login from './modules/common/auth/pages/Login';
import Logout from './modules/common/auth/pages/Logout';
import SignUp from './modules/common/auth/pages/SignUp';
import AdminApp from './modules/admin/AdminApp';
import Users from './modules/admin/users/pages/Users';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
   <Container component="main" maxWidth="xs">
    <CssBaseline />
  <Routes>
            <Route path="" element={<Landing/>}/>

               <Route path="auth">
                  <Route path="" element={<Navigate replace={true} to="login" />}/>

                  <Route path="login" element={<Login/>}/>
                  <Route path="logout" element={<Logout/>}/>
                  <Route path="signup" element={<SignUp/>}/>
              </Route>

         <Route path="admin" element={<AdminApp/>}>
           <Route path="" element={<Navigate replace={true} to="dashboard" />}/>
           <Route path="dashboard" element={<Dashboard/>}/>
           <Route path="users" element={<Users/>}/>

         </Route>

  </Routes>
  </Container>
  );
}

export default App;
