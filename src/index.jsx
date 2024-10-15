import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/landing page/App';
import Administrador from './pages/adm/adm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Administrador/>
  </React.StrictMode>
);

