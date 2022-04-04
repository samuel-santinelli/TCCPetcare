import {useState} from "react";
import axios from "axios"
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "../style/Cadastro.css";
import "../style/CadastroCliente.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InputCamera from "./InputCamera";
import InputAdornment from "@mui/material/InputAdornment";
import validarSenhaForca from "./validation/validation";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const InputsIcon = () => {
  const [userCuidador, setUserCuidador] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
  })

  return (
    <>
      <div id="containerInput">
        <div id="containerBorderImage">
          <input
            type="file"
            name="inputImage"
            className="inputImage"
            id="foto"
          />
          <CameraAltIcon id="iconInputCamera" />
        </div>
      </div>
      <div id="contInputsPet">
        <AccountCircle id="iconInputLabel" />
        <input
          label="Nome"
          id="nome"
          className="containerInputNome"
          placeholder="Nome"
        />
        <AccountCircle id="iconInputLabel" />
        <input
          label="Sobrenome"
          id="sobrenome"
          className="containerInputSobrenome"
          placeholder="Sobrenome"
        />
      </div>
      <div id="contInputStretch">
        <AlternateEmailIcon id="iconInputLabel" />
        <input
          label="Email"
          id="email"
          className="containerInputEmail"
          placeholder="Email"
        />
      </div>
      <div id="contInputsPet">
        <LockIcon id="iconInputLabel" />
        <input
          label="Senha"
          id="senha"
          type="password"
          onKeyUp={validarSenhaForca}
          className="containerInput"
          placeholder="Senha"
        />

        <LockOpenIcon id="iconInputLabel" />
        <input
          label="Confirmar Senha"
          id="confirmarSenha"
          type="password"
          className="containerInputConfirmarSenha"
          placeholder="Confirmar Senha"
        />
      </div>
      <div id="impSenha"></div>
      <div id="impForcaSenha"></div>
      <div id="erroSenhaForca"></div>
      <div id="contInputsPet"></div>
    </>
  );
};

export default InputsIcon;
