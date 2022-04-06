import "./style/CadastroPet.css";
import InputsPet from "./inputs/ConteudoInputsPet";
import HomePet from "../Home/HomePet";
import Footer from "../footer/Footer";
import InputButtonCadastrar from "./button/inputButtonCadastrar";

function CadastroPet() {
  return (
    <form class="containerMainPet" id="containerMainPet">
      <HomePet />
      <div id="containerInputsPet" class="containerInputsPet">
        <h1>Cadastre seu pet ja procure um cuidador!</h1>
        
        <InputsPet />

        <Footer />
      </div>
    </form>
  );
}

export default CadastroPet;
