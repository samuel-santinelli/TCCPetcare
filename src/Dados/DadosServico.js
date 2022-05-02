import React from "react";
import { BiExit } from "react-icons/bi";
import "./style/styleDadosServico.css";

const DadosServico = () => {
  return (
    <div className="cardMain">
      <div className="containerImageFundo" />
      
      <div className="containerTitleDadosServices">
      <BiExit className="iconExit" />
        <h1>Dados do Serviço</h1>
      </div>
      <div className="containerParticipantesService">
        <h6>Participantes</h6>
        <div className="containerImageParticipantesService">
          <div>
            <div className="imageParticipantePet" />
            <h5 className="titleDadosService">Dono do Pet</h5>
            <h5 className="nameDadosServices">João Silva</h5>
          </div>
          <div>
            <div className="imageParticipanteDonoPet" />
            <h5 className="titleDadosService">Pet Cuidado</h5>
            <h5 className="nameDadosServices">Freddie</h5>
          </div>
          <div>
            <div className="imageParticipanteCuidador" />
            <h5 className="titleDadosService">Cuidador(a)</h5>
            <h5 className="nameDadosServices">Maria Aparecida</h5>
          </div>
        </div>
      </div>
      <div className="containerInfoDadosServices">
        <div className="containerDateDadosService">
          <h6>Data Inicial</h6>
          <input type="date" className="inputDateDadosService" />
          <h6>Data Final</h6>
          <input type="date" className="inputDateDadosService" />
          <div className="containerDetailsDadosService">
            <h6 className="statusServices">Status do serviço</h6>
            <h6 className="respStatusServices">Em andamento</h6>
            <h6 className="priceDadosService">Preço: R$ 100</h6>
          </div>
        </div>
        <div className="containerMapDadosService">
          <h6>Local do Serviço</h6>
          <iframe
            className="mapDadosService"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29276.363111143826!2d-46.88371138889647!3d-23.4768574223817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03aaf6d062af%3A0x2c22de58cd7f17f1!2sAlphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006542-115!5e0!3m2!1spt-BR!2sbr!4v1640096190707!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DadosServico;
