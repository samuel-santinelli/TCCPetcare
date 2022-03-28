import "./style/CadastroCliente.css";
import InputsIconCliente from './inputs/ConteudoInputsCliente'
import HomeCliente from './HomeCliente';
import InputButton from "./button/InputButton";
import Footer from "./footer/Footer";

function CadastroCliente() {
  return (
    <div class="containerMainPet" id="containerMainPet" >
      <HomeCliente/>
      {/* conteudo das inputs */}
      <div id="containerInputsPet" class="containerInputsPet">
      <h1>Bem vindo a página de Cadastro!</h1>
        <InputsIconCliente/>
        {/* <InputButton /> */}
        <Footer />
      </div>
    </div>
  );
}

export default CadastroCliente;
