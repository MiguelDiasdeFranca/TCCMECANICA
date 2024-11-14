import './confirmacao.scss';
import imgempresa from './imgempresa.png';
import { useRef } from 'react'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

export default function Confirmacao() {
 
  const inputRefs = useRef([]);

  const handleKeyUp = (e, index) => {
    if (e.key >= '0' && e.key <= '9' || e.key === 'Enter') {
      
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  return (
    <div className='confir'>
      <div className='imagem'>
        <img src={imgempresa} alt="" />
        <h1>Insira o código de verificação enviado em seu e-mail</h1>
      </div>
      <div className='inputs'>
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            className='inputa'
            type="text"
            maxLength="1" // Limita a apenas 1 caractere
            onKeyUp={(e) => handleKeyUp(e, index)}
            ref={el => inputRefs.current[index] = el} // Armazena referência
          />
        ))}
      </div>
      <Link to="/redefinirsenha">
<div className="voltar">
  <i className="fas fa-arrow-left" style={{ fontSize: '30px', color: 'white' }}></i> 
</div>
</Link>
    </div>
  );
}
