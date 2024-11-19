import React, { useState } from 'react';
import './App.scss';
import empresa from './imgempresa.png';
import pessoa from './pessoa.png';
import cadeado from './cadeado.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login2() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  async function entrar() {
    const usuario = {
      "nome": nome,
      "senha": senha
    };

    const url = `http://localhost:5035/entrar`; 
    try {
      let resp = await axios.post(url, usuario);

      if (resp.data.erro) {
        alert(resp.data.erro);
      } else {
        localStorage.setItem('USUARIO', JSON.stringify(resp.data.usuario));
        localStorage.setItem('TOKEN', resp.data.token);
        navigate('/adm'); 
      }
    } catch (error) {
      alert("Ocorreu um erro na autenticação.");
    }
  }

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
        <input 
          type="text" 
          placeholder="Nome" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
        />
      </div>

      <div className="imageml">
        <img src={cadeado} alt="Ícone de cadeado" className="icons" />
        <input 
          type={passwordVisible ? 'text' : 'password'} 
          placeholder="Senha" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
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
        <button className="login" onClick={entrar}>Fazer login</button>
      </div>
    </div>
  );
}

