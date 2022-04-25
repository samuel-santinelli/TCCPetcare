import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import "./style/ContainerInputsLogin.css";

const InputsLogin = () => {
  const [userLogin, setLogin] = useState({
    login: "",
    senha: "",
  });
  console.log(userLogin);

  const handleLoginSubmit = (userLogin) => {
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios
      .post("http://localhost/Cuidador/Cliente/api/cliente", userLogin)
      .then((res) => console.log(res.data));
  };

  useEffect(() => {
    axios
      .get("http://localhost/Cuidador/Cliente/api/cliente")
      .then((res) => {
        setLogin(res.data);
      })
      .catch(() => {
        console.log("Deu erro");
      });
  }, []);

  return (
    <>
    <form onSubmit={() => handleLoginSubmit(userLogin)}>
      <div className="containerInputsLogin">
        <div id="InputsLogin">
          <AccountCircle id="iconInputLabelLogin" />
          <input
            label="Email"
            id="emailLogin"
            className="inputLogin"
            placeholder="Digite seu email"
            value={userLogin.login}
            onChange={(e) => setLogin({...userLogin, login: e.target.value})}
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
            value={userLogin.senha}
            onChange={(e) => setLogin({...userLogin, senha: e.target.value})}
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
