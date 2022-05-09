import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import {
  AiOutlineSearch,
  AiOutlineHistory,
  AiOutlineExport,
} from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import ButtonInfo from "./buttonInfo/ButtonInfo";
import styleLandingPage from "./style/styleLandingPage.css";

const LandingPage = () => {
  const slidebar = document.querySelector('.containerMenuLateral')
  const toggle = document.querySelector('.iconSlidebar')

  const imagePerson =
    "https://images.pexels.com/photos/6001779/pexels-photo-6001779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  return (
    <>
      <header>
        <nav className="containerMenuLateral close">
          <div className="header-slidebar">
            <div className="image-text">
              <span className="image-slide">
                <img src={imagePerson} alt="logo" className="logoMenuSlider" />
              </span>
              <div className="text header-text">
                <span className="nameProfileSlide">Mayara</span>
              </div>
            </div>
            <BiChevronRight className="iconSlidebar" />
          </div>
          <div className="menu-bar">
            <div className="menu-slider">
              <AiOutlineSearch className="iconSlidebarLi" />
              <Link to={"./Agendamento"}>
              <span className="titleIconSlidebar">Pesquisar cuidador</span>
              </Link>
            </div>
            <div className="menu-slider">
              
              <FaClipboardList className="iconSlidebarLi" />
              <Link to={"./DadosServico"}>
              <span className="titleIconSlidebar">Em Andamento</span>
              </Link>
            </div>
            <div className="menu-slider">
              <AiOutlineHistory className="iconSlidebarLi" />
              <Link to={"./HistoricoCliente"}>
              <span className="titleIconSlidebar">Histórico</span>
              </Link>
            </div>
            <div className="menu-slider">
              <AiOutlineExport className="iconSlidebarLi" />
              <span className="titleIconSlidebar">Logout</span>
            </div>
          </div>
        </nav>
        <div id="parteSuperior">
          <div class="boxBotao">
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
          <input type="button" id="Agendar-agora" value="AGENDE AGORA" />
        </div>
      </header>

      <main>
        <div class="box-container">
          <div class="img-box-container" />
          <div class="texto-container">
            <div class="texto-superior">
              <div class="tituloPet-servico">PET</div>
              <div class="tituloHome-servico">HOME</div>
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
        <div class="box-container2">
          <span id="text-center">SEU PET </span>
          <span id="text-center2">SEGURO</span>
        </div>
        <div class="box-container3">
          <div id="div-input">
            <AiOutlineSearch class="pesquisa-icon" />
            <input
              type="text"
              id="input-pesquisa"
              placeholder="Busque um cuidador"
            />
          </div>
          <div id="cuidadores-container">
            <div class="box1">
              <div class="header-box1">
                <div className="imageDashboardCuidador1" />
                <div className="nomeCuidadorLandingPage">
                  <h7>Mayara Pereira</h7>
                  <h8>
                    Amo muito os animais! e estou aqui para cuidador do seu!
                  </h8>
                  <ButtonInfo />
                </div>
              </div>
            </div>
            <div class="box1">
              <div class="header-box2">
                <div className="imageDashboardCuidador2" />
                <div className="nomeCuidadorLandingPage">
                  <h7>Larissa Santos</h7>
                  <h8>
                    Amo muito os animais! e estou aqui para cuidador do seu!
                  </h8>
                  <ButtonInfo />
                </div>
              </div>
            </div>
            <div class="box1">
              <div class="header-box3">
                <div className="imageDashboardCuidador3" />
                <div className="nomeCuidadorLandingPage">
                  <h7>Samira Sato</h7>
                  <h8>
                    Amo muito os animais! e estou aqui para cuidador do seu!
                  </h8>
                  <ButtonInfo />
                </div>
              </div>
            </div>
            <div class="box1">
              <div class="header-box4">
                <div className="imageDashboardCuidador4" />
                <div className="nomeCuidadorLandingPage">
                  <h7>Diego Junior</h7>
                  <h8>
                    Amo muito os animais! e estou aqui para cuidador do seu!
                  </h8>
                  <ButtonInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="feedback">
          <div id="linha-feedback">DEIXE SEU FEEDBACK</div>
          <div id="container-feedback">
            <div id="div-form-feedback">
              <form
                name="frmfeedback"
                class="frmfeedback"
                action=""
                method="post"
              >
                <div>
                  <input
                    type="text"
                    id="txtNome"
                    class="input-feedback"
                    placeholder="SEU NOME"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="txtEmail"
                    class="input-feedback"
                    placeholder="SEU EMAIL"
                  />
                </div>
                <div>
                  {" "}
                  <input
                    type="number"
                    id="txtNumero"
                    class="input-feedback"
                    placeholder="SEU NUMERO"
                    value=""
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="txtMensagem"
                    class="input-feedback-mensagem"
                    placeholder="SUA MENSAGEM"
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    id="btnEnviar"
                    class="input-feedback-enviar"
                    value="ENVIAR"
                  />
                </div>
              </form>
            </div>
            <div class="img-feedback"></div>
          </div>
        </div>
      </main>

      <footer></footer>
    </>
  );
};

export default LandingPage;
