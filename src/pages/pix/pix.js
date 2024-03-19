import "./pix.scss";
import Background2 from "../../assets/background2.png";
import Logo from "../../assets/Logo.png";

function Pix() {
  return (
    <div className="pix">
      <img src={Background2} className="background-pix" alt="background2" />
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
        <h1>Área Pix</h1>
        <div className="div-inputs">
          <div className="div-input">
            <label>Chave pix:</label>
            <input type="text"></input>
          </div>
          <div className="div-input">
            <label>Valor:</label>
            <input type="text" placeholder="R$"></input>
          </div>
          <div className="div-input">
            <label>Descrição:</label>
            <textarea id="input-descricao" placeholder="(Opcional)"></textarea>
          </div>
          <div className="div-input2">
            <input type="checkbox" className="input-checkbox"></input>
            <label>Repetir essa transferência</label>
          </div>
          <div className="div-input2">
            <label>Senha:</label>
            <input id="input-senha" type="password"></input>
          </div>
        </div>
        <div className="div-botoes-forms">
          <div className="div-input">
            <input id="input-submit" type="submit" value="Realizar pix"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pix;
