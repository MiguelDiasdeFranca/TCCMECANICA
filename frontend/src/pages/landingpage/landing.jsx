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
import { useEffect } from "react";
import { Link } from "react-router-dom";



export default function App() {
 
  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Elemento com ID ${sectionId} não encontrado.`);
    }
  };

  const handleScrollAnimation = () => {
    const elements = document.querySelectorAll(".invisible");
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) { 
        el.classList.add("visible");
      }
    });
  };

  useEffect(() => {
    
    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation(); 

    return () => window.removeEventListener("scroll", handleScrollAnimation); 
  }, []);

  return (
    <div className="App">
      <div className='cabecalho'>
        <img src={logo} className="logoempresa" alt="logo" />
        <a href="#inicio" onClick={(e) => handleScroll(e, 'inicio')}>Home</a>
        <a href="#sobrenos" onClick={(e) => handleScroll(e, 'sobrenos')}>Sobre Nós</a>
        <a href="#nossosservicos" onClick={(e) => handleScroll(e, 'nossosservicos')}>Nossos Serviços</a>
        <a href="#localizacao" onClick={(e) => handleScroll(e, 'localizacao')}>Onde nos localizamos?</a>
        <a href="#feedback" onClick={(e) => handleScroll(e, 'feedback')}>Feedbacks</a>
        <button className='B'><h4>Faça seu agendamento</h4></button>
      </div>

      <div id="inicio" className='partebaixo invisible'> {}
        <div className='escrita'>
          <h1 className='pato'>Conosco Você Sempre</h1>
          <h1 className='roda'>Roda Seguro</h1>
          <h3>A mais de vinte anos exercendo nossa profissão, para que você sempre rode seguro!</h3>

          <Link to="/login2">
            <button className='botao'><h2>Fazer Login</h2></button>
          </Link>

          <Link to="/login">
            <p className='patinho'>Novo aqui? <strong>faça seu cadastro</strong></p>
          </Link>
        </div>
      </div>

      <div id="sobrenos" className="sobrenos-container invisible">
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

      <div id="nossosservicos" className='qualquercoisa invisible'>
        <div className="services-container">
          <h1>Nossos Serviços</h1>
          <div className="services-grid">
            <div className="service-item">
              <img src={alinhamento} alt="Alinhamento" />
              <p>Alinhamento</p>
            </div>
            <div className="service-item">
              <img src={funilaria} alt="Funilaria" />
              <p>Funilaria</p>
            </div>
            <div className="service-item">
              <img src={macanicageral} alt="Mecânica geral" />
              <p>Mecânica geral</p>
            </div>
            <div className="service-item">
              <img src={trocadeoleo} alt="Troca de óleo" />
              <p>Troca de óleo</p>
            </div>
          </div>
          <button className="contact-button">Entre em contato</button>
          <div className="social-icons">
            <img className='wpp' src={wpp} alt="wpp" />
            <img className='instagram' src={insta} alt="instagram" />
            <img className='face' src={facebook} alt="face" />
          </div>
        </div>
      </div>

      <div id="localizacao" className='mapao invisible'>
        <div className='loc'>
          <h1>Onde é nossa oficina?</h1>
        </div>
        <div className='maps'>
          <iframe
            className='mapinha'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8777803353596!2d-46.71050582541721!3d-23.68032836597226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce502d2289a843%3A0x14406b17b30d0174!2sInstituto%20Social%20Nossa%20Senhora%20de%20F%C3%A1tima!5e0!3m2!1spt-BR!2sbr!4v1729903884982!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div id="feedback" className="feedbacks invisible">
        <h2>Feedbacks</h2>
        <div className="feedback-cards">
          <div className="feedback-card">
            <p>"Como sou mulher não sei dirigir direito, e acabei batendo o carro, mas o serviço se seguro chegou bem rápido e cheguei segura em casa"</p>
            <div className="feedback-user">
              <span className="user-info"><strong>Juliana</strong> Parelheiros, SP</span>
              <span className="user-icon">🚗</span>
            </div>
          </div>
          <div className="feedback-card">
            <p>"O carro não pegava de jeito nenhum, era a bomba de gasolina, levaram o carro para a oficina deles e me entregaram o carro no dia seguinte antes do almoço ainda, ótimo serviço."</p>
            <div className="feedback-user">
              <span className="user-info"><strong>Richard</strong> Grajaú, SP</span>
              <span className="user-icon">🚗</span>
            </div>
          </div>
        </div>
        <button className="send-feedback">Envie o seu!</button>
      </div>

      <section className="hero-section invisible">
        <div className="hero-content">
          <h1>O lugar para os apaixonados por carros</h1>
          <a href="#contato" className="contact-button">Entre em contato</a>
        </div>
      </section>
    </div>
  );
}
