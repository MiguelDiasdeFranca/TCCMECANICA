import React, { useState } from 'react';
import './App.scss';
import empresa from './imgempresa.png';
import pessoa from './pessoa.png';
import cadeado from './cadeado.jpg';

export default function Login2() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='p1'>
      <img src={empresa} alt="" className='empresa' />
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
        <input 
          type="checkbox" 
          checked={passwordVisible} 
          onChange={togglePasswordVisibility} 
        />
      </div>
      <div className='senha'>
      <p className='texto'>Lembrar senha</p>
        <input type="checkbox" />
      </div>
    
      
      <div className='botao'>
        <button className='login'><strong>Fazer login</strong></button>
      </div>
    </div>
  );
}
