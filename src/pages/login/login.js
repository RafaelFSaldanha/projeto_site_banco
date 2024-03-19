import "./login.scss";
import Background2 from "../../assets/background2.png";
import Logo from "../../assets/Logo.png";
import Google from "../../assets/google.png";

function Login() {
  return (
    <div className="login">
      <img src={Background2} className="background-login" alt="background2" />
      <div className="div-opacidade"></div>
      <header>
        <div className="divLogo">
          <img src={Logo} alt="Logo" />
          <h2>Dolar Bank</h2>
        </div>
        <div className="divBotoes">
          <a href="/">
            <button>Voltar para a tela incial</button>
          </a>
        </div>
      </header>
      <div className="div-principal">
        <h1>Login</h1>
        <div className="div-inputs">
          <div className="div-input">
            <label>E-mail:</label>
            <input type="text"></input>
          </div>
          <div className="div-input">
            <label>Senha:</label>
            <input type="text"></input>
          </div>
          <div className="div-input2">
            <input type="checkbox" className="input-checkbox"></input>
            <label>Lembrar de mim</label>
          </div>
        </div>
        <div className="div-botoes-forms">
          <div className="div-input">
            <input id="input-submit" type="submit" value="Entrar"></input>
          </div>
          <p>Ou</p>
          <button className="botao-google">
            <img src={Google} alt="google" />
            Entrar com Google
          </button>
        </div>
        <p>Não possui cadastro ainda?</p> <a href="/cadastro">Cadastrar-se</a>
      </div>
    </div>
  );
}

export default Login;
