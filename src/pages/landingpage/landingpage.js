import "./landingpage.scss";
import BackgroundLandingpage from "../../assets/background-landingpage.png";
import Logo from "../../assets/Logo.png";
import Pix from "../../assets/pix.png";

function Landingpage() {
  return (
    <div className="landingpage">
      <img
        src={BackgroundLandingpage}
        className="background-landingpage"
        alt="background-landingpage"
      />
      <header>
        <div className="divLogo">
          <img src={Logo} alt="Logo" />
          <h2>Dolar Bank</h2>
        </div>
        <div className="divBotoes">
          <a href="/login">
            <button>Entrar</button>
          </a>
          <a href="/cadastro">
            <button>Cadastrar-se</button>
          </a>
        </div>
      </header>
      <section>
        <h1>Seja Bem-Vindo(a) ao Dolar Bank</h1>
        <div className="divMae">
          <div className="divsFilhas">
            <p>
              Crie a sua conta agora mesmo e aproveite todas as funcionalidades
              que só nós temos!
            </p>
            <p>
              Aqui nós buscamos a melhor experiência possível para nossos
              clientes visando principalmente o maior cuidado possível com o seu
              patrimônio e uma melhor agilidade para movimentar suas riquezas
            </p>
            <p>
              Ainda não é um cliente nosso? <br />
              Tá esperando o que para ter a melhor segurança possível para seu
              dinheiro? Torne-se um cliente agora mesmo:
            </p>
            <div className="divBotoes">
              <a href="/cadastro">
                <button>Cadastrar-se</button>
              </a>
              <p className="pSecundario">ou se já tiver uma conta:</p>
              <a href="/login">
                <button>Entrar</button>
              </a>
            </div>
          </div>
          <div className="divsFilhas">
            <img src={Pix} alt="pix" />
            <p>
              Nossa mais nova funcionalidade é o pix! Sempre pensando em
              agilizar a experiência de uso, agora implementamos as
              transferências pix.
            </p>
            <p>Realize um pix agora mesmo clicando abaixo:</p>
            <a href="/pix">Realizar pix</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landingpage;
