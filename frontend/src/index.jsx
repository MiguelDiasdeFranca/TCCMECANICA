import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navigation from './routes';
import Administrador from './pages/adm/adm.jsx'
import App from './pages/tech/index.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Administrador/>
  </React.StrictMode>
)
