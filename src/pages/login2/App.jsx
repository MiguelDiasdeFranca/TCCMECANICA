import './App.scss'
import empresa from './imgempresa.png'
import pessoa from './pessoa.png'
import cadeado from './cadeado.jpg'


export default function Login2(){
    return(
    <div className='p1'>
        <img src={empresa} alt="" />
        <h1 className='texto'>Seja Bem-Vindo(a) novamente</h1>
        <div className='imageml'>
       <img src={pessoa} alt="" className='icons'/>  <input type="text" placeholder='nome' />
       </div> 
        <div className='imageml'>
          <img src={cadeado} alt="" className='icons' /><input type="text" placeholder='senha' />
          </div>
          <p className='texto'>Lembrar minha senha</p>
          <input type="checkbox"></input>
          <div className='botao'>
          <button>Fazer login</button>
          </div>
    </div>
    )
}