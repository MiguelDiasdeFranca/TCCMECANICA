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
        <button className='B'>faça seu agendamento</button>




      </div>

      <div className='partebaixo'>
        <div className='escrita'>


          <h1>Conosco Você Sempre <h1 className='roda'>Roda Seguro</h1></h1>
          



          <p>A mais de vinte anos exercendo nossa profissão, para que você sempre rode seguro!</p>
          <Link to="/login">
            <button className='botao'>Fazer cadastro</button>
            <p>Novo aqui? faça seu cadastro</p>

          </Link>

        </div>


      </div>

      <div className="sobrenos-container">
        <div className="sobre-nos">
          <div className="sobre-titulo">
            <img className="icone-sobre" src={imgsobrenos} alt="Ícone sobre nós" />
            <h1 className='titulao'>Sobre Nós</h1>
          </div>
          <div className="descricao">
            <p className='paragrafo'>
              <strong>Rodando Seguro</strong> foi fundada em 2000 por Laura Martins,
              uma apaixonada mecânica automotiva com uma visão clara: transformar
              a manutenção de veículos em uma experiência que garanta não apenas
              a qualidade dos serviços, mas também a segurança e a confiança dos
              motoristas.
            </p>
          </div>
        </div>

        <div className="imagem-mecanico">
          <img className="capa1" src={imagemcrinha} alt="Mecânico trabalhando" />
        </div>
      </div>

      <div className='qualquercoisa'>

        <div className="services-container">
          <h1>Nossos Serviços</h1>
          <div className="services-grid">
            <div className="service-item">
              <img src={alinhamento} alt="Alinhamento"/>
                <p>Alinhamento</p>
            </div>
            <div className="service-item">
              <img src={funilaria} alt="Funilaria"/>
                <p>Funilaria</p>
            </div>
            <div className="service-item">
              <img src={macanicageral} alt="Mecânica geral"/>
                <p>Mecânica geral</p>
            </div>
            <div className="service-item">
              <img src={trocadeoleo} alt="Troca de óleo"/>
                <p>Troca de óleo</p>
            </div>
          </div>

          <button className="contact-button">Entre em contato</button>

          <div className="social-icons">
            <img className='wpp' src={wpp} alt="wpp"/>
            <img className='instagram' src={insta} alt="instagram"/>
            <img className='face'src={facebook} alt="face"/>
            </div>
          </div>
        </div>
        <div className='mapao'>

      <div className='loc'>
        <h1>onde é nosssa oficina ?
        </h1>
      </div>

      <div className='maps'>
        <p className='nomeloc'></p>
  
      <iframe className='mapinha' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8777803353596!2d-46.71050582541721!3d-23.68032836597226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce502d2289a843%3A0x14406b17b30d0174!2sInstituto%20Social%20Nossa%20Senhora%20de%20F%C3%A1tima!5e0!3m2!1spt-BR!2sbr!4v1729903884982!5m2!1spt-BR!2sbr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

        </div>


        <div className="feedbacks">
    <h2>Feedbacks</h2>
    <div className="feedback-cards">
      <div className="feedback-card">
        <p>
          "Precisei de socorro à noite, estava sem bateria quando fui pegar o carro na rua saindo de um restaurante, o rapaz chegou super rápido, muito atencioso e resolveu ali na hora o problema."
        </p>
        <div className="feedback-user">
          <span className="user-icon">🚗</span>
          <span className="user-info">
            <strong>Julia</strong> Parelheiros, Sp
          </span>
        </div>
      </div>

      <div className="feedback-card">
        <p>
          "O carro não pegava de jeito nenhum, era a bomba de gasolina, levaram o carro para a oficina deles e me entregaram o carro no dia seguinte antes do almoço ainda, ótimo serviço."
        </p>
        <div className="feedback-user">
          <span className="user-icon">🚗</span>
          <span className="user-info">
            <strong>Richard</strong> Grajaú, Sp
          </span>
        </div>
      </div>
    </div>
    <button className="send-feedback">Envie o seu!</button>
  </div>





      </div>
      
     


  )

}