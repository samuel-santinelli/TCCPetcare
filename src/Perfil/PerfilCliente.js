import "./style/stylePerfilCliente.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { TiHome } from "react-icons/ti";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

const PerfilCliente = (props) => {
  const [profile, setProfile] = useState([""]);
  const [pet, setPet] = useState([""]);

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("cliente"));
    if (profile) {
      setProfile(profile);
    }
  }, []);
  console.log(profile);

  useEffect(() => {
    const pet = JSON.parse(localStorage.getItem("pets"));
    if (pet) {
      setPet(pet);
    }
  }, []);
  console.log(pet);


  return (
    <>
      <Link to={"../"} id="icon-close-homeProfile">
        <div className="icon-close-home-profile">x</div>
      </Link>
      <div className="containerMainPerfilCliente">
        <div className="containerBannerCliente" />
        <div className="containerEditPerfil" />
        <BsPencil className="iconPencil" />

        <div className="containerPefilClienteInfo">
          <div className="cardFotoPerfilCliente" />
          <div className="containerInfoProfile">
            <label className="containerNamePerfilCliente">
              {profile[0].nome}
            </label>
            <label className="containerLocationPerfilCliente">
              {profile[0].email}
            </label>
          </div>
        </div>

        <div className="containerInfoCardPetCuidador">
          <div className="containerPetInfoPet">
            <div className="containerFotoPerfilPet"></div>
            <label className="containerNamePerfilPet">{pet.nome}</label>
            <label className="containerRacaPerfilPet">{pet.raca}</label>
            <div className="containerBioProfilePet">
              {pet.descricao}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilCliente;
