import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import "../style/CadastroPet.css";
import InputCamera from "./InputCamera";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "../style/InputCheckbox.css";

// const id = 44;

const InputsPet = ({ props }) => {
  const [querystring] = useSearchParams();
  // const idCliente = querystring.get("idCliente");
  const teste = querystring.get("teste");
  const idCliente = JSON.parse(localStorage.getItem("idCliente"));
  const imgRef = useRef();
  const [imagePet, setImagePet] = useState(null);

  const handleImageSubmitPet = (e) => {
    if (e.target.files[0]) {
      imgRef.current.src = URL.createObjectURL(e.target.files[0]);
      console.log(imgRef.current.src);
      window.localStorage.setItem("imagePet", imgRef.current.src)
    }
    setImagePet(e.target.files[0]);
  };
  


  console.log("ID recebido do cliente", idCliente, teste);

  const listIds = () => {
    axios.get("http://localhost/Cuidador/Cliente/api/cliente").then((res) => {
      console.log("o dono do pet é", res.data[0].id);
    });
  };

  const [pet, setPet] = useState({
    foto: "",
    nome: "",
    deficiencia: 1,
    descricao: "",
    castrado: 1,
    idRaca: 1,
    idFase: 1,
    idEspecie: 1,
    comportamento: "",
    idVacina: 1,
    idPorte: 1,
    nomePorte: "",
    idCliente: idCliente,
  });
  console.log(pet);

  const navigate = useNavigate();

  const handleSubmitPet = (pet) => {
    axios
      .post("http://localhost/Cuidador/Cliente/api/pets", pet)
      .then((res) =>
        window.localStorage.setItem("idPet", JSON.stringify(res.data.id))
      );
    navigate("/Agendamento?idCliente=" + idCliente);
  };
  const listPets = () => {
    axios
      .get("http://localhost/Cuidador/Cliente/api/pets")
      .then((res) => console.log(res.data));
  };
  useEffect(() => {
    listPets();
  }, []);

  // console.log(pet);

  const [infoPet, setInfoPet] = useState([]);
  const [infoRaca, setInfoRaca] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/Cuidador/Cliente/api/pets/listarEspecie")
      .then((res) => {
        setInfoPet(res.data);
      })
      .catch(() => {
        console.log("Deu erro");
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost/Cuidador/Cliente/api/pets/listarFase")
      .then((res) => {
        setInfoPet(res.data);
      })
      .catch(() => {
        console.log("Deu erro");
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost/Cuidador/Cliente/api/pets/listarRaca")
      .then((res) => {
        setInfoRaca(res.data);
      })
      .catch(() => {
        console.log("Deu erro");
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost/Cuidador/Cliente/api/cliente")
      .then((res) => {
        setInfoPet(res.data);
      })
      .catch(() => {
        console.log("Deu erro");
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost/Cuidador/Cliente/api/pets/listarVacinas")
      .then((res) => {
        setInfoPet(res.data);
      })
      .catch(() => {
        console.log("Deu erro");
      });
  }, []);

  return (
    <>
      <form onSubmit={() => handleSubmitPet(pet)} method="post">
        <div id="containerScroll">
        <div id="containerInput">
            <div id="containerBorderImage">
              <img className="imgPreview" alt="" ref={imgRef} />
              <input
                type="file"
                name="inputImage"
                className="inputImage"
                accept="image/jpeg, image/jpg, image/png"
                id="foto"
                onChange={handleImageSubmitPet}
                value={pet.foto}
              />

              <CameraAltIcon id="iconInputCamera" />
              
            </div>
          </div>
          <div className="contInputsPet"></div>
          <div id="contInputsPet">
            <input
              className="containerInputNomePet"
              placeholder="Qual o nome do seu pet?"
              value={pet.nome}
              onChange={(e) => setPet({ ...pet, nome: e.target.value })}
            />
          </div>
          <div id="contInputsPet">
            <select
              id="select"
              className="InputsContainerSelectEspecie"
              value={pet.idEspecie}
              onChange={(e) => setPet({ ...pet, idEspecie: e.target.value })}
            >
              {infoPet.map((pet, keyVacina) => (
                <option key={keyVacina}>{pet.nomeEspecie}</option>
              ))}
            </select>
          </div>
          <div id="contInputsPet">
            <select
              id="InputsContainerSelectPet"
              value={pet.idFase}
              onChange={(e) => setPet({ ...pet, idFase: e.target.value })}
            >
              {infoPet.map((fase, keyFase) => (
                <option key={keyFase}>{fase.tipo}</option>
              ))}
            </select>
            <select
              id="InputsContainerSelectPet"
              value={pet.idRaca}
              onChange={(e) => setPet({ ...pet, idRaca: e.target.value })}
            >
              {infoRaca.map((raca, keyRaca) => (
                <option key={keyRaca}>{raca.nomeRaca}</option>
              ))}
            </select>
          </div>
          <div className="contInputsPet">
            <input
              className="inputObs"
              type="text"
              placeholder="Descreva o comportamento do seu pet"
              value={pet.comportamento}
              onChange={(e) =>
                setPet({ ...pet, comportamento: e.target.value })
              }
            />
          </div>
          <div id="contInputsPet">
            <select
              id="InputsContainerSelectVacina"
              value={pet.idVacina}
              onChange={(e) => setPet({ ...pet, idVacina: e.target.value })}
            >
              {infoPet.map((vacina, keyVacina) => (
                <option key={keyVacina}>{vacina.nomeVacina}</option>
              ))}
            </select>
          </div>
          <div id="contInputsPetCheckbox">
            <div id="contInputCheckbox">
              <label className="labelInputCheckboxCuidador">
                Possui deficiência?
                <input
                  type="checkbox"
                  value={pet.deficiencia}
                  onChange={(e) =>
                    setPet({ ...pet, deficiencia: e.target.value })
                  }
                />
                <span className="checkmarkCuidador"></span>
              </label>
            </div>
            <div id="contInputCheckbox">
              <label className="labelInputCheckboxCuidador">
                Seu PET é castrado?
                <input
                  type="checkbox"
                  value={pet.castrado}
                  onChange={(e) => setPet({ ...pet, castrado: e.target.value })}
                />
                <span className="checkmarkCuidador"></span>
              </label>
            </div>
          </div>

          <div className="contInputsPet">
            <input
              className="inputObs"
              type="text"
              placeholder="Conte um pouco sobre o seu pet"
              value={pet.descricao}
              onChange={(e) => setPet({ ...pet, descricao: e.target.value })}
            />
          </div>
          <div id="containerButton">
            <input
              value="Cadastrar"
              type="submit"
              id="buttonCadastrar"
              className="button"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default InputsPet;
