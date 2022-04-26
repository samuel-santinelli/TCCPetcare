import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import CadastroPet from "../Cadastro/CadastroPet";
import BoasVindas from "../BoasVindas/BoasVindas";

function OurRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BoasVindas />} exact />
      <Route path="/CadastroPet" element={<CadastroPet />} />
    </Routes>
  );
}

export default OurRoutes;
