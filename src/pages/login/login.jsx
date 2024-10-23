import './login.scss';
import imgempresa from './imgempresa.png';
import cadeado from './cadeado.jpg';
import pessoa from './pessoa.png';
import email from './email.png';
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className='login-inteiro'>
      <div className='imagem'>
        <img src={imgempresa} alt="" className='empresa' />
      </div>

      <div className='partedireita'>
        <div className='imageml'>
          <img src={pessoa} alt="" className='icons' />
          <input type="text" placeholder='nome' />
        </div> 
        <div className='imageml'>
          <img src={email} alt="" className='icons' />
          <input type="text" placeholder='e-mail' />
        </div>
        <div className='imageml'>
          <img src={cadeado} alt="" className='icons' />
          <input type="password" placeholder='senha' />
        </div>
        <div className='imageml'>
          <img src={cadeado} alt="" className='icons' />
          <input type="password" placeholder='repita sua senha' />
        </div>

        <div className='doisbotoes'>
          <div className='botao'>
            <button>Criar conta</button>
          </div>
          <Link to="/login2">
            <div className='botao'>
              <button>Fazer login</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

