import React, { useEffect, useState } from "react";
import axios from "axios";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BusinessIcon from '@mui/icons-material/Business';
import PanToolIcon from "@mui/icons-material/PanTool";
import HouseIcon from "@mui/icons-material/House";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import "../style/Cadastro.css";
import InputAdornment from "@mui/material/InputAdornment";
import InputCamera from "./InputCamera";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const InputsIconNextPage = () => {
  
  const [userCuidador, setUserCuidador] = useState({
    cpf: "",
    foto: "",
    biografia: "",
    possuiAnimais: "",
    possuiCriancas: "",
    preferencias: "",
    moradia: "",
    limitacoes: "",
    avaliacao: "",
    idSexoHost: "",
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
          <label className="labelInputCheckboxCuidador">
            Possui Animais
            <input type="checkbox" />
            <span className="checkmarkCuidador"></span>
          </label>
        </div>
        <div id="contInputCheckbox">
          <label className="labelInputCheckboxCuidador">
            Possui Crianças?
            <input type="checkbox" />
            <span className="checkmarkCuidador"></span>
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
        <BusinessIcon id="iconInputLabelLeft" />
        <input
          id="cep"
          className="containerInputMoradia"
          placeholder="Informe seu cep"
          type="number"
          required
        />
        
        <HouseIcon id="iconInputLabelLeft" />
        <input
          label="Moradia"
          id="moradiaCuidador"
          className="containerInputMoradia"
          placeholder="Aonde você reside?"
          required
        />
        <div>
        <div className="containerPreferences">
          <AccessibilityIcon id="iconInputLabel" />
          <input
            label="Preferências"
            id="preferencias"
            placeholder="Possui alguma preferência?"
            className="containerInputPreferencias"
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default InputsIconNextPage;
