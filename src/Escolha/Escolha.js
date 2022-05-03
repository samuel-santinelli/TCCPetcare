import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./style/styleEscolha.css";

const Escolha = () => {
  return (
    <div className="containerBannerEscolha">
            <div className="containerInputsEscolha">
                <h3>Para Continuar, selecione uma opçaõ </h3>
                    <input type="submit" className="inputEscolha" value="Desejo ser cuidador"/>
                    <input type="submit" className="inputEscolha" value="Desejo ser cliente"/>
            </div>
    </div>
  );
}

export default Escolha;
