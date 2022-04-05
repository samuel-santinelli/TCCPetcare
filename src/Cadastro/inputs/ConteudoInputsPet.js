import React from "react";
import "../style/CadastroPet.css";
import PetsIcon from "@mui/icons-material/Pets";
import InputCamera from "./InputCamera";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "../style/InputCheckbox.css"

const InputsPet = () => {
  return (
    <>
      <InputCamera />
      <div id="contInputsPet">
        <select id="select" className="InputsContainerSelectEspecie">
          <option disabled selected>
            Espécie
          </option>
          <option>V8.V10</option>
          <option>Femininio</option>
          <option>Não Binario</option>
        </select>
      </div>
      <div id="contInputsPet">
        <select id="InputsContainerSelect">
          <option disabled selected>
            Fase
          </option>
          <option>Filhote</option>
          <option>Adulto</option>
          <option>Sênior</option>
        </select>
        <select id="InputsContainerSelect">
          <option disabled selected>
            Raça
          </option>
          <option>Masculino</option>
          <option>Femininio</option>
          <option>Não Binario</option>
        </select>
      </div>
      <div id="containerInputCheckbox">
        <label class="labelInputCheckbox">
          Dócil
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <div class="inputCheckboxLeft">
        <label class="labelInputCheckbox">
          Temperamental
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        </div>

        <label class="labelInputCheckbox">
          Sistematico
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        </div>
        <div id="containerInputCheckbox">
          <label class="labelInputCheckbox">
            Antissocial
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="labelInputCheckbox">
            Ciúmento
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <div class="inputCheckboxLeftAcanhoso">
          <label class="labelInputCheckbox">
            Acanhoso
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          </div>
        </div>
  
      <div id="containerInputCheckbox">
        <label class="labelInputCheckbox">
          Guloso
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <div class="inputCheckboxLeftBravo">
        <label class="labelInputCheckbox">
          Bravo
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        </div>
      </div>
  
    </>
  );
};

export default InputsPet;
