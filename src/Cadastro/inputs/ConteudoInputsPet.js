import React from "react";
import "../style/CadastroPet.css";
import PetsIcon from "@mui/icons-material/Pets";
import InputCamera from "./InputCamera";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "../style/InputCheckbox.css"
import { pink } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const InputsPet = () => {
  const Input = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        height: 70,
        width: 390,
        borderColor: "#f28907",
        // qualquer outra classe css aqui
      },
      "&:hover fieldset": {
        borderColor: "f28907",
        fonstSize: '14rem',
        // qualquer classe p/ efeito de hover aqui
      },
      "&.Mui-focused fieldset": {
        borderColor: "f28907",
        // qualquer classe p/ efeito de focus aqui
      },
    },
  });

  return (
    <>
      <InputCamera />
      <div id="contInputsPet">
        <Input
          label="Nome Do Pet"
          id="InputsContainer"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PetsIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
        <select id="InputsContainerSelect">
          <option disabled selected>
            Vacinas
          </option>
          <option>Masculino</option>
          <option>Femininio</option>
          <option>Não Binario</option>
        </select>
      </div>
      <div id="contInputsPet">
        <select id="InputsContainerSelect">
          <option disabled selected>
            Fase
          </option>
          <option>Masculino</option>
          <option>Femininio</option>
          <option>Não Binario</option>
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
