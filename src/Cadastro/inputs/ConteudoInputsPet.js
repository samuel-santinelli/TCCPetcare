import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/CadastroPet.css";
import PetsIcon from "@mui/icons-material/Pets";
import InputCamera from "./InputCamera";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "../style/InputCheckbox.css";

const InputsPet = () => {
  const [pet, setPet] = useState([]);

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
      <form>
        <InputCamera />
        <div id="contInputsPet">
          <select
            id="select"
            className="InputsContainerSelectEspecie"
            value={pet.selectEspecie}
          >
            <option disabled selected>
              Qual o tipo de Espécie?
            </option>
            {pet.map((pet, keyVacina) => (
              <option key={keyVacina}>{pet.nomeEspecie}</option>
            ))}
          </select>
        </div>
        <div id="contInputsPet">
          <select id="InputsContainerSelect" value={pet.selectFase}>
            <option disabled selected>
              Fase
            </option>
            {pet.map((pet, keyVacina) => (
              <option key={keyVacina}>{pet.tipo}</option>
            ))}
          </select>
          <select id="InputsContainerSelect" value={pet.selectRaca}>
            <option disabled selected>
              Raça
            </option>
            {pet.map((pet, keyVacina) => (
              <option key={keyVacina}>{pet.nome}</option>
            ))}
          </select>
        </div>
        <div className="contInputsPet">
          <input className="inputObs" type="text" placeholder="Descreva o comportamento do seu pet"/>
        </div>
        <div id="containerButton">
          <input
            value="Cadastrar"
            type="submit"
            id="buttonCadastrar"
            className="button"
          />
        </div>
      </form>
    </>
  );
};

export default InputsPet;
