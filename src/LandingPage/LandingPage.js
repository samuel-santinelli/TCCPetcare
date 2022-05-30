import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import ButtonInfo from "./buttonInfo/ButtonInfo";
import Toolbar from "./slidebar/ToolBar";
import styleLandingPage from "./style/styleLandingPage.css";
import Sidebar from "./slidebar/Sidebar";
import Backdrop from "./slidebar/Backdrop";

const LandingPage = () => {
  const slidebar = document.querySelector(".containerMenuLateral");
  const toggle = document.querySelector(".iconSlidebar");

  const imagePerson =
    "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png";

  const [sidebar, setSidear] = useState(false);
  const toggleSidebar = () => {
    setSidear((prevState) => !prevState);
  };

  const [cuidadoresLandingPage, setCuidadoresLandingPage] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/Cuidador/Cuidador/api/cuidador")
      .then((res) => {
        setCuidadoresLandingPage(res.data);
      })
      .catch(() => {
        console.log("Deu erro na busca de cuidador");
      });
  }, []);

  return (
    <>
      <header>
        <Toolbar openSidebar={toggleSidebar} />
        <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
        <Sidebar sidebar={sidebar} />
        <div id="parteSuperior">
          <div className="boxBotao">
            <Link to="/Login">
              <input type="button" id="login-input" value="LOGIN" />
            </Link>
            <Link to="/Escolha">
              <input type="button" id="cadastro-input" value="CADASTRE-SE" />
            </Link>
          </div>
        </div>
        <div id="parteMeio">
          <div id="div-texto">PetCare a maior rede de cuidadores da região</div>
        </div>
        <div id="parteInferior">
          <Link to="/Agendamento">
            <input type="button" id="Agendar-agora" value="AGENDE AGORA" />
          </Link>
        </div>
      </header>

      <main>
        <div className="box-container">
          <div className="img-box-container" />
          <div className="texto-container">
            <div className="texto-superior">
              <div className="tituloPet-servico">PET</div>
              <div className="tituloHome-servico">HOME</div>
            </div>
            <div class="texto-meio">
              O PET HOME permite que o seu PET fique na casa de excelentes
              cuidadores qualificados
            </div>
            <div className="containerButtonCarrosel">
              <div className="buttonCarrosel"></div>
              <div className="buttonCarroselSec"></div>
            </div>
          </div>
        </div>
        <div className="box-container2">
          <span id="text-center">SEU PET </span>
          <span id="text-center2">SEGURO</span>
        </div>
        <div className="box-container3">
          <div id="div-input">
            <AiOutlineSearch className="pesquisa-icon" />
            <input
              type="text"
              id="input-pesquisa"
              placeholder="Busque um cuidador"
            />
          </div>

          <div id="cuidadores-container">
            {cuidadoresLandingPage.map((cuidadorLandingP, key) => (
              <div className="box1" key={key}>
                <div className="header-box1">
                  <>
                    <div className="containerScrollLandingP">
                    <img
                      className="imageDashboardCuidador1"
                      src={imagePerson}
                      alt=""
                    />
                      <label className="nomeCuidadorLandingP">
                        {cuidadorLandingP.nome}
                      </label>
                      <label className="moradiaCuidadorLandingP">
                        {cuidadorLandingP.moradia} ({cuidadorLandingP.cidade})
                      </label>
                      <label className="biografiaCuidadorLandingP">
                        {cuidadorLandingP.biografia}
                      </label>
                    </div>

                    <ButtonInfo />
                  </>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="feedback">
          <div id="linha-feedback">DEIXE SEU FEEDBACK</div>
          <div id="container-feedback">
            <div id="div-form-feedback">
              <form
                name="frmfeedback"
                className="frmfeedback"
                action=""
                method="post"
              >
                <div>
                  <input
                    type="text"
                    id="txtNome"
                    className="input-feedback"
                    placeholder="SEU NOME"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="txtEmail"
                    className="input-feedback"
                    placeholder="SEU EMAIL"
                  />
                </div>
                <div>
                  {" "}
                  <input
                    type="number"
                    id="txtNumero"
                    className="input-feedback"
                    placeholder="SEU NUMERO"
                    value=""
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="txtMensagem"
                    className="input-feedback-mensagem"
                    placeholder="SUA MENSAGEM"
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    id="btnEnviar"
                    className="input-feedback-enviar"
                    value="ENVIAR"
                  />
                </div>
              </form>
            </div>
            <div className="img-feedback"></div>
          </div>
        </div>
      </main>

      <footer></footer>
    </>
  );
};

export default LandingPage;
