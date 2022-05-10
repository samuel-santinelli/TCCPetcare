import React from "react";
import "./style/styleModal.css";
const Modal = (props) => {
  const { className, modalRef } = props;

  return (
    <div className="containerInfoCuidadores">
      <div ref={modalRef} className={`${className} cardModalPag`}>
        <div className="containerInfoPagamento">
          <h1>Insira as Informações de Compra</h1>
          <div className="containerInputsCompra">
            <label className="labelInputCompra">Seu Nome</label>
            <input
              className="inputCompra"
              type="text"
              placeholder="Digite Seu nome"
            />
            <label className="labelInputCompraRight">Seu CPF</label>
            <input
              className="inputCompra"
              type="text"
              placeholder="Digite Seu CPF"
            />
          </div>
          <div className="containerInputsCompra">
            <label className="labelInputCompra">Seu Endereço</label>
            <input
              className="inputCompra"
              type="text"
              placeholder="Digite Seu CPF"
            />
            <label className="labelInputCompraRight">
              Selecione o Tipo de Serviço
            </label>
            <select className="inputCompraSelect">
              <option>Pet Home</option>
              <option>Pet Trip</option>
            </select>
          </div>
          <div className="containerInputsCompra">
            <label className="labelInputCompraDate">Para Quando?</label>
            <div className="containerInputsDateCompra">
              <label className="labelInputCompra">
                Data de inicio do serviço
              </label>
              <input
                className="inputCompraDate"
                type="date"
                placeholder="Data De Inicio"
              />
              <label className="labelInputCompra">
              Data final do serviço
              </label>
              <input
                className="inputCompraDate"
                type="date"
                placeholder="Data De Término"
              />
            </div>
            <div className="containerInputsInfoCompra">
              <h2 className="typeServiceCompra">Serviço</h2>
              <h2 className="typeServiceCompraService">Pet Home</h2>
            </div>
          </div>
          <div className="containerInputsInfoCompra">
            <h2 className="typeServiceCompra">Total</h2>
            <h2 className="typeServiceCompraService">R$157,09</h2>
            <input type="button" className="InputConfirmarAgendamento" value="Confirmar Agendamento"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
