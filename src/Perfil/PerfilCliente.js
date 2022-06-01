import "./style/stylePerfilCliente.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { TiHome } from "react-icons/ti";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

const PerfilCliente = (props) => {
  const [profile, setProfile] = useState([""]);
  const [pet, setPet] = useState([""]);

  const imagePet = window.localStorage.getItem("imagePet");
  const imageCliente = window.localStorage.getItem("imageCliente");

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("cliente"));
    if (profile) {
      setProfile(profile);
    }
  }, []);
  console.log("os dados do cliente", profile);

  useEffect(() => {
    const pet = JSON.parse(localStorage.getItem("pets"));
    if (pet) {
      setPet(pet);
    }
  }, []);

  console.log("os dados do pet", pet);

  const foto =
    "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png";

  return (
    <>
      <Link to={"../"}>
        <div className="icon-close-home-profile">x</div>
      </Link>
      <div className="containerMainPerfilCliente">
        <div className="containerBannerCliente" />
        <div className="containerEditPerfil" />
        <BsPencil className="iconPencil" />

        <div className="containerPefilClienteInfo">
          <img
            className="cardFotoPerfilCliente"
            alt="foto de Perfil"
            src={imageCliente}
          />
          <div className="containerInfoProfile">
            <label className="nameClienteProfile"> Seu nome</label>
            <input
              className="containerInputProfileCliente"
              value={profile[0].nome}
              disabled
            />
            <label className="nameClienteProfile"> Seu email</label>
            <input
              className="containerInputProfileCliente"
              value={profile[0].email}
              disabled
            />
            <label className="nameClienteProfile"> Data de Nascimento</label>
            <input
              className="containerInputProfileCliente"
              value={profile[0].dataNascimento}
              disabled
            />
            <div>
              <label className="nameClienteProfile"> Endereço</label>
              <input
                className="containerInputProfileCliente"
                value={profile[0].endereco}
                disabled
              />
              <label className="nameClienteProfile"> Bairro</label>
              <input
                className="containerInputProfileCliente"
                value={profile[0].endereco}
                disabled
              />
              <label className="nameClienteProfile"> Numero da Casa</label>
              <input
                className="containerInputProfileCliente"
                value={profile[0].numero}
                disabled
              />
            </div>
          </div>
        </div>

        <div className="containerInfoCardPetCuidador">
          <div className="containerPetInfoPet">
            <img
              className="containerFotoPerfilPet"
              src={imagePet}
              alt="foto de perfil do pet"
            />
            <label className="containerNamePerfilPet">{pet.nome}</label>
            <label className="containerRacaPerfilPet">{pet.raca}</label>
            <div className="containerBioProfilePet">{pet.descricao}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilCliente;
