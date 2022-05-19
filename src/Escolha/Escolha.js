import React from "react";
import { Link } from "react-router-dom";
import "./style/styleEscolha.css";

const Escolha = () => {
  return (
    <div className="containerBannerEscolha">
      <div className="containerInputsEscolha">
        <h3>Para Continuar, selecione uma opção </h3>
        <Link to={"/CadastroCuidador"}>
          <input
            type="submit"
            className="inputEscolha"
            value="Desejo ser cuidador"
          />
        </Link>
        <Link to={"/CadastroCliente"}>
        <input
          type="submit"
          className="inputEscolha"
          value="Desejo ser cliente"
        />
        </Link>
      </div>
    </div>
  );
};

export default Escolha;