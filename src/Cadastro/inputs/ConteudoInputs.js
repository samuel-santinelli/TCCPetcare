import {useState, useEffect} from "react";
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
  console.log(userCuidador);
  const handleUserCuidadorSubmit = (userCuidador) => {
    axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=utf-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios
    .post("http://localhost/Cuidador/Cliente/api/cliente", userCuidador)
    .then((res) => console.log(res.data));
  }
  const listElements = () => {
    axios
    .get("http://localhost/Cuidador/Cliente/api/cliente")
    .then((res) => console.log(res.data));
  }
  useEffect(() => {listElements()}, [])

  return (
    <>
    <form onSubmit={() => handleUserCuidadorSubmit(userCuidador)}>
      <div id="containerInput">
        <div id="containerBorderImage">
          <input
            type="file"
            name="inputImage"
            className="inputImage"
            id="foto"
            value={userCuidador.foto}
            onChange={(e) => setUserCuidador({ ...userCuidador, foto: e.target.value})}
          />
          <CameraAltIcon id="iconInputCamera" />
        </div>
      </div>
      <div id="contInputsPet">
        <AccountCircle id="iconInputLabel" />
        <input
          id="nome"
          className="containerInputNome"
          placeholder="Nome"
          value={userCuidador.nome}
          onChange={(e) => setUserCuidador({ ...userCuidador, nome: e.target.value})}
        />
        <AccountCircle id="iconInputLabel" />
        <input
          label="Sobrenome"
          id="sobrenome"
          className="containerInputSobrenome"
          placeholder="Sobrenome"
          value={userCuidador.sobrenome}
          onChange={(e) => setUserCuidador({ ...userCuidador, sobrenome: e.target.value})}
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
          id="senha"
          type="password"
          onKeyUp={validarSenhaForca}
          className="containerInput"
         placeholder="Senha"
         value={userCuidador.senha}
         onChange={(e) => setUserCuidador({ ...userCuidador, senha: e.target.value})}
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
      <div id="containerButton">
          <input
            value="Próxima Pagina"
            type="submit"
            name="inputConfirmarSenha"
            id="buttonCadastrar"
            className="button"
          />
        </div>
      </form>
    </>
  );
};

export default InputsIcon;
