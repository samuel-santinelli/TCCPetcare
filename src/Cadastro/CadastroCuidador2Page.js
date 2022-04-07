import "./style/Cadastro2Page.css";
import InputsIconNextPage from "./inputs/ConteudoInputsNextPage";
import InputButton from "./button/InputButton";
import HomeNextPageCuidador from "../Home/HomeNextPageCuidador";
import InputButtonCadastrar from "./button/inputButtonCadastrar";
import FooterNextPage from "../footer/FooterNextPage";

function CadastroCuidador2Page() {
  return (
    <form className="containerMainPet" id="containerMainPet">
      <HomeNextPageCuidador />
      <div id="containerInputsPet" className="containerInputsPet">
        <h1>Seja um novo Cuidador!</h1>
        <InputsIconNextPage />
        <FooterNextPage />
      </div>
    </form>
  );
}

export default CadastroCuidador2Page;
