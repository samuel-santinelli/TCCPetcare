import React from "react";
import ReactDOM from "react-dom";
import CadastroCuidador from "./Cadastro/CadastroCuidador";
import CadastroCuidador2Page from "./Cadastro/CadastroCuidador2Page";
import CadastroCliente from "./Cadastro/CadastroCliente";
import CadastroPet from './Cadastro/CadastroPet'
import CadastroPetNextPage from './Cadastro/CadastroPetNextPage'
import Login from './Login/Login'
import EsqueciMinhaSenha from './EsqueciMinhaSenha/EsqueciMinhaSenha'
import BoasVindas from "./BoasVindas/BoasVindas";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <BoasVindas/> */}
    <EsqueciMinhaSenha/>
    <Login/>
    <CadastroCuidador />
    <CadastroCuidador2Page />
    <CadastroCliente />
    <CadastroPet/>
    <CadastroPetNextPage/>
    /
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
