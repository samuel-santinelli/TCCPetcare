import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import CadastroPet from "../Cadastro/CadastroPet";
import BoasVindas from "../BoasVindas/BoasVindas";

const OurRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route component={BoasVindas} path="/" exact />
        <Route component={CadastroPet} path="/CadastroPet" />
      </Routes>
    </Router>
  );
};

export default OurRoutes;
