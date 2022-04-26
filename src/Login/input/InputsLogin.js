import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import "./style/ContainerInputsLogin.css";

function InputsLogin(){

  const handleLoginSubmit = (userLogin) => {
    axios
      .post("http://localhost/Cuidador/Cliente/api/cliente", {
      login: userLogin.login,
      senha: userLogin.email,
      }).then((res) => {
        console.log(res.data)
    })
  };

  return (
    <>
    <form onSubmit={handleLoginSubmit}>
      <div className="containerInputsLogin">
        <div id="InputsLogin">
          <AccountCircle id="iconInputLabelLogin" />
          <input
            label="Email"
            id="emailLogin"
            className="inputLogin"
            placeholder="Digite seu email"
          />
        </div>
        <div>
          <LockIcon id="iconInputLabelLogin" />
          <input
            label="Senha"
            type="password"
            id="senhaLogin"
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
      </form>
    </>
  );
};

export default InputsLogin;
