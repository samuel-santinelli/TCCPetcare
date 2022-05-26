import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";
import "./style/styleAgendamento.css";
import ButtonAgendar from "./button/ButtonAgendar";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./modal/Modal";

const Agendamento = (props) => {
  const navigate = useNavigate();
  const [cuidadores, setCuidadores] = useState([]);
  const [search, setSearch] = useState([]);
  const [dropdown, setDropdown] = useState("");


  const showDropdown = function ({target}) {
    setDropdown("show");
    const dadosCuidador = target.getAttribute('data-id')
    // console.log(dadosCuidador)
    navigate("/Agendamento?idHost=" + dadosCuidador);
    document.body.addEventListener("click", closeDropdown, props);
  };

  const closeDropdown = (event) => {
    setDropdown("show");
    document.body.addEventListener("click", closeDropdown);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost/Cuidador/Cuidador/api/cuidador`
        );
        const data = await response.json();
        setCuidadores(data);


        setSearch(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = ({ target }) => {
    if (!target.value) {
      setSearch(cuidadores);
      return;
    }

    const filterCuidadores = search.filter(({ nome }) =>
      nome.includes(target.value)
    );

    setSearch(filterCuidadores);
  };

  return (
    <div className="containerMain">
      <Link to={"../"} className="containerLinkBackAgendamento">
        <div id="icon-closeAgendamento">X</div>
      </Link>
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
            onChange={handleChange}
          />
          <div id="containerMainCard">
            <div className="containerScrollCardCuidadores">
              <div className="containerCardCuidadores">
                {search.map((cuidador, key) => (
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
                          alt="foto do cuidador"
                        />
                      </div>
                      <div className="infoCuidador">
                        <label className="nameCuidador" id="nome">
                          {cuidador.nome}
                        </label>
                        <label className="locationCuidadorAgendamento">
                          {cuidador.moradia} ({cuidador.cidade})
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
                          data-id={cuidador.idHost}
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
