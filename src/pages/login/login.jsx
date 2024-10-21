import './login.scss'
import imgempresa1 from './imgempresa.png'

export default function login() {

  return (

    <div className='login-inteiro'>

     


        <div classname='imagem' >

          <img src={imgempresa1} alt="" />


        </div>

        <div className='partedireita'>

         <img src="" alt="" /> <input type="text" placeholder='nome' />
          <input type="text" placeholder='e-mail' />
          <input type="text" placeholder='senha' />
          <input type="text" placeholder='repita sua senha ' />

        </div>

     

    </div>


  )

}

