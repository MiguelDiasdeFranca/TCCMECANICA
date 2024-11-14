import React, { useState } from 'react';
import './App.scss';
import empresa from './imgempresa.png';
import pessoa from './pessoa.png';
import cadeado from './cadeado.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

export default function Login2() {
  const [passwordVisible, setPasswordVisible] = useState(false); 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="p1">
      <Link to="/">
        <div className="voltar">
          <i className="fas fa-arrow-left"></i>
        </div>
      </Link>

      <img src={empresa} alt="Logo da empresa" className="empresa1" />
      <h1 className="txto">Seja Bem-Vindo(a) novamente</h1>

      <div className="imageml">
        <img src={pessoa} alt="Ícone de usuário" className="icons" />
        <input type="text" placeholder="Nome" />
      </div>

      <div className="imageml">
        <img src={cadeado} alt="Ícone de cadeado" className="icons" />
        <input 
          type={passwordVisible ? 'text' : 'password'} 
          placeholder="Senha" 
        />
      </div>

      <div className="senha1">
        <p className="txto">Mostrar senha</p>
        <input 
          className="inputao"
          type="checkbox" 
          checked={passwordVisible} 
          onChange={togglePasswordVisibility} 
        />
      </div>

      <div className="senha2">
        <p className="txto">Lembrar senha</p>
        <input className="inputao" type="checkbox" />
      </div>

      <div className="botao">
        <button className="login">Fazer login</button>
      </div>
    </div>
  );
}
