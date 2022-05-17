import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import "./style/ContainerInputsLogin.css";

const InputsLogin = () => {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    senha: "",
  });

  const handleLoginSubmit = (userLogin) => {
    const email = (document.getElementById("emailLogin") || {}).value || "";
    const senha = (document.getElementById("senhaLogin") || {}).value || "";
    const button = document.getElementById("buttonProximo");

    if (!email) {
      alert("ta errado isso ai");
     
  }else{
    axios
    .get(
      `http://localhost/Cuidador/Cliente/api/cliente/login?email=${email}&senha=${senha}`,
      {
        email: email,
        senha: senha,
      }
    )
    .then((res) => {
      console.log("O cuidador é", res.data);
      window.localStorage.setItem("cliente", JSON.stringify(res.data));
      button.addEventListener("click", () => {
        navigate(`/BoasVindas/id=${res.data.id}`);
      });
    });

  }}
  return (
    <>
      <form onSubmit={handleLoginSubmit(userLogin)}>
        <div className="containerInputsLogin">
          <div id="InputsLogin">
            <AccountCircle id="iconInputLabelLogin" />
            <input
              label="Email"
              id="emailLogin"
              className="inputLogin"
              placeholder="Digite seu email"
              value={userLogin.email}
              onChange={(e) =>
                setUserLogin({ ...userLogin, email: e.target.value })
              }
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
              onChange={(e) =>
                setUserLogin({ ...userLogin, senha: e.target.value })
              }
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
