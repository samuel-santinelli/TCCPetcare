import "./style/stylePerfilCliente.css";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { TiHome } from "react-icons/ti";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

const PerfilCliente = (props) => {
  const [profileData, setProfileData] = useState([""]);

  const [editProfile, setEditProfile] = useState({
    nome: "",
    email: "",
    dataNascimento: "",
    endereco: "",
    bairro: "",
    numero: "",
  });
  const [petData, setPetData] = useState([""]);
  const [querystring] = useSearchParams();

  const [url, setUrl] = useState([]);
  console.log(url);

  const idCliente = querystring.get("idCliente");
  const idPet = localStorage.getItem("idPet");

  const foto =
    "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png";

  const handleEditSubmit = (e) => {
    axios
      .put(
        `http://localhost/Cuidador/Cliente/api/cliente/${idCliente}`,
        editProfile
      )
      .then((res) => {
        setEditProfile({ UpdatedAt: res.data.updatedAt });
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
            <form onSubmit={() => handleEditSubmit(editProfile)}>
              <label className="nameClienteProfile"> Seu nome</label>
              <input
                className="containerInputProfileCliente"
                value={editProfile.nome}
                onChange={(e) =>
                  setEditProfile({
                    ...editProfile,
                    nome: e.target.value,
                  })
                }
              />
              <label className="containerDetailsInputProfile">
                {profileData[0].nome}
              </label>
              <label className="nameClienteProfile"> Seu email</label>
              <input
                className="containerInputProfileCliente"
                value={editProfile.email}
                onChange={(e) =>
                  setEditProfile({
                    ...editProfile,
                    email: e.target.value,
                  })
                }
              />
              <label className="containerDetailsInputProfile">
                {profileData[0].email}
              </label>
              <label className="nameClienteProfile"> Data de Nascimento</label>
              <input
                className="containerInputProfileCliente"
                value={editProfile.dataNascimento}
                onChange={(e) =>
                  setEditProfile({
                    ...editProfile,
                    dataNascimento: e.target.value,
                  })
                }
              />
              <label className="containerDetailsInputProfile">
                {profileData[0].dataNascimento}
              </label>
              <div>
                <label className="nameClienteProfile"> Endereço</label>
                <input
                  className="containerInputProfileCliente"
                  value={editProfile.endereco}
                  onChange={(e) =>
                    setEditProfile({
                      ...editProfile,
                      endereco: e.target.value,
                    })
                  }
                />
                <label className="containerDetailsInputProfile">
                  {profileData[0].endereco}
                </label>
                <label className="nameClienteProfile"> Bairro</label>
                <input
                  className="containerInputProfileCliente"
                  value={editProfile.bairro}
                  onChange={(e) =>
                    setEditProfile({
                      ...editProfile,
                      bairro: e.target.value,
                    })
                  }
                />
                <label className="containerDetailsInputProfile">
                  {profileData[0].bairro}
                </label>
                <label className="nameClienteProfile"> Numero da Casa</label>
                <input
                  className="containerInputProfileCliente"
                  value={editProfile.numero}
                  onChange={(e) =>
                    setEditProfile({
                      ...editProfile,
                      numero: e.target.value,
                    })
                  }
                />
              <label className="containerDetailsInputProfile">
                  {profileData[0].numero}
                </label>
              </div>
              <div className="containerSaveAlteratons">
                <button
                  className="buttonSaveAlterations"
                  
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
