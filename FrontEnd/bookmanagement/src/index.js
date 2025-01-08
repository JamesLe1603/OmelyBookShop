import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { UserProvider } from './app/shared/components/UserContext';
import { BrowserRouter } from 'react-router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);