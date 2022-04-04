import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import "./style/ContainerInputsLogin.css";
import { createSvgIcon } from "@mui/material/utils";

const InputsLogin = () => {
  return (
    <>
      <div className="containerInputsLogin">
        <div id="InputsLogin">
          <AccountCircle id="iconInputLabelLogin" />
          <input
            label="Nome"
            id="nome"
            className="inputLogin"
            placeholder="Digite seu email"
          />
        </div>
        <div>
          <LockIcon id="iconInputLabelLogin" />
          <input
            label="Email"
            type="password"
            id="email"
            className="inputLogin"
            placeholder="Digite sua senha"
          />
        </div>
        <div id="containerButton">
          <input
            value="Entre Agora"
            type="submit"
            id="buttonProximo"
            className="button"
          />
        </div>
      </div>
    </>
  );
};

export default InputsLogin;