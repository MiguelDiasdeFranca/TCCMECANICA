import React, { useState, useEffect } from 'react';
import './login.scss';
import imgempresa from './imgempresa.png';
import cadeado from './cadeado.jpg';
import pessoa from './pessoa.png';
import email from './email.png';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);

  // Efeito de fade-in ao carregar o componente
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`login-inteiro ${isVisible ? 'fade-in' : ''}`}>
      <Link to="/">
        <div className="voltar">
          <i className="fas fa-arrow-left" style={{ fontSize: '30px', color: 'white' }}></i>
        </div>
      </Link>

      <div className="imagem">
        <img src={imgempresa} alt="" className="empresa" />
      </div>

      <div className="partedireita">
        <div className="imageml">
          <img src={pessoa} alt="" className="icons" />
          <input type="text" placeholder="nome" />
        </div>
        <div className="imageml">
          <img src={email} alt="" className="icons" />
          <input type="text" placeholder="e-mail" />
        </div>
        <div className="imageml">
          <img src={cadeado} alt="" className="icons" />
          <input type="password" placeholder="senha" />
        </div>
        <div className="imageml">
          <img src={cadeado} alt="" className="icons" />
          <input type="password" placeholder="repita sua senha" />
        </div>

        <div className="doisbotoes">
          <div className="botao">
            <button className="criarcontinha">Criar conta</button>
          </div>
          <Link to="/login2">
            <div className="botao">
              <button className="botaozera">Fazer login</button>
            </div>
          </Link> 
        </div>
      </div>
    </div>
  );
}
