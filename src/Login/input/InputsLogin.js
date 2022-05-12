import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import "./style/ContainerInputsLogin.css";

const InputsLogin = () =>{
  

  const [userLogin, setUserLogin] = useState({
    email: "",
    senha: ""
  });

  const handleLoginSubmit = (userLogin) => {
    const email = document.getElementById("emailLogin");
    const senha = document.getElementById("senhaLogin");
    
    axios
      .get(`http://localhost/Cuidador/Cliente/api/cliente/login?${email}&${senha}`, {
      email: userLogin.email,
      senha: userLogin.senha,
      }).then((res) => {
        console.log(res.data)
        
    })
  };


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
            onChange={(e) => setUserLogin({...userLogin, email: e.target.value})}
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
            onChange={(e) => setUserLogin({...userLogin, senha: e.target.value})}
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
