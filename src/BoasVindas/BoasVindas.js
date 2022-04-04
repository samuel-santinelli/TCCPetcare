import React from "react";
import AddIcon from "@mui/icons-material/Add";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import "./style/styleBoasVindas.css";

const Login = () => {
  return (
    <div className="container">
      <div className="containerBanner">
        <div className="bannerWelcome"></div>
      </div>
      <div className="containerH1">
        <h1>Seja Bem-Vindo!</h1>
        <h2>
          Agora que você já se cadastrou, seremos como amigos, já temos algo em
          comum! zelamos nossos PET'S!
        </h2>
      </div>

      <div className="containerButton">
        <input
          type="button"
          value="Adicione seu pet"
          className="inputButton"
        />
        <AddIcon id="iconInput" />
        </div>
        <div className="containerButton">
        <input
          type="button"
          value="Deixar para depois"
          className="inputButton"
        />
        <WatchLaterIcon id="iconInput"/>
      </div>
    </div>
  );
};

export default Login;
