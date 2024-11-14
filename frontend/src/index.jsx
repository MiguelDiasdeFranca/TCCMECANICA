import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navigation from './routes';
import Administrador from './pages/adm/adm.jsx'
import App from './pages/tech/index.jsx'
import Redefinir from './pages/redefinirsenha/redefinir.jsx';
import Senha from './pages/redefinirsenha2/index.jsx'
import Confirmacao from './pages/confirmacao/confirmacao.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Navigation/>
  </React.StrictMode>
)
