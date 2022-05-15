import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";
import "./style/styleAgendamento.css";
import ButtonAgendar from "./button/ButtonAgendar";
import { Link } from "react-router-dom";
import Modal from "./modal/Modal";

const Agendamento = (props) => {
  const [cuidadores, setCuidadores] = useState([]);
  const [dropdown, setDropdown] = useState("");
  

  const showDropdown = () => {
    console.log("modal foi clicada");
    setDropdown("show");
    document.body.addEventListener("click", closeDropdown, props);
  };

  const closeDropdown = (event) => {
    setDropdown("show");
    document.body.addEventListener("click", closeDropdown);
  };

  useEffect(() => {
    axios
      .get("http://localhost/Cuidador/Cuidador/api/cuidador")
      .then((res) => {
        setCuidadores(res.data);
      })
      .catch(() => {
        console.log("Deu erro na busca de cuidador");
      });
  }, []);

    console.log(cuidadores);
  const foto =
    "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png";

  return (
    <div className="containerMain">
      {/* <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29276.363111143826!2d-46.88371138889647!3d-23.4768574223817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03aaf6d062af%3A0x2c22de58cd7f17f1!2sAlphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006542-115!5e0!3m2!1spt-BR!2sbr!4v1640096190707!5m2!1spt-BR!2sbr"
        allowfullscreen=""
        loading="lazy"
      ></iframe> */}
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
                      {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29276.363111143826!2d-46.88371138889647!3d-23.4768574223817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03aaf6d062af%3A0x2c22de58cd7f17f1!2sAlphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006542-115!5e0!3m2!1spt-BR!2sbr!4v1640096190707!5m2!1spt-BR!2sbr"
                        className="mapCardAgendamento"
                      /> */}
                      <div className="containerImageCuidadorAgendamento">
                        <img
                          className="imageCuidador"
                          value={cuidador.foto}
                          src={cuidador.foto}
                          alt=""
                        />
                      </div>
                      <div className="infoCuidador">
                        <label className="nameCuidador">{cuidador.nome}</label>
                        <label className="locationCuidadorAgendamento">
                          {cuidador.moradia} (São Paulo)
                        </label>
                        <label className="biographyCuidador">
                          {cuidador.biografia}
                        </label>

                        <label className="valorCuidadorAgendamento">
                          {cuidador.valorHora} R$ a hora
                        </label>
                      </div>
                      <div id="containerButtonAgendar">
                        <input
                          value="Agendar"
                          type="submit"
                          id="buttonProximo"
                          className="buttonAgendar"
                          onClick={showDropdown}
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
        </div>
      </div>
    </div>
  );
};

export default Agendamento;
