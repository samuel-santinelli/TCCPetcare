import "./style/Cadastro.css";
import InputsIcon from "./inputs/ConteudoInputs";
import Home from "../Home/Home";
import Footer from "../footer/Footer";
import InputButton from "./button/InputButton";

function CadastroCuidador() {
  return (
    <form className="containerMainPet" id="containerMainPet">
      <Home />
      <div id="containerInputsPet" className="containerInputsPet">
        <h1>Seja um novo Cuidador!</h1>
        
        <InputsIcon />
        {/* Conteudo da validação da input senha */}
        <div id="impSenha"></div>
        <div id="impForcaSenha"></div>
        <div id="erroSenhaForca"></div>
        <InputButton />
        <Footer />
      </div>
    </form>
  );
}

export default CadastroCuidador;
