

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/CadastroPet.css";
import InputCamera from "./InputCamera";
import "../style/InputCheckbox.css";

const InputsPet = () => {
  const [pet, setPet] = useState({
    nome: "",
    deficiencia: "",
    descricao: "",
    castrado: 1,
    foto: "",
    dataNascimento: "",
    avaliacao: 1,
    idRaca: 2,
    idFase: 1,
    idEspecie: 1,
    idCliente: 1,
    comportamento: "",
    idVacina: 2
  });

  const handleSubmitPet = (pet) => {
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios
      .post("http://localhost/Cuidador/Cliente/api/pets", pet)
      .then((res) => console.log(res.data));
  };

  const [infoPet, setInfoPet] = useState([]);
  
useEffect(() => {
  axios
    .get("http://localhost/Cuidador/Cliente/api/pets/listarEspecie")
    .then((res) => {
      setPet(res.data);
    })
    .catch(() => {
      console.log("Deu erro");
    });
}, []);

useEffect(() => {
  axios
    .get("http://localhost/Cuidador/Cliente/api/pets/listarFase")
    .then((res) => {
      setPet(res.data);
    })
    .catch(() => {
      console.log("Deu erro");
    });
}, []);

useEffect(() => {
  axios
    .get("http://localhost/Cuidador/Cliente/api/pets/listarRaca")
    .then((res) => {
      setPet(res.data);
    })
    .catch(() => {
      console.log("Deu erro");
    });
}, []);
console.log(pet);


  return (
    <>
      <form onSubmit={handleSubmitPet(pet)}>
        <div id="containerScroll">
          <InputCamera />
          <div id="contInputsPet">
            <input
              className="containerInputNomePet"
              placeholder="Qual o nome do seu pet?"
              value={setPet.nome}
              onChange={(e) => setPet({ ...pet, nome: e.target.value })}
            />
          </div>
          <div id="contInputsPet">
            <select
              id="select"
              className="InputsContainerSelectEspecie"
              value={infoPet.selectEspecie}
            >
              <option disabled selected>
                Qual o tipo de Espécie?
              </option>
              {infoPet.map((pet, keyVacina) => (
                <option key={keyVacina}>{pet.nomeEspecie}</option>
              ))}
            </select>
          </div>
          <div id="contInputsPet">
            <select id="InputsContainerSelectPet" value={infoPet.selectFase}>
              <option disabled selected>
                Fase
              </option>
              {infoPet.map((pet, keyVacina) => (
                <option key={keyVacina}>{pet.tipo}</option>
              ))}
            </select>
            <select id="InputsContainerSelectPet" value={infoPet.selectRaca}>
              <option disabled selected>
                Raça
              </option>
              {infoPet.map((pet, keyVacina) => (
                <option key={keyVacina}>{pet.nome}</option>
              ))}
            </select>
          </div>
          <div className="contInputsPet">
            <input
              className="inputObs"
              type="text"
              placeholder="Descreva o comportamento do seu pet"
            />
          </div>
          <div id="contInputsPet">
            <select id="InputsContainerSelectVacina">
              <option disabled selected>
                Vacinas
              </option>
              <option>Masculino</option>
              <option>Femininio</option>
              <option>Não Binario</option>
            </select>
          </div>
          <div id="contInputsPetCheckbox">
            <div id="contInputCheckbox">
              <label className="labelInputCheckboxCuidador">
                Possui deficiência?
                <input type="checkbox" />
                <span className="checkmarkCuidador"></span>
              </label>
            </div>
            <div id="contInputCheckbox">
              <label className="labelInputCheckboxCuidador">
                Seu PET é castrado?
                <input type="checkbox" />
                <span className="checkmarkCuidador"></span>
              </label>
            </div>
          </div>
          <div className="containerSelectPeso">
            <h3>PORTE</h3>
            <div>
              <div className="containerInputsSelectPeso">
                <label className="containerSelectPesoMarked">
                  <input
                    type="radio"
                    checked="checked"
                    name="radio"
                    className="radioPeso"
                  />
                  <div id="peso5kg" />
                  <span className="checkmarkPeso"></span>
                </label>
                <label className="containerSelectPesoMarked">
                  <input type="radio" name="radio" className="radioPeso" />
                  <div id="peso10kg" />
                  <span className="checkmarkPeso"></span>
                </label>
                <label className="containerSelectPesoMarked">
                  <input type="radio" name="radio" className="radioPeso" />
                  <div id="peso20kg" />
                  <span className="checkmarkPeso"></span>
                </label>
                <label className="containerSelectPesoMarked">
                  <input type="radio" name="radio" className="radioPeso" />
                  <div id="peso40kg" />
                  <span className="checkmarkPeso"></span>
                </label>
              </div>
            </div>
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

