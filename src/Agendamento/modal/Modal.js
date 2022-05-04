import React from "react"
import Banner from "../banner/Banner"
import "../style/styleAgendamento.css"
import "./style/styleModal.css"
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import { RiBookmarkLine } from "react-icons/ri";
import ButtonAgendarModal from "../button/ButtonAgendarModal";

const Modal = (props) => {
  const {className, modalRef} = props;

    return(
        <div className="containerInfoCuidadores">
        <div ref={modalRef} className={`${className} cardModal`}>
          <div className="containerBanner">
            <Banner />
          </div>
          <div>
            <div className="contentCenterCuidador">
              <div className="imageCuidadorServico" />
              <div className="infoCuidador">
                <label className="nameCuidadorModal">
                {props.nome}
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
    )

}

export default Modal