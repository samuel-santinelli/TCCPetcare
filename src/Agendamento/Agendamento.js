import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { RiBookmarkLine } from "react-icons/ri";
import { MdOutlineStarOutline, MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";
import StarIcon from "@mui/icons-material/Star";
import "./style/styleAgendamento.css";
import ButtonAgendar from "./button/ButtonAgendar";
import ButtonAgendarModal from "./button/ButtonAgendarModal";
import Banner from "./banner/Banner";

const USERDATA = [
  {
    nome: "Fernanda",
    sobrenome: "Silva",
    name: "Ontem as 09:35",
    imageUrl: "https://dummyimage.com/84x84",
  },
  {
    nome: "Fernanda Silva",
    name: "Ontem as 09:35",
    imageUrl: "https://dummyimage.com/84x84",
  },
  {
    nome: "Fernanda Silva",
    name: "Ontem as 09:35",
    imageUrl: "https://dummyimage.com/84x84",
  },
  {
    nome: "Fernanda Silva",
    name: "Ontem as 09:35",
    imageUrl: "https://dummyimage.com/84x84",
  },
  {
    nome: "Fernanda Silva",
    name: "Ontem as 09:35",
    imageUrl: "https://dummyimage.com/84x84",
  },
  {
    nome: "Fernanda Silva",
    name: "Ontem as 09:35",
    imageUrl: "https://dummyimage.com/84x84",
  },
  {
    nome: "Fernanda Silva",
    name: "Ontem as 09:35",
    imageUrl: "https://dummyimage.com/84x84",
  },
  {
    nome: "Fernanda Silva",
    name: "Ontem as 09:35",
    imageUrl: "https://dummyimage.com/84x84",
  },
  {
    nome: "Fernanda Silva",
    name: "Ontem as 09:35",
    imageUrl: "https://dummyimage.com/84x84",
  },
];

const Agendamento = () => {
  const [cuidadores, setCuidadores] = useState([]);

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
            <div className="containerCardCuidadores">
              {cuidadores.map((cuidador, key) => (
                <div className="card" key={key}>
                  <div className="contentCenterCuidador">
                    <div className="imageCuidador" />
                    <div className="infoCuidador">
                      <label className="nameCuidador">{cuidador.nome}</label>
                      <label className="hourCuidador">
                        {cuidador.limitacoes}
                      </label>
                      <div className="containerRating">
                      <MdOutlineStarPurple500 className="iconStar"/>
                      <MdOutlineStarPurple500 className="iconStar"/>
                      <MdOutlineStarPurple500 className="iconStar"/>
                      <MdOutlineStarHalf className="iconStar"/>
                      </div>
                      <div className="containerBio">
                        <label className="biographyCuidador">
                          {cuidador.biografia}
                        </label>
                      </div>
                      
                      <div className="containerMap">
                      <RiBookmarkLine className="iconInputSave" />
                        <iframe
                          className="localMap"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29276.363111143826!2d-46.88371138889647!3d-23.4768574223817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03aaf6d062af%3A0x2c22de58cd7f17f1!2sAlphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006542-115!5e0!3m2!1spt-BR!2sbr!4v1640096190707!5m2!1spt-BR!2sbr"
                          // allowfullscreen=""
                          loading="lazy"
                        ></iframe>
                      </div>
                      <ButtonAgendar />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Conteudo da modal de cuidadores */}
            <div className="containerInfoCuidadores">
              <div className="cardModal">
                <div className="containerBanner">
                  <Banner />
                </div>
                <div>
                  <div className="contentCenterCuidador">
                    <div className="imageCuidadorServico" />
                    <div className="infoCuidador">
                      <label className="nameCuidadorModal">
                        Maria de Lurdes
                      </label>
                      <label className="hourCuidadorModal">São Paulo</label>
                      <div className="containerRating">
                        <Rating
                          name="text-feedback"
                          readOnly
                          precision={0.5}
                          emptyIcon={
                            <StarIcon
                              style={{ opacity: 0.95 }}
                              fontSize="inherit"
                            />
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="containerServicos">
                    <label className="tituloServicos">Serviços</label>
                    <div className="containerCardServicos">
                      <div className="cardPetTrip">
                        <div className="imagePetTrip" />
                        <div className="titleServices">
                          <h4>PET</h4>
                          <h5>TRIP</h5>
                        </div>
                        <div>
                          <label className="descServices">
                            O cuidador vai até a sua casa, e cuida do seu pet
                            pelo tempo <p>escolhido</p>
                          </label>
                        </div>
                      </div>
                      <div className="cardPetHome">
                        <div className="imagePetHome" />
                        <div className="titleServices">
                          <h4>PET</h4>
                          <h5>Home</h5>
                        </div>
                        <div>
                          <label className="descServices">
                            O Pet permanece sobe os cuidados do cuidador, porém
                            em sua <p>residência </p>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="containerSelectPeso1">
                      <h3>PORTE</h3>
                      <div>
                        <div className="containerInputsSelectPeso2">
                          <label className="containerSelectPesoMarked">
                            <div id="peso5kg" />
                            <span className="checkmarkPeso"></span>
                          </label>
                          <label className="containerSelectPesoMarked">
                            <div id="peso10kg" />
                            <span className="checkmarkPeso"></span>
                          </label>
                          <label className="containerSelectPesoMarked">
                            <div id="peso20kg" />
                            <span className="checkmarkPeso"></span>
                          </label>
                          <label className="containerSelectPesoMarked">
                            <div id="peso40kg" />
                            <span className="checkmarkPeso"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ButtonAgendarModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agendamento;
