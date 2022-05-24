import "./style/stylePerfilCliente.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { TiHome } from "react-icons/ti";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

const PerfilCliente = () => {
  const [profile, setProfile] = useState([""]);

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("cliente"));
    if (profile) {
      setProfile(profile);
    }
  }, []);
  console.log(profile);

  return (
    <div className="containerMainPerfilCliente">
      <div className="containerBannerCliente" />
      <div className="containerEditPerfil" />
      <BsPencil className="iconPencil" />
      <div className="containerCardPerfilCliente" />
      <div className="containerPefilClienteInfo">
        <div className="cardFotoPerfilCliente" />
        <label className="containerNamePerfilCliente">{profile[0].nome}</label>
        <label className="containerLocationPerfilCliente">
          {profile[0].endereco}
        </label>
      </div>
      <div className="containerInfoCardPetCuidador">
        <div className="containerPetInfoPet">
          <div className="containerFotoPerfilPet"></div>
          <label className="containerNamePerfilPet"></label>
          <label className="containerRacaPerfilPet">Labrador</label>
          <div className="containerMainInfoPet">
            <div className="containerMoradiaPerfilPetRight">
              <TiHome className="fotoMoradiaHouse" />
            </div>
            <div className="containerMoradiaName">
              <label className="containerLocationPet">Moradia</label>
              <label className="containerCityPet">Alphaville SP</label>
            </div>
            <Link to={"/HistoricoCliente"}>
              <div className="containerLastServices">
                <input
                  type="submit"
                  className="buttonLastServices"
                  value="Ultimos Serviços"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilCliente;
