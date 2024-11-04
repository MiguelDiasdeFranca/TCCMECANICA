import './index.scss'
import logo from './imgempresa.png'

export default function Senha(){

return(


<div className='tudao'>


    <img src={logo }alt="" />



    <div className='quadrado'>
        <div className='botao'>
        <h1>Recuperar conta</h1>

        <hr />

        <input className='miguellito' type="text" placeholder='Insira a nova senha ' />
        <input className='miguellito' type="text" placeholder='confirme a senha' />

        <button>redefinir denha</button>
        </div>

    </div>


</div>

)

}