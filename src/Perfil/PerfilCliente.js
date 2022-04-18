import "./style/stylePerfilCliente.css";
import { TiHome } from "react-icons/ti";
import { BsPencil } from "react-icons/bs";

const PerfilCliente = () => {
  return (
    <div className="containerMainPerfilCliente">
      <div className="containerBannerCliente" />
      <div className="containerEditPerfil"/>
      <BsPencil className="iconPencil"/>
      <div className="containerCardPerfilCliente" />
      <div className="containerPefilClienteInfo">
        <div className="cardFotoPerfilCliente" />
        <label className="containerNamePerfilCliente">Larissa Pinheiro</label>
        <label className="containerLocationPerfilCliente">Alphaville SP</label>
      </div>
      <div className="containerInfoCardPetCuidador">
        <div className="containerPetInfoPet">
          <div className="containerFotoPerfilPet"></div>
          <label className="containerNamePerfilPet">Princesa</label>
          <label className="containerRacaPerfilPet">Labrador</label>
          <div className="containerMainInfoPet">
            <div className="containerMoradiaPerfilPetRight">
              <TiHome className="fotoMoradiaHouse" />
            </div>
            <div className="containerMoradiaName">
              <label className="containerLocationPet">Moradia</label>
              <label className="containerCityPet">Alphaville SP</label>
            </div>
            <div className="containerLastServices">
                    <input type="submit" className="buttonLastServices" value="Ultimos Serviços" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilCliente;
