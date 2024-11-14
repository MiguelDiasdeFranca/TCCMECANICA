import logo from './logo.png';
import './landing.scss';
import imgsobrenos from './imgsobrenos.svg';
import imagemcrinha from './imagemcarinha.svg';
import wpp from './wpp.png';
import insta from './instagram.png';
import facebook from './facebook.png';
import funilaria from './funilaria.svg';
import alinhamento from './alinhamento.svg';
import mecanicageral from './mecanicageral.svg';
import trocadeoleo from './trocadeoleo.svg';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Feedback from '../../components/feedback/Feedback.jsx';
import Carrossel from '../../components/carrosel/carrosel.jsx';

export default function App() {
  const items = [
    { image: alinhamento, legend: 'Alinhamento' },
    { image: funilaria, legend: 'Funilaria' },
    { image: mecanicageral, legend: 'Mecânica Geral' },
    { image: trocadeoleo, legend: 'Troca de Óleo' },
  ];

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

      <div id="inicio" className='partebaixo invisible'>
        <div className='escrita'>
          <h1 className='pato'>Conosco Você Sempre</h1>
          <h1 className='roda'>Roda Seguro</h1>
          <h3>A mais de vinte anos exercendo nossa profissão, para que você sempre rode seguro!</h3>

          <Link to="/login2">
            <button className='botao'><h2>Fazer Login</h2></button>
          </Link>

          <Link to="/redefinirsenha">
         <h2>Redefinir senha</h2>
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
          <div className="App">
            <Carrossel items={items} />
          </div>
          <button className="contact-button">
            <a href="https://wa.me/5511937721364" target="_blank" rel="noopener noreferrer">
              Entre em contato
            </a>
          </button>

          <div className="social-icons">
            <a href="https://www.instagram.com/m.diassh" target="_blank" rel="noopener noreferrer">
              <img className='instagram' src={insta} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/MiguelDiasdeFranca" target="_blank" rel="noopener noreferrer">
              <img className='face' src={facebook} alt="Facebook" />
            </a>
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
          <Feedback nome="Juliana" desc="Adorei o serviço, extremamente rápido e eficiente" local="Parelheiros,SP"/>
          <Feedback nome="Daniel" desc="Bati o carro na estrada e o seguro chegou assim que o acionei" local="Casa Grande, SP"/>
        </div>
        <button className="send-feedback">
          <a href="https://wa.me/5511937721364" target="_blank" rel="noopener noreferrer">Envie o seu!</a>
        </button>
      </div>

      <div className="hero-section">
        <div className="content">
          <h1>O lugar para os apaixonados por carros</h1>
        </div>
      </div>

      {/* Botão para voltar ao topo */}
      <button className="back-to-top" onClick={(e) => handleScroll(e, 'inicio')}>
        <span>&#8593;</span> {/* Seta para cima */}
      </button>
    </div>
  );
}
