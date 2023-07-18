import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import EditProvider from './context/EditProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <EditProvider>
    <App />
  </EditProvider>
);
