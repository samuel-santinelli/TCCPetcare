import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "../style/Cadastro.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InputCamera from "./InputCamera";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const InputsIcon = () => {
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
          label="Nome"
          id="InputsContainer"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle  id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
        <Input
          label="Sobrenome"
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
          id="InputEmail"
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
          id="InputsContainer"
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOpenIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </>
  );
};

export default InputsIcon;
