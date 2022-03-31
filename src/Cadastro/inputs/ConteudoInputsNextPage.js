import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import WcIcon from "@mui/icons-material/Wc";
import PanToolIcon from "@mui/icons-material/PanTool";
import HouseIcon from "@mui/icons-material/House";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import "../style/Cadastro.css";
import InputAdornment from "@mui/material/InputAdornment";
import InputCamera from "./InputCamera";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const InputsIconNextPage = () => {
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
        borderColor: "#f28907",
        // qualquer classe p/ efeito de hover aqui
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f28907",
        // qualquer classe p/ efeito de focus aqui
      },
    },
  });

  return (
    <>
      <InputCamera />
      <div id="contInputsPet">
        <select id="InputsContainerSelect">
          <option disabled selected>
            Selecione um genêro
          </option>
          <option>Masculino</option>
          <option>Femininio</option>
          <option>Não Binario</option>
        </select>
        <AssignmentIndIcon id="iconInputLabel" />
        <input
          label="CPF"
          id="cpf"
          className="containerInputs"
          placeholder="CPF"
        />
      </div>
      <div id="contInputsPetCheckbox">
        <div id="contInputCheckbox">
          <label class="labelInputCheckboxCuidador">
            Possui Animais
            <input type="checkbox" />
            <span class="checkmarkCuidador"></span>
          </label>
        </div>
        <div id="contInputCheckbox">
          <label class="labelInputCheckboxCuidador">
            Possui Crianças?
            <input type="checkbox" />
            <span class="checkmarkCuidador"></span>
          </label>
        </div>
      </div>
      <div id="contInputsPet">
        <PanToolIcon id="iconInputLabel" />
        <input
          label="Preferências"
          id="limitacoes"
          className="containerInputLimitacoes"
          placeholder="Você possui limitações?"
        />
      </div>
      <div id="contInputsMoradia">
        <HouseIcon id="iconInputLabel" />
        <input label="Moradia" id="moradia" className="containerInputMoradia" placeholder="Aonde você reside?"/>

        <AccessibilityIcon id="iconInputLabel" />
        <input label="Preferências" id="preferencias" placeholder="Possui alguma preferência?" className="containerInputPreferencias" />
      </div>
    </>
  );
};

export default InputsIconNextPage;
