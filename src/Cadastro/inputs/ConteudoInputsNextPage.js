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

        <Input
          label="CPF"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AssignmentIndIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
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
        <Input
          label="Preferências"
          id="InputsContainerPreferences"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PanToolIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div id="contInputsMoradia">
        <Input
          label="Moradia"
          id="InputsContainer"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HouseIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
        <Input
          label="Preferências"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccessibilityIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </>
  );
};

export default InputsIconNextPage;
