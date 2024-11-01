import './redefinir.scss'
import imagemempresa from  './imgempresa.png'

export default function Redefinir(){
    return(
                <div className='redefinir'>

            <div className='acima'>

<img className='capa' src={imagemempresa} alt="logo" />

        <h1>para iniciar o processo de recuperação de senha , digite  o email do <br />
 titular da conta:</h1>

            </div>

<div className='embaixo'>
    

    <input type="text" placeholder='E-mail' />

    <button>
        avançar
    </button>

</div>

<div className='fundo'>
<h3>nao consegue recuperar sua senha ? </h3>
<h3 className='ponto'>entre em contato com a nossa equipe </h3>

</div>


                </div>


    )
}