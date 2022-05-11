import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../style/CadastroPet.css";
import InputCamera from "./InputCamera";
import "../style/InputCheckbox.css";

// const id = 44;

const InputsPet = ({id}) => {

  const [pet, setPet] = useState({
    nome: "",
    deficiencia: 1,
    descricao: "",
    castrado: 1,
    foto: "",
    dataNascimento: "",
    idRaca: 2,
    idFase: 1,
    idEspecie: 1,
    comportamento: "",
    idVacina: 2,
    idPorte: 1,
    nomePorte: "",
    idCliente: id,
  });
  const navigate = useNavigate();
  console.log("o id é ", id);


  const handleSubmitPet = (pet) => {
    axios
      .post("http://localhost/Cuidador/Cliente/api/pets", pet)
      .then((res) => console.log(res.data));
      navigate("/Agendamento")
  };
  const listPets = () => {
    axios
      .get("http://localhost/Cuidador/Cliente/api/pets")
      .then((res) => console.log(res.data));
  };
  useEffect(() => {
    listPets();
  }, []);

  console.log(pet);

  const [infoPet, setInfoPet] = useState([]);
  const [infoRaca, setInfoRaca] = useState([]);
  const [infoClient, setInfoClient] = useState([]);

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

  useEffect(() => {
    axios
      .get("http://localhost/Cuidador/Cliente/api/cliente")
      .then((res) => {
        setInfoClient(res.data);
      })
      .catch(() => {
        console.log("Deu erro");
      });
  }, []);

  return (
    <>
      <form onSubmit={() => handleSubmitPet(pet)}>
        <div id="containerScroll">
          <InputCamera />
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
            <input
              className="containerInputNomePet"
              type="date"
              value={pet.dataNascimento}
              onChange={(e) =>
                setPet({ ...pet, dataNascimento: e.target.value })
              }
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
          {/* <div className="contInputsPet">
            <input
              className="inputObs"
              type="number"
              placeholder="Descreva o comportamento do seu pet"
              value={infoClient.idCliente}
              onChange={(e) => setPet({ ...pet, idCliente: e.target.value })}
            />
          </div> */}
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
