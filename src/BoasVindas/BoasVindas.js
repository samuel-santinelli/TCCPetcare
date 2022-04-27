import React from "react";
import AddIcon from "@mui/icons-material/Add";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ConteudoInputsCliente from "../Cadastro/inputs/ConteudoInputsCliente";
import { Link } from "react-router-dom";
import "./style/styleBoasVindas.css";


const Login = ({id}) => {
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
        <Link to="/CadastroPet">
          <input
            type="button"
            value="Adicione seu pet"
            className="inputButtonWelcome"
          />
         
        </Link>
        <AddIcon id="iconInputWelcome" />
      </div>

      <div className="containerButtonWelcome">
      <Link to="/Agendamento" id={id}>
        <input
          type="button"
          value="Deixar para depois"
          className="inputButtonWelcome"
        />
        </Link>
        <WatchLaterIcon id="iconInputWelcome" />
      </div>
    </div>
  );
};

export default Login;
