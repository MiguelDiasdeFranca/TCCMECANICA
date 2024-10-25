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
          <Link to="/login">
            <button className='botao'>Fazer cadastro</button>
            <p>Novo aqui? faça seu cadastro</p>

          </Link>

        </div>


      </div>

      <div className='partesobrenos'>

        <div className='parte1'>


          <img className='sobre' src={imgsobrenos} alt="" /> <h2>sobre Nós</h2>

          <p>Rodando Seguro foi fundada em 2000 <br /> por Laura Martins, uma apaixonada <br /> mecânica automotiva com uma visão <br /> clara: transformar a manutenção de <br /> veículos em uma experiência que <br /> garanta não apenas a qualidade dos <br /> serviços, mas também a segurança e a <br /> confiança dos motoristas..</p>

        </div>


        

      </div>

      



    </div>








  );
}


