import React from "react";
import ReactDOM from "react-dom";
import CadastroCuidador from "./Cadastro/CadastroCuidador";
import CadastroCuidador2Page from "./Cadastro/CadastroCuidador2Page";
import CadastroCliente from "./Cadastro/CadastroCliente";
import CadastroPet from './Cadastro/CadastroPet'
import CadastroPetNextPage from './Cadastro/CadastroPetNextPage'
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <CadastroCuidador />
    <CadastroCuidador2Page /> */}
    <CadastroCliente />
    {/* <CadastroPetNextPage/>
    <CadastroPet/> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
