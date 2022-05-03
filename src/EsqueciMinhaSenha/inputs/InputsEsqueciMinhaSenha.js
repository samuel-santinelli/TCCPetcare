import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "./style/StyleEsqueciMinhaSenha.css";
import { createSvgIcon } from "@mui/material/utils";

const InputsEsqueciMinhaSenha= () => {
  return (
    <>
    <div className="containerTituloEsqueciMinhaSenha">
        <h3>Nós da PETcare lamentamos que tenha esquecido sua senha, mas não se preocupe, trabalharemos para recuperá-la o mais rapido possivel!</h3>
    </div>
      <div className="containerInputsLogin">
        <div id="InputsLogin">
          <AlternateEmailIcon id="iconInputLabelEsqueciMinhaSenha" />
          <input
            label="Nome"
            id="nome"
            className="inputLoginEsqueciMinhaSenha"
            placeholder="Digite seu email"
          />
        </div>
        <div>
        </div>
        <div id="containerButton">
          <input
            value="Recupere sua senha"
            type="submit"
            id="buttonProximo"
            className="button"
          />
        </div>
      </div>
    </>
  );
};

export default InputsEsqueciMinhaSenha;