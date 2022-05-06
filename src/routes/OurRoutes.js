import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import CadastroPet from "../Cadastro/CadastroPet";
import CadastroCliente from "../Cadastro/CadastroCliente";
import CadastroCuidador from "../Cadastro/CadastroCuidador"
import BoasVindas from "../BoasVindas/BoasVindas";
import Agendamento from "../Agendamento/Agendamento";
import LandingPage from "../LandingPage/LandingPage"
import DadosServico from "../Dados/DadosServico";
import Login from "../Login/Login"
import EsqueciMinhaSenha from "../EsqueciMinhaSenha/EsqueciMinhaSenha"
import Escolha from "../Escolha/Escolha"

function OurRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} exact />
      <Route path="/BoasVindas" element={<BoasVindas />} />
      <Route path="/CadastroCliente" element={<CadastroCliente />} />
      <Route path="/CadastroPet/:id" element={<CadastroPet />} />
      <Route path="/Agendamento" element={<Agendamento />} />
      <Route path="/CadastroCuidador" element={<CadastroCuidador />} />
      <Route path="/DadosServico" element={<DadosServico />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/EsqueciMinhaSenha" element={<EsqueciMinhaSenha />} />
      <Route path="/Escolha" element={<Escolha />} />
    </Routes>
  );
}

export default OurRoutes;
