import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import "./style/ContainerInputsLogin.css";
import { createSvgIcon } from "@mui/material/utils";

const InputsLogin = () => {
  const [login, setLogin] = useState({
    email: "",
    senha: "",
  });
  console.log(login);

  const handleLoginSubmit = (login) => {
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios
      .post("http://localhost/Cuidador/Cliente/api/cliente", login)
      .then((res) => console.log(res.data));
  };

  return (
    <>
    <form onSubmit={() => handleLoginSubmit(login)}>
      <div className="containerInputsLogin">
        <div id="InputsLogin">
          <AccountCircle id="iconInputLabelLogin" />
          <input
            label="Email"
            id="emailLogin"
            className="inputLogin"
            placeholder="Digite seu email"
            value={login.email}
            onChange={(e) => setLogin({...login, email: e.target.value})}
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
            value={login.senha}
            onChange={(e) => setLogin({...login, senha: e.target.value})}
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
