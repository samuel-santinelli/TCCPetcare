import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import "./style/styleAgendamento.css";
import ButtonAgendar from "./button/ButtonAgendar";

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
  return (
    <div className="containerMain">
      <iframe
        class="map"
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
          <select className="selectCuidador">
            <option disabled></option>
            <option>valor 1</option>
            <option>valor 2</option>
            <option>valor 3</option>
          </select>
          <div id="containerMainCard">
            <div className="containerCardCuidadores">
              <div className="card">
                <div className="contentCenterCuidador">
                  <div className="imageCuidador" />
                  <div className="infoCuidador">
                    <label className="nameCuidador">Fernanda Silva</label>
                    <label className="hourCuidador">Ontem as 09:35</label>
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
                    <div className="containerBio">
                      <label className="biographyCuidador">
                        Minha experiência com animais começou no ano de 2009,
                        quando comecei a cuidar de um gato da minha vizinha, que
                        por motivo de trabalho...
                      </label>
                    </div>
                    <div className="containerMap">
                      <iframe
                        class="localMap"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29276.363111143826!2d-46.88371138889647!3d-23.4768574223817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03aaf6d062af%3A0x2c22de58cd7f17f1!2sAlphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006542-115!5e0!3m2!1spt-BR!2sbr!4v1640096190707!5m2!1spt-BR!2sbr"
                        allowfullscreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                    <ButtonAgendar />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="contentCenterCuidador">
                  <div className="imageCuidador" />
                  <div className="infoCuidador">
                    <label className="nameCuidador">Fernanda Silva</label>
                    <label className="hourCuidador">Ontem as 09:35</label>
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
                    <div className="containerBio">
                      <label className="biographyCuidador">
                        Minha experiência com animais começou no ano de 2009,
                        quando comecei a cuidar de um gato da minha vizinha, que
                        por motivo de trabalho...
                      </label>
                    </div>
                    <div className="containerMap">
                      <iframe
                        class="localMap"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29276.363111143826!2d-46.88371138889647!3d-23.4768574223817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03aaf6d062af%3A0x2c22de58cd7f17f1!2sAlphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006542-115!5e0!3m2!1spt-BR!2sbr!4v1640096190707!5m2!1spt-BR!2sbr"
                        allowfullscreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                    <ButtonAgendar />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="contentCenterCuidador">
                  <div className="imageCuidador" />
                  <div className="infoCuidador">
                    <label className="nameCuidador">Fernanda Silva</label>
                    <label className="hourCuidador">Ontem as 09:35</label>
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
                    <div className="containerBio">
                      <label className="biographyCuidador">
                        Minha experiência com animais começou no ano de 2009,
                        quando comecei a cuidar de um gato da minha vizinha, que
                        por motivo de trabalho...
                      </label>
                    </div>
                    <div className="containerMap">
                      <iframe
                        class="localMap"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29276.363111143826!2d-46.88371138889647!3d-23.4768574223817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03aaf6d062af%3A0x2c22de58cd7f17f1!2sAlphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006542-115!5e0!3m2!1spt-BR!2sbr!4v1640096190707!5m2!1spt-BR!2sbr"
                        allowfullscreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                    <ButtonAgendar />
                  </div>
                </div>
              </div>
            </div>

            {/* Conteudo da modal de cuidadores */}
            <div className="containerInfoCuidadores">
            <div className="cardModal">
              <div className="containerBanner">                
                <img className="" />
              </div>
              <div>
                <div className="contentCenterCuidador">
                  <div className="imageCuidadorServico" />
                  <div className="infoCuidador">
                    <label className="nameCuidadorModal">Maria de Lurdes</label>
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
                    <div className="imagePetTrip"/>
                  </div>
                  <div className="cardPetHome">
                    <div className="imagePetHome"/>
                  </div>
                  </div>
                </div>
                {/* <ButtonAgendar /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Agendamento;
