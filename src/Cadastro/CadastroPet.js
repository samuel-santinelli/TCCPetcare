import "./style/CadastroPet.css";
import InputsPet from "./inputs/ConteudoInputsPet";
import HomePet from "../Home/HomePet";
import Footer from "../footer/Footer";
import InputButtonCadastrar from "./button/inputButtonCadastrar";

function CadastroPet() {
  return (
    <div className="containerMainPet" id="containerMainPet" >
      <HomePet />
      <div id="containerInputsPet" className="containerInputsPet">
        <h1>Cadastre seu pet e já procure um cuidador!</h1>
        
        <InputsPet />

        <Footer />
      </div>
      </div>
  );
}

export default CadastroPet;
