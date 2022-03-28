import React from "react";
import "../style/CadastroPet.css";
import PetsIcon from "@mui/icons-material/Pets";
import InputCamera from "./InputCamera";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "../style/InputCheckbox.css";
import { pink } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const InputsPetNextPage = () => {
  const Input = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        height: 70,
        width: 390,
        borderColor: "#f28907",
        borderRadius: 10,
        // qualquer outra classe css aqui
      },
      "&:hover fieldset": {
        borderColor: "f28907",
        fonstSize: "14rem",
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
          id="nomePet"
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
      <div id="contInputsPetCheckbox">
        <div id="contInputCheckbox">
          <label class="labelInputCheckboxCuidador">
            Possui alguma deficiência?
            <input type="checkbox" />
            <span class="checkmarkCuidador"></span>
          </label>
        </div>
        <div id="contInputCheckbox">
          <label class="labelInputCheckboxCuidador">
            Seu PET é castrado?
            <input type="checkbox" />
            <span class="checkmarkCuidador"></span>
          </label>
        </div>
      </div>
      <div>
        <div class="containerSelectPeso">
          <h3>PORTE</h3>
          <div>
            <div class="containerInputsSelectPeso">
              <label class="containerSelectPesoMarked">
                <input type="radio" checked="checked" name="radio" class="radioPeso" />
                <div id="peso5kg"/>
                <span class="checkmarkPeso"></span>
              </label>
              <label class="containerSelectPesoMarked">
                <input type="radio" name="radio" class="radioPeso"/>
                <div id="peso10kg"/>
                <span class="checkmarkPeso"></span>
              </label>
              <label class="containerSelectPesoMarked">
                <input type="radio" name="radio" class="radioPeso"/>
                <div id="peso20kg"/>
                <span class="checkmarkPeso"></span>
              </label>
              <label class="containerSelectPesoMarked">
                <input type="radio" name="radio" class="radioPeso"/>
                <div id="peso40kg"/>
                <span class="checkmarkPeso"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputsPetNextPage;
