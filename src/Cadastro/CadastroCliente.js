import "./style/CadastroCliente.css";
import ConteudoInputsCliente from './inputs/ConteudoInputsCliente'
import HomeCliente from '../Home/HomeCliente';
import InputButton from "./button/InputButton";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

function CadastroCliente() {
  return (
    <div className="containerMainPet" id="containerMainPet" >
      <HomeCliente/>
      {/* conteudo das inputs */}
      <div id="containerInputsPet" className="containerInputsPet">
      <h1>Bem vindo a página de Cadastro!</h1>
        <ConteudoInputsCliente/>
        {/* <InputButton /> */}
        <div id="containerLinkCliente">
      <Link to={"/Login"}>
      <label className="linkHaveAccount" href="">Já tem uma conta? </label>
      <label className="linkEntreAgora">Entre agora</label>
      </Link>
    </div>
      </div>
    </div>
  );
}

export default CadastroCliente;
