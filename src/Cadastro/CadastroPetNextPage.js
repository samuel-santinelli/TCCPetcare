import "./style/CadastroPet.css";
import HomePet from "../Home/HomePet";
import Footer from "../footer/Footer";
import InputButton from "./button/InputButton";
import InputsPetNextPage from "./inputs/ConteudoInputsPetNextPage";

function CadastroPetNextPage() {
  return (
    <form class="containerMainPet" id="containerMainPet">
      <HomePet />
      <div id="containerInputsPet" class="containerInputsPet">
        <h1>Cadastre seu pet ja procure um cuidador!</h1>
        
        <InputsPetNextPage />
        <InputButton />
        <Footer />
      </div>
    </form>
  );
}

export default CadastroPetNextPage;
