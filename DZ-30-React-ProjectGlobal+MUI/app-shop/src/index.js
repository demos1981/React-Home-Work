import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/system';

import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import AuthProvider from './modules/common/auth/providers/AuthProvider';
import theme from './modules/theme/Theme'


//const value = "Welcome";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
  
    <BrowserRouter>
        <AuthProvider >
          <App />
        </AuthProvider>
    </BrowserRouter>
    
    </ThemeProvider>
  </React.StrictMode>
);


//local-signin
//oAuth2