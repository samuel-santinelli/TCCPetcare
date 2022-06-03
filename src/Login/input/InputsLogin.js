import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import "./style/ContainerInputsLogin.css";

const InputsLogin = (props) => {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    senha: "",
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, senha, buttonSend } = userLogin;

    console.log("email", email, "senha", senha);

    // buttonSend.addEventListener("click", () => {
    //   alert("foi jonatao")
      
    // })



    axios
      .get(
        // ISSO JAMAAAAAAAIS PODE SER UM GET
        `http://localhost/Cuidador/Cliente/api/cliente/login?email=${email}&senha=${senha}`,
        
       
        {
          
          email: email,
          senha: senha,
          
        }
        
     
      )

      .then((res) => {
        console.log("O cliente é", res.data[0].idCliente);
        window.localStorage.setItem("cliente", JSON.stringify(res.data));
        navigate("/BoasVindas?idCliente=" + res.data[0].idCliente);
        alert("Seja bem vindo!!!");
      })
      .catch((e) => {
        console.error("Erro", e);
        if(email === "" || senha === ""){
          alert("Preencha todos os campos");
        }else{
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
            <button
              type="submit"
              id="buttonProximo"
              value={userLogin.buttonSend}
              className="button"
            >Entre Agora</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default InputsLogin;
