import logo from './logo.png';
import logo1 from './logo1.png'
import './landing.scss'
import imgsobrenos from './imgsobrenos.svg'
import imagemcrinha from './imagemcarinha.svg'
import { Link } from "react-router-dom";


export default function App() {
  return (
    <div className="App">

      <div className='cabecalho'>

        <img src={logo} className="logoempresa" alt="logo" />

        <a href="">home</a>
        <a href="">sobre nós</a>
        <a href="">F.A.Q</a>
        <a href=""><button>faça seu agendamento</button></a>




      </div>

      <div className='partebaixo'>
        <div className='escrita'>


          <h1>Conosco Você Sempre </h1>
          <h1 className='roda'>Roda Seguro</h1>



          <p>A mais de vinte anos exercendo nossa profissão, para que você sempre rode seguro!</p>
    <Link to ="/login">
          <button className='botao'>Fazer cadastro</button>
          <p>Novo aqui? faça seu cadastro</p>
          
    </Link>

        </div>

      
      </div>

      <div className='partesobrenos'></div>
          <div className='pt2'>
        <div className='pt1'>

      <img className='sobrenos' src={imgsobrenos} alt="imgsobrenos" />
      <h2>Sobre Nós</h2>
        </div>

      <p className='para'>Lorem ipsum dolor sit, amet <br />consectetur adipisicing elit. Qui, quisquam praesentium pariatur consequuntur consequatur ut eum rem totam possimus <br />voluptates <br />expedita mollitia. Maxime magni sed sapiente quaerat, enim reiciendis assumenda?</p>
      </div>
        <div className='mecanico'>
        <img className='cara' src={imagemcrinha} alt = 'cara'/>
        </div>
    

        <div className='imagem12'>


          <img className='imagemcarro' src={logo1} alt="logo1" />
          <h1>oiiiiiiii</h1>
        </div>

      </div>








  );
}


