import logo from './logo.png';
import logo1 from './logo1.png'
import './App.scss';

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

          <button className='botao'>Faça seu login</button>
              <p>Novo aqui? faça seu cadastro</p>

        </div>
        <div className='imagem12'>


          <img className='imagemcarro' src={logo1} alt="logo1" />
          <h1>oiiiiiiii</h1>
        </div>

      </div>

  
    </div>
  );
}


