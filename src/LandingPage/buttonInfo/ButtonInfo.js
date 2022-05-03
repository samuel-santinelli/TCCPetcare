import React from "react";
import { Link } from "react-router-dom";
import "./style/styleButtonInfo.css";

const ButtonInfo = () => {
  return (
    <Link to={"/Agendamento"}>
      <div>
        <input
          type="submit"
          value={"Mais informações"}
          className="buttonInfoCuidadorLandingPage"
        />
      </div>
    </Link>
  );
};

export default ButtonInfo;
