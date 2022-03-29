import "./style/CadastroCliente.css";
import ConteudoInputsCliente from './inputs/ConteudoInputsCliente'
import HomeCliente from './HomeCliente';
import InputButton from "./button/InputButton";
import Footer from "./footer/Footer";

function CadastroCliente() {
  return (
    <div className="containerMainPet" id="containerMainPet" >
      <HomeCliente/>
      {/* conteudo das inputs */}
      <div id="containerInputsPet" className="containerInputsPet">
      <h1>Bem vindo a página de Cadastro!</h1>
        <ConteudoInputsCliente/>
        {/* <InputButton /> */}
        <Footer />
      </div>
    </div>
  );
}

export default CadastroCliente;
