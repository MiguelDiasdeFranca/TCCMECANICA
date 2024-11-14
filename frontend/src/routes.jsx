import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/landingpage/landing.jsx'
import Login2 from './pages/login2/App.jsx'; 
import Redefinir from './pages/redefinirsenha/redefinir.jsx';
import Senha from './pages/redefinirsenha2/index.jsx';
import Confirmacao from './pages/confirmacao/confirmacao.jsx';


export default function Navigation() {
  return (
    <Router>
      <Routes>
      <Route path="/confirmacao" element={<Confirmacao/>} />  
      <Route path="/redefinirsenha2" element={<Senha/>} />  
        <Route path="/redefinirsenha" element={<Redefinir/>} />  
        <Route path="/" element={<Landingpage />} />
        <Route path="/login2" element={<Login2 />} />

      </Routes>
    </Router>
  );
}
