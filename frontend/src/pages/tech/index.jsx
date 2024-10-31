import React from 'react';
import './index.scss';
import img from './img.png'

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your form submission logic
    console.log("Form submitted!");
  };

  return (
    <div>
      {/* Primeira parte: Formulário de contato */}
      <div className="container">
        <div className="left-side">
          <div className="logo">
            <img src={img} alt="" />
          </div>
          <h2>Software sob medida</h2>
          <p>
            Desenvolvemos o software sob medida que a sua empresa precisa para crescer.
          </p>
          <p>
            Não perca mais tempo usando software ineficiente para o seu negócio. Desenvolvemos software sob medida que
            atende às suas necessidades específicas e aumenta a produtividade da sua empresa.
          </p>
        </div>

        <div className="right-side">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="company">Nome da empresa</label>
              <input type="text" id="company" name="company" required />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Número de contato</label>
              <input type="tel" id="contact" name="contact" required />
            </div>

            <div className="form-group">
              <label htmlFor="stage">Selecione o estágio da empresa</label>
              <select id="stage" name="stage" required>
                <option value="">Selecione</option>
                <option value="startup">Startup</option>
                <option value="crescendo">Crescendo</option>
                <option value="madura">Madura</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      {/* Segunda parte: Lista de times */}
      <div className="container">
        <h2>Times completos e flexíveis</h2>
        <div className="team-grid">
          {["DevOps", "Engenheiro de Dados", "Scrum Master", "QA", "Product Owner", "UX & UI", "Analista de Dados", "Product Manager", "Desenvolvedores"].map((teamMember, index) => (
            <div className="team-item" key={index}>
              <span className="checkmark">✔</span>
              {teamMember}
            </div>
          ))}
        </div>
      </div>

      {/* Diferenciais */}
      <div className="diferenciais-container">
        <header className="header">
          <img src={img} alt="Logo Techsavvy" className="logo" />
        </header>

        <h1 className="title">O que diferencia a techsavvy?</h1>

        <div className="box-container">
          <div className="box">
            <span className="check">✔</span>
            <p>Temos um time competente e capacitado para produção de qualquer tipo de site</p>
          </div>

          <div className="box">
            <span className="check">✔</span>
            <p>Utilizamos o melhor framework do mercado: React</p>
            <img src={img} alt="React Logo" className="react-logo" />
          </div>
        </div>
      </div>
    
      

        
<div className="container">
<div className='linha'></div>   
      <header className="header">
       
      </header>
      <main className="content">
        <h1>Solução Personalizada para Atender às Necessidades da sua Empresa</h1>
        <p>
          Talentos exponenciais, expertise em diversos segmentos de negócio e excelência em execução de projetos de tecnologia.
          Com a Techsavvy, sua empresa conta com profissionais altamente capacitados para desenvolver soluções digitais personalizadas
          que maximizam seu potencial de crescimento.
        </p>
        <div className="buttons">
          <button className="button">API</button>
          <button className="buttonn">Aplicativos</button>
          <button className="buttom">DevOps</button>
        </div>
        <button className="contact-button">Fale conosco</button>
      </main>
    </div>
    
    </div>




);

}





export default App;
