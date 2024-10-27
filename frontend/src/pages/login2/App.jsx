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

    <div className='p1'>
        <Link to="/">
      <div className='voltar'>
  <i className="fas fa-arrow-left" style={{ fontSize: '30px', color: 'white' }}></i> 
  </div>
</Link>

        
      <img src={empresa} alt="" className='empresa1' />
      <h1 className='texto'>Seja Bem-Vindo(a) novamente</h1>
      
      <div className='imageml'>
        <img src={pessoa} alt="" className='icons' />  
        <input type="text" placeholder='nome' />
      </div> 
      
      <div className='imageml'>
        <img src={cadeado} alt="" className='icons' />
        <input 
          type={passwordVisible ? 'text' : 'password'} 
          placeholder='senha' 
        />
      </div>
      <div className='senha'>
        <p className='texto'>Mostrar senha</p>
        <input className='inputao'
          type="checkbox" 
          checked={passwordVisible} 
          onChange={togglePasswordVisibility} 
        />
      </div>
      <div className='senha'>
      <p className='texto'>Lembrar senha</p>
        <input className='inputao' type="checkbox" />
      </div>
    
      
      <div className='botao'>
        <button className='login'>Fazer login</button>
      </div>
    </div>
   
  );
}
