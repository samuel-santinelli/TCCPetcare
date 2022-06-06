import "./style/stylePerfilCliente.css";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { TiHome } from "react-icons/ti";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

const PerfilCliente = (props) => {
  const [profileData, setProfileData] = useState([""]);

  const [editProfile, setEditProfile] = useState(
    {
      nome: "",
    },
  );
  const [petData, setPetData] = useState([""]);
  const [querystring] = useSearchParams();

  const [url, setUrl] = useState([]);
  console.log(url);

  const idCliente = querystring.get("idCliente");
  const idPet = localStorage.getItem("idPet");

  const foto =
    "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png";

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost/Cuidador/Cliente/api/cliente/${idCliente}`,{
        nome: ""
      }
      )

      .then((res) => {
        setEditProfile(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost/Cuidador/Cliente/api/cliente/${idCliente}`,
        profileData
      )
      .then((res) => {
        setProfileData(res.data);
        setUrl(res.data.foto);
      })
      .catch(() => {
        console.log("Deu erro ao buscar os dados do cliente");
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost/Cuidador/Cliente/api/pets/${idPet}`, petData)
      .then((res) => {
        setPetData(res.data);
      })
      .catch(() => {
        console.log("Deu erro ao buscar os dados do pet");
      });
  }, []);
  console.log("os dados do pet", petData);
  console.log("os dados do cliente", profileData);

  return (
    <>
      <Link to={"../"}>
        <div className="icon-close-home-profile">x</div>
      </Link>
      <div className="containerMainPerfilCliente">
        <div className="containerInputBanner">
          <input type="file" className="inputBanner" />
          <div className="containerPencilBanner">
            <BsPencil className="iconPencil" color={"red"} />
          </div>
        </div>
        <img className="containerBannerCliente" alt="" />
        <div className="containerPefilClienteInfo">
          <img
            className="cardFotoPerfilCliente"
            alt="foto do cliente"
            src={foto}
          />
          <input className="imgIputProfile" type="file" />
          <div className="iconInputCameraProfile">
            <BsPencil className="iconPrice" />
          </div>
          <div className="containerInfoProfile">
            <form onSubmit={() => handleEditSubmit(profileData)}>
              <label className="nameClienteProfile"> Seu nome</label>
              <input
                className="containerInputProfileCliente"
                value={profileData[0].nome}
                onChange={(e) =>
                  setEditProfile({
                    ...editProfile,
                    nome: e.target.value,
                  })
                }
              />
              <label className="nameClienteProfile"> Seu email</label>
              <input
                className="containerInputProfileCliente"
                value={profileData[0].email}
                onChange={(e) => setProfileData(e.target.value)}
              />
              <label className="nameClienteProfile"> Data de Nascimento</label>
              <input
                className="containerInputProfileCliente"
                value={profileData[0].dataNascimento}
                onChange={(e) => setProfileData(e.target.value)}
              />
              <div>
                <label className="nameClienteProfile"> Endereço</label>
                <input
                  className="containerInputProfileCliente"
                  value={profileData[0].endereco}
                  onChange={(e) => setProfileData(e.target.value)}
                />
                <label className="nameClienteProfile"> Bairro</label>
                <input
                  className="containerInputProfileCliente"
                  value={profileData[0].bairro}
                  onChange={(e) => setProfileData(e.target.value)}
                />
                <label className="nameClienteProfile"> Numero da Casa</label>
                <input
                  className="containerInputProfileCliente"
                  value={profileData[0].numero}
                  onChange={(e) => setProfileData(e.target.value)}
                />
              </div>
              <div className="containerSaveAlteratons">
                <button
                  className="buttonSaveAlterations"
                  onClick={handleEditSubmit}
                >
                  Salvar Alterações
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="containerInfoCardPetCuidador">
          <div className="containerPetInfoPet">
            <img
              className="containerFotoPerfilPet"
              src={foto}
              alt="Foto do pet"
            />
            <div className="iconInputCameraProfilePet">
              <BsPencil className="iconPrice" />
            </div>
            <label className="containerNamePerfilPet">{petData[0].nome}</label>
            <label className="containerRacaPerfilPet">{petData[0].raca}</label>
            <div className="containerBioProfilePet">{petData[0].descricao}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilCliente;
