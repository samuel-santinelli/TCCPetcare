import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";
import "./style/styleAgendamento.css";
import ButtonAgendar from "./button/ButtonAgendar";
import Modal from "./modal/Modal";
import ModalPagamento from "./modal/ModalPagamento";

const Agendamento = (props) => {
  const [cuidadores, setCuidadores] = useState([]);
  const [dropdown, setDropdown] = useState("");
  const [modalPag, setModalPag] = useState("");

  const showDropdown = () => {
    console.log("modal foi clicada");
    setDropdown("show");
    document.body.addEventListener("click", closeDropdown, props);
  };

  const closeDropdown = (event) => {
    console.log("hidden");
    setDropdown("show");
    document.body.addEventListener("click", closeDropdown);
  };

  const showModalPag = () => {
    console.log("modal de pagamento foi clicada");
    setModalPag("show")
    document.body.addEventListener("click", closeDropdown, props)
  } 

  useEffect(() => {
    axios
      .get("http://localhost/Cuidador/Cuidador/api/cuidador")
      .then((res) => {
        setCuidadores(res.data);
      })
      .catch(() => {
        console.log("Deu erro");
      });
  }, []);

  const nome = "Maria";
  const foto =
    "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png";

  return (
    <div className="containerMain">
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29276.363111143826!2d-46.88371138889647!3d-23.4768574223817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03aaf6d062af%3A0x2c22de58cd7f17f1!2sAlphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006542-115!5e0!3m2!1spt-BR!2sbr!4v1640096190707!5m2!1spt-BR!2sbr"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <div className="containerAgendamento">
        <div className="containerInputSearch">
          <SearchIcon id="iconSearch" />
          <input
            type="search"
            className="inputSearch"
            placeholder="Busque um cuidador especifico (Ex: Maria Antonieta)"
          />
          <div id="containerMainCard">
            <div className="containerScrollCardCuidadores">
              <div className="containerCardCuidadores">
                {cuidadores.map((cuidador, key) => (
                  <div className="card" key={key}>
                    <div className="containerInfoCuidadorAgendamento">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29276.363111143826!2d-46.88371138889647!3d-23.4768574223817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03aaf6d062af%3A0x2c22de58cd7f17f1!2sAlphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006542-115!5e0!3m2!1spt-BR!2sbr!4v1640096190707!5m2!1spt-BR!2sbr"
                        allowfullscreen=""
                        loading="lazy"
                        className="mapCardAgendamento"
                      />
                      <div className="containerImageCuidadorAgendamento">
                        <img
                          className="imageCuidador"
                          value={cuidador.foto}
                          src={foto}
                          alt=""
                        />
                      </div>
                      <div className="infoCuidador">
                        <label className="nameCuidador">
                          {cuidador.nome}
                        </label>
                        <label className="locationCuidadorAgendamento">
                          {cuidador.moradia}
                        </label>
                        <label className="biographyCuidador">
                          {cuidador.biografia}
                        </label>
                      </div>
                      <div id="containerButtonAgendar">
                        <input
                          value="Agendar"
                          type="submit"
                          id="buttonProximo"
                          className="buttonAgendar"
                          onClick={(showDropdown, showModalPag)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Conteudo da modal de cuidadores */}
            <Modal className={dropdown} />
           
          </div>
          <ModalPagamento className={modalPag} />
        </div>
      </div>
    </div>
  );
};

export default Agendamento;
