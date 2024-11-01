import './index.scss'
import logo from './imgempresa.png';

export default function Senha(){
    return(


        <div className='senha123'>

            <div className='capa'>
            <img src={logo} alt="logo" />
            </div>

            <div className='quadrado'>

                <h1 className='guri'>
                    Recuperar Senha
                </h1>

                <input type="text"  placeholder='insira a senha nova '/>
                <input type="text" placeholder='confirme a senha'/>
                <button className='botao123456'>Redefinir senha</button>


            </div>


        </div>

    )
}