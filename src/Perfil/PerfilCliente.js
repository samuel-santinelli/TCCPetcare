import "./style/stylePerfilCliente.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { TiHome } from "react-icons/ti";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

const PerfilCliente = (props) => {
  const [profile, setProfile] = useState([""]);
  const [pet, setPet] = useState([""]);

  const imagePet = window.localStorage.getItem("imagePet");
  const imageCliente = window.localStorage.getItem("imageCliente").toString();
  const bannerCLiente =
    "https://png.pngtree.com/thumb_backfh260background20210207pngtree-simple-black-solid-color-background-image_556932jpg";
  const foto =
    "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png";

  console.log("a foto do perfil é", imageCliente);

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

  const imgRef = useRef();
  const [imagemProfile, setImagemProfile] = useState();

  function handleImageClienteProfile(e, url, callback) {
    if (e.target.files[0]) {
      const imagem = (imgRef.current.src = URL.createObjectURL(
        e.target.files[0]
      ));
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "blob";
      window.localStorage.setItem("imageBannerCliente", imagem);
    }
    setImagemProfile(e.target.files[0]);
    console.log("A imagem é", imagemProfile);
  }

  return (
    <>
      <Link to={"../"}>
        <div className="icon-close-home-profile">x</div>
      </Link>
      <div className="containerMainPerfilCliente">
        <div className="containerInputBanner">
          <input
            type="file"
            className="inputBanner"
            onChange={handleImageClienteProfile}
          />
          <div className="containerPencilBanner">
            <BsPencil className="iconPencil" color="green" />
          </div>
        </div>
        <img
          className="containerBannerCliente"
          src={localStorage.getItem("imageBannerCliente")}
          ref={imgRef}
          alt=""
        />

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
            />
            <label className="nameClienteProfile"> Seu email</label>
            <input
              className="containerInputProfileCliente"
              value={profile[0].email}
            />
            <label className="nameClienteProfile"> Data de Nascimento</label>
            <input
              className="containerInputProfileCliente"
              value={profile[0].dataNascimento}
            />
            <div>
              <label className="nameClienteProfile"> Endereço</label>
              <input
                className="containerInputProfileCliente"
                value={profile[0].endereco}
              />
              <label className="nameClienteProfile"> Bairro</label>
              <input
                className="containerInputProfileCliente"
                value={profile[0].endereco}
              />
              <label className="nameClienteProfile"> Numero da Casa</label>
              <input
                className="containerInputProfileCliente"
                value={profile[0].numero}
              />
            </div>
            <div className="containerSaveAlteratons">
              <button className="buttonSaveAlterations">
                Salvar Alterações
              </button>
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
