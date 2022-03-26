import "./style/CadastroPet.css";
import InputsPet from "./inputs/ConteudoInputsPet";
import HomePet from "./HomePet";
import Footer from "./footer/Footer";
import InputButtonCadastrar from "./button/inputButtonCadastrar";

function CadastroPet() {
  return (
    <form class="containerMainPet" id="containerMainPet">
      <HomePet />
      <div id="containerInputsPet" class="containerInputsPet">
        <h1>Cadastre seu pet ja procure um cuidador!</h1>
        
        <InputsPet />
        <InputButtonCadastrar />
        <Footer />
      </div>
    </form>
  );
}

export default CadastroPet;
