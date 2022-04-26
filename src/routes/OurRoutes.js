import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import CadastroPet from "../Cadastro/CadastroPet";
import CadastroCliente from "../Cadastro/CadastroCliente";
import CadastroCuidador from "../Cadastro/CadastroCuidador"
import BoasVindas from "../BoasVindas/BoasVindas";
import Agendamento from "../Agendamento/Agendamento";

function OurRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CadastroCliente />} exact />
      <Route path="/BoasVindas" element={<BoasVindas />} />
      <Route path="/CadastroPet" element={<CadastroPet />} />
      <Route path="/Agendamento" element={<Agendamento />} />
      <Route path="/CadastroCuidador" element={<CadastroCuidador />} />
    </Routes>
  );
}

export default OurRoutes;
