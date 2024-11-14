import './redefinir.scss'
import imagemempresa from  './imgempresa.png'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Redefinir(){
    return(
                <div className='redefinir'>

            <div className='acima'>

<img className='capa' src={imagemempresa} alt="logo" />

        <h1>para iniciar o processo de recuperação de senha , digite  o email do <br />
 titular da conta:</h1>

            </div>

<div className='embaixo'>
    

    <input className='digit' type="text" placeholder='E-mail' />
<Link to ="/confirmacao">
    <button>
        avançar
    </button>
    </Link>
</div>

<div className='fundo'>
<h3>nao consegue recuperar sua senha ? </h3>
<h3 className='ponto'>entre em contato com a nossa equipe </h3>

</div>

<Link to="/">
<div className="voltar">
  <i className="fas fa-arrow-left" style={{ fontSize: '30px', color: 'white' }}></i> 
</div>
</Link>
    </div>
               


    )
}