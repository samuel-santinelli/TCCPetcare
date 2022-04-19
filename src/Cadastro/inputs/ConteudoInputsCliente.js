import React, { useEffect, useState } from "react";
import axios from "axios";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";
import "../style/CadastroCliente.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import validarSenhaForca from "./validation/validation";

const ConteudoInputsCliente = () => {
  const nome = document.getElementById("nome");
  const dataNascimento = document.getElementById("dataNascimento");
  const email = document.getElementById("email");
  const senha = document.getElementById("senhaClient");
  const confirmarSenha = document.getElementById("confirmarSenhaControl");
  const button = document.getElementById("buttonCadastrarCliente");

  const [user, setUser] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    foto: "",
    email: "",
    senha: "",
    telefone: "",
    idSexo: 1,
  });

  console.log(user);

  const handleUserSubmit = (user) => {
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios
      .post("http://localhost/Cuidador/Cliente/api/cliente", user)
      .then((res) => console.log(res.data));
  };

  function validate(e) {
    const passwordValue = senha.value.trim();
    const confirmPasswordValue = confirmarSenha.value.trim();

    if (senha.value !== confirmarSenha.value) {
      errorValidation(senha);
      senha.focus();
      e.preventDefault();
    }
  }

  function errorValidation(inputError) {
    const formError = inputError.parentElement;

    formError.className = "form-control error";
  }

  const listElements = () => {
    axios
      .get("http://localhost/Cuidador/Cliente/api/cliente")
      .then((res) => console.log(res.data));
  };
  useEffect(() => {
    listElements();
  }, []);
  return (
    <>
      <form onSubmit={() => handleUserSubmit(user)}>
        <div id="containerInput">
          <div id="containerBorderImage">
            <input
              type="file"
              name="inputImage"
              className="inputImage"
              id="foto"
              value={user.foto}
              onChange={(e) => setUser({ ...user, foto: e.target.value })}
            />
            <CameraAltIcon id="iconInputCamera" />
          </div>
        </div>
        <div id="contInputsPet">
          <AccountCircle id="iconInputLabel" />
          <input
            label="Nome"
            id="nome"
            value={user.nome}
            className="containerInputNome"
            placeholder="Nome"
            onChange={(e) => setUser({ ...user, nome: e.target.value })}
          />

          <input
            type="date"
            id="dataNascimento"
            value={user.dataNascimento}
            className="inputCalendar"
            onChange={(e) =>
              setUser({ ...user, dataNascimento: e.target.value })
            }
          />
        </div>
        <div id="contInputStretch">
          <AlternateEmailIcon id="iconInputLabel" />
          <input
            label="Email"
            id="email"
            type="email"
            value={user.email}
            className="containerInputEmail"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div id="contInputsControl">
          <div className="form-control">
            <LockIcon id="iconInputLabelControl" />
            <input
              label="Senha"
              type="password"
              id="senhaClient"
              value={user.senha}
              className="containerInputSenhaControl"
              placeholder="Senha"
              onChange={(e) => setUser({ ...user, senha: e.target.value })}
            />
          </div>
          <div className="form-control">
          <LockOpenIcon id="iconInputLabelControl" />
          <input
            label="Confirmar Senha"
            id="confirmarSenhaControl"
            type="password"
            className="containerInputSenhaControl"
            placeholder="Confirmar Senha"
          />
          </div>
        </div>
        <div id="impSenha"></div>
        <div id="impForcaSenha"></div>
        <div id="erroSenhaForca"></div>
        <div id="contInputsPet">
          <LocationOnIcon id="iconInputLabel" />
          <select
            id="moradia"
            className="containerInput"
            value={user.idSexo}
            placeholder="Selecione seu genêro"
            onChange={(e) => setUser({ ...user, idSexo: e.target.value })}
          >
            <option value={user.Masculino}>Masculino</option>
            <option value={user.Masculino}>Feminino</option>
          </select>
          <CallIcon id="iconInputLabel" />
          <input
            label="Telefone"
            id="telefone"
            type="number"
            value={user.telefone}
            className="containerInputTelefone"
            placeholder="Telefone"
            onChange={(e) => setUser({ ...user, telefone: e.target.value })}
          />
        </div>
        <div id="contInputsPet">
          <AssignmentIndIcon id="iconInputLabel" />
          <input
            label="CPF"
            id="cpf"
            type="number"
            value={user.cpf}
            className="containerInputCpf"
            placeholder="CPF"
            onChange={(e) => setUser({ ...user, cpf: e.target.value })}
          />
        </div>

        <div id="containerButton">
          <input
            value="Cadastrar"
            type="submit"
            name="inputConfirmarSenha"
            id="buttonCadastrarCliente"
            className="button"
            onClick={validate}
          />
        </div>
      </form>
    </>
  );
};

export default ConteudoInputsCliente;
