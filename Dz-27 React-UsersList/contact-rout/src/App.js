import {Container} from '@mui/material';
import Header from './modules/common/components/Header';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './modules/common/homePages/Home';
import UsersModule from './modules/users/pages/UsersModule';
import UsersPages from './modules/users/pages/UsersPages';
import UsersForm from './modules/users/pages/UsersForm';

function App() {
  return <Container maxWidth="md">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/users" element={<UsersModule/>}>
          <Route path='' element={<UsersPages/>}/>
          <Route path=":id" element={<UsersForm/>}/>
        </Route>
      </Routes>
  </Container>;


}

export default App;
