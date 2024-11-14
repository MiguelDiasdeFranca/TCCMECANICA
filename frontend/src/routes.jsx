import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landingpage from './pages/landingpage/landing.jsx';
import Login2 from './pages/login2/App.jsx';
import Redefinir from './pages/redefinirsenha/redefinir.jsx';
import Senha from './pages/redefinirsenha2/index.jsx';
import Confirmacao from './pages/confirmacao/confirmacao.jsx';
import Administrador from './pages/adm/adm.jsx';

// Função para proteger a rota
function ProtectedRoute({ children }) {
  const token = localStorage.getItem('TOKEN');
  return token ? children : <Navigate to="/login2" />;
}

export default function Navigation() {
  return (
    <Router>
      <Routes>
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
