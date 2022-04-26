import React from "react";
import ReactDOM from "react-dom";
import CadastroCuidador from "./Cadastro/CadastroCuidador";
import CadastroCuidador2Page from "./Cadastro/CadastroCuidador2Page";
import CadastroCliente from "./Cadastro/CadastroCliente";
import CadastroPet from "./Cadastro/CadastroPet";
import CadastroPetNextPage from "./Cadastro/CadastroPetNextPage";
import Login from "./Login/Login";
import EsqueciMinhaSenha from "./EsqueciMinhaSenha/EsqueciMinhaSenha";
import BoasVindas from "./BoasVindas/BoasVindas";
import reportWebVitals from "./reportWebVitals";
import Agendamento from "./Agendamento/Agendamento";
import PerfilCuidador from "./Perfil/PerfilCuidador";
import PerfilCliente from "./Perfil/PerfilCliente";
import { BrowserRouter } from "react-router-dom";
import OurRoutes from "./routes/OurRoutes";

ReactDOM.render(
  <BrowserRouter>
    <OurRoutes />
  </BrowserRouter>,
  document.getElementById("root")
);
