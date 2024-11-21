import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landingpage from './pages/landingpage/landing.jsx';
import Login2 from './pages/login2/App.jsx';
import Redefinir from './pages/redefinirsenha/redefinir.jsx';
import Senha from './pages/redefinirsenha2/index.jsx';
import Confirmacao from './pages/confirmacao/confirmacao.jsx';
import Administrador from './pages/adm/adm.jsx';
import Consultar from './pages/adm/consultarpedido/consultar.jsx';
import Consultarpedido from './pages/adm/consultarcliente/consultar.jsx';
import Consultarcliente from './pages/adm/consultarcliente/consultar.jsx';
import Alterarcliente from './pages/adm/alterarcliente/alterar.jsx';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('TOKEN');
  return token ? children : <Navigate to="/login2" />;
}

export default function Navigation() {
  return (
    <Router>
      <Routes>
    
      <Route path="/consultarclientes" element={<Consultarcliente />} />
      <Route path="/alterarcliente/:id_cliente" element={<Alterarcliente />} />
      <Route path="/consultarcliente" element={<Consultarpedido />} />
      <Route path="/consultar" element={<Consultar />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/confirmacao" element={<Confirmacao />} />
        <Route path="/redefinirsenha" element={<Redefinir />} />
        <Route path="/redefinirsenha2" element={<Senha />} />
    

        {/* Rota protegida para o Administrador */}
        <Route
          path="/adm"
          element={
            <ProtectedRoute>
              <Administrador />
            </ProtectedRoute>
          }
        />

        {/* Redireciona para a página principal se a rota não existir */}
        <Route path="/consultarclientes" element={<Consultarcliente />} />
        <Route path="/alterarcliente/:id_cliente" element={<Alterarcliente />} />
       <Route path="/consultar" element={<Consultar />} />
       <Route path="/consultarcliente" element={<Consultarcliente />} />
      </Routes>
    </Router>
  );
}
