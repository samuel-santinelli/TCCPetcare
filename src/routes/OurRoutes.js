import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import CadastroPet from "../Cadastro/CadastroPet";
import BoasVindas from "../BoasVindas/BoasVindas";
import Agendamento from "../Agendamento/Agendamento";

function OurRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BoasVindas />} exact />
      <Route path="/CadastroPet" element={<CadastroPet />} />
      <Route path="/Agendamento" element={<Agendamento />} />
    </Routes>
  );
}

export default OurRoutes;
