import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navigation from './routes';
import Administrador from './pages/adm/adm';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Administrador />
  </React.StrictMode>
)
