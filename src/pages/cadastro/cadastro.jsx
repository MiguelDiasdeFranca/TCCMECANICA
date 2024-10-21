import './cadastro.scss'; 

export default function Cadastro() { 


  return (
    <div className="login-container">
      <div className="login-logo">
        <img src="/logo.png" alt="Rodando Seguro" />
        <h2>Rodando Seguro</h2>
        <p>Mecânica Automotiva</p>
        <p>Seja Bem-Vindo (a) novamente</p>
      </div>
      <form className="login-form">
        <div className="input-group">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Usuário" />
        </div>
        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Senha" />
        </div>
        <div className="remember-group">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Lembrar minha senha?</label>
        </div>
        <button type="submit" className="login-btn">Fazer Login</button>
        <a href="#" className="forgot-password">Esqueci minha senha</a>
      </form>
    </div>
  );
}

