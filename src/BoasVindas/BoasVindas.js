import React from "react";
import AddIcon from "@mui/icons-material/Add";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import "./style/styleBoasVindas.css";

const Login = () => {
  return (
    <div className="containerWelcome">
      <div className="containerBannerWelcome">
        <div className="bannerWelcome"></div>
      </div>
      <div className="containerH1">
        <h1 className="titleWelcome">Seja Bem-Vindo!</h1>
        <h2 className="subtitleWelcome">
          Agora que você já se cadastrou, seremos como amigos, já temos algo em
          comum! zelamos nossos PET'S!
        </h2>
      </div>

      <div className="containerButtonWelcome">
        <input
          type="button"
          value="Adicione seu pet"
          className="inputButtonWelcome"
        />
        <AddIcon id="iconInputWelcome" />
        </div>
        <div className="containerButtonWelcome">
        <input
          type="button"
          value="Deixar para depois"
          className="inputButtonWelcome"
        />
        <WatchLaterIcon id="iconInputWelcome"/>
      </div>
    </div>
  );
};

export default Login;
