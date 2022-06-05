import React from "react";
import { Link } from "react-router-dom";
import "./style/styleEscolha.css";

const EscolhaLogin = () => {
  return (
    <>
      <div className="containerBannerEscolhaLogin">
      <div className="containerInputsEscolha">
        <h3>Para Continuar, selecione como deseja se logar</h3>
        <Link to={"/Login"}>
          <input
            type="submit"
            className="inputEscolha"
            value="Entrar como cliente"
          />
        </Link>
        <Link to={"/LoginCuidador"}>
          <input
            type="submit"
            className="inputEscolha"
            value="Entrar como cuidador"
          />
        </Link>
      </div>
      </div>
    </>
  );
};

export default EscolhaLogin;
