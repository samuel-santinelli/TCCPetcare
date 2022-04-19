import React from "react";
import "../style/CadastroPet.css";
import PetsIcon from "@mui/icons-material/Pets";
import InputCamera from "./InputCamera";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "../style/InputCheckbox.css";

const InputsPet = () => {
  return (
    <>
      <form>
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
          <label className="labelInputCheckbox">
            Dócil
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <div className="inputCheckboxLeft">
            <label className="labelInputCheckbox">
              Temperamental
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>

          <label className="labelInputCheckbox">
            Sistematico
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div id="containerInputCheckbox">
          <label className="labelInputCheckbox">
            Antissocial
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="labelInputCheckbox">
            Ciúmento
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <div className="inputCheckboxLeftAcanhoso">
            <label className="labelInputCheckbox">
              Acanhoso
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>

        <div id="containerInputCheckbox">
          <label className="labelInputCheckbox">
            Guloso
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <div className="inputCheckboxLeftBravo">
            <label className="labelInputCheckbox">
              Bravo
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
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
      </form>
    </>
  );
};

export default InputsPet;
