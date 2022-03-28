import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import WcIcon from "@mui/icons-material/Wc";
import PanToolIcon from "@mui/icons-material/PanTool";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import "../style/CadastroCliente.css";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import InputCamera from "./InputCamera";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const InputsIconCliente = () => {
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
    <InputCamera/>
      <div id="contInputsPet">
        <Input
          label="Nome"
          id="nome"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
        <Input
          label="Sobrenome"
          id="sobrenome"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div id="contInputStretch">
        <Input
          label="Email"
          id="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div id="contInputsPet">
        <Input
          label="Senha"
          id="senha"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
        <Input
          label="Confirmar Senha"
          id="confirmarSenha"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOpenIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div id="contInputsPet">
        <Input
          label="Moradia"
          id="moradia"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
        <Input
          label="Telefone"
          id="telefone"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CallIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div id="contInputsPet">
        <Input
          label="CPF"
          id="cpf"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AssignmentIndIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
           <select id="InputsContainerSelectCliente">
          <option disabled selected>
            Selecione um genêro
          </option>
          <option>Masculino</option>
          <option>Femininio</option>
          <option>Não Binario</option>
        </select>
      </div>
    </>
  );
};

export default InputsIconCliente;
