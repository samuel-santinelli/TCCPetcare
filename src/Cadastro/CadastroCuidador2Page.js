import "./style/Cadastro2Page.css";
import InputsIconNextPage from "./inputs/ConteudoInputsNextPage";
import InputButton from "./button/InputButton";
import HomeNextPageCuidador from "./HomeNextPageCuidador";
import InputButtonCadastrar from "./button/inputButtonCadastrar";
import Footer from "./footer/Footer";

function CadastroCuidador2Page() {
  return (
    <form class="containerMainPet" id="containerMainPet">
      <HomeNextPageCuidador />
      <div id="containerInputsPet" class="containerInputsPet">
        <h1>Seja um novo Cuidador!</h1>
        <InputsIconNextPage />
        <InputButtonCadastrar />
        <Footer />
      </div>
    </form>
  );
}

export default CadastroCuidador2Page;
