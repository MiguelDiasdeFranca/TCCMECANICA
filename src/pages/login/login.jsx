import './login.scss'
import imgempresa from './imgempresa.png'
import cadeado from './cadeado.jpg'
import pessoa from './pessoa.png'
import email from './email.png'


export default function Login() {

  return (

    <div className='login-inteiro'>

     


        <div className='imagem' >

          <img src={imgempresa} alt="" className='empresa' />

        </div>

        <div className='partedireita'>

        <div className='imageml'>
       <img src={pessoa} alt="" className='icons'/>  <input type="text" placeholder='nome' />
       </div> 
       <div className='imageml'>
         <img src={email} alt="" className='icons' /> <input type="text" placeholder='e-mail' />
         </div>
         <div className='imageml'>
          <img src={cadeado} alt="" className='icons' /><input type="text" placeholder='senha' />
          </div>
          <div className='imageml'>
          <img src={cadeado} alt="" className='icons'/><input type="text" placeholder='repita sua senha ' />
          </div>

 
 
          <div className='doisbotoes'>
          <div className='botao'>
            <button>Criar conta</button>
          </div>
          <div className='botao'>
          <button>Fazer login</button>
          </div>

        </div>
      </div>
       
    </div>


  )

}

