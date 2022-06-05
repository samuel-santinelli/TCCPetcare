import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import "./style/ContainerInputsLogin.css";

const InputsLoginCuidador = (props) => {
  const navigate = useNavigate();

  const [userCuidadorLogin, setUserCuidadorLogin] = useState({
    email: "",
    senha: "",
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, senha } = userCuidadorLogin;

    console.log("email", email, "senha", senha);

    axios
      .get(
        // ISSO JAMAAAAAAAIS PODE SER UM GET
        `http://localhost/Cuidador/Cuidador/api/cuidador/loginHost?email=${email}&senha=${senha}`,

        {
          email: email,
          senha: senha,
        }
      )

      .then((res) => {
        console.log("O cuidador é", res.data[0].idHost);
        window.localStorage.setItem("cuidador", JSON.stringify(res.data));
        window.localStorage.setItem("idCuidadorLogin", JSON.parse(res.data[0].idHost));
        navigate("/HistoricoCuidador?idCuidador=" + res.data[0].idHost);
        alert("Seja bem vindo!!!");
      })
      .catch((e) => {
        console.error("Erro", e);
        if (email === "" || senha === "") {
          alert("Preencha todos os campos");
        } else {
          alert("Email ou senha invalidos!!!");
        }
      });
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
              value={userCuidadorLogin.email}
              onChange={(e) =>
                setUserCuidadorLogin({ ...userCuidadorLogin, email: e.target.value })
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
              value={userCuidadorLogin.senha}
              onChange={(e) =>
                setUserCuidadorLogin({ ...userCuidadorLogin, senha: e.target.value })
              }
            />
          </div>
          <div id="containerButton">
            <button
              type="submit"
              id="buttonProximo"
              className="button"
            >
              Entre Agora
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default InputsLoginCuidador;
