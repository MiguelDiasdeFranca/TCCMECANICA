import logo from './logo.png';

import './landing.scss'
import imgsobrenos from './imgsobrenos.svg'
import imagemcrinha from './imagemcarinha.svg'
import wpp from './wpp.png'
import insta from './instagram.png'
import facebook from './facebook.png'
import funilaria from './funilaria.svg'
import alinhamento from './alinhamento.svg'
import macanicageral from './mecanicageral.svg'
import trocadeoleo from './trocadeoleo.svg'


import { Link } from "react-router-dom";


export default function App() {
  return (
    <div className="App">

      <div className='cabecalho'>

        <img src={logo} className="logoempresa" alt="logo" />

        <a href="">home</a>
        <a href="">sobre nós</a>
        <a href="">F.A.Q</a>
        <button>faça seu agendamento</button>




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

      <div class="sobrenos-container">
        <div class="sobre-nos">
          <div class="sobre-titulo">
            <img class="icone-sobre" src={imgsobrenos} alt="Ícone sobre nós" />
            <h1 className='titulao'>Sobre Nós</h1>
          </div>
          <div class="descricao">
            <p>
              <strong>Rodando Seguro</strong> foi fundada em 2000 por Laura Martins,
              uma apaixonada mecânica automotiva com uma visão clara: transformar
              a manutenção de veículos em uma experiência que garanta não apenas
              a qualidade dos serviços, mas também a segurança e a confiança dos
              motoristas.
            </p>
          </div>
        </div>

        <div class="imagem-mecanico">
          <img class="capa1" src={imagemcrinha} alt="Mecânico trabalhando" />
        </div>
      </div>

      <div className='qualquercoisa'>

        <div class="services-container">
          <h1>Nossos Serviços</h1>
          <div class="services-grid">
            <div class="service-item">
              <img src={alinhamento} alt="Alinhamento"/>
                <p>Alinhamento</p>
            </div>
            <div class="service-item">
              <img src={funilaria} alt="Funilaria"/>
                <p>Funilaria</p>
            </div>
            <div class="service-item">
              <img src={macanicageral} alt="Mecânica geral"/>
                <p>Mecânica geral</p>
            </div>
            <div class="service-item">
              <img src={trocadeoleo} alt="Troca de óleo"/>
                <p>Troca de óleo</p>
            </div>
          </div>

          <button class="contact-button">Entre em contato</button>

          <div class="social-icons">
            <img className='wpp' src={wpp} alt="wpp"/>
            <img className='instagram' src={insta} alt="instagram"/>
            <img className='face'src={facebook} alt="face"/>
            </div>
          </div>
        </div>

      <div className='loc'>
        <h1>onde é nossa oficina?</h1>
      </div>

      <div className='maps'>
  
      b
      </div>



      </div>
      
     


  )

}