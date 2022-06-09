import React from "react";
import "./style/styleModal.css";
import {Link} from "react-router-dom"

const ModalPagamento = () => {
  const qrCode = "https://www.telepoesis.net/fakescripts/fakeQR_2.jpg";

  return (
    <div className="containerModalPayment">
    <div className="modalPagamento">
      <div className="containerTitlePayment">
        <label className="titlePayment">Estamos quase lá!</label>
        <label className="subtitlePayment">
          Para o pagamento ser efetuado, selecione uma das opções
        </label>
        <div className="containerDivChavePix">
          <img src={qrCode} className="qrCode" />
        </div>
        <div className="containerButtonPaymentMoney">
          <Link to={"/"}>
          <button className="buttonPaymentMoney" type="submit">
            Pagar pessoalmente
          </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ModalPagamento;
