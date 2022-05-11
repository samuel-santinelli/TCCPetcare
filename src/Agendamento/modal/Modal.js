import axios from "axios";
import React, { useState } from "react";
import "./style/styleModal.css";
const Modal = (props) => {
  const { className, modalRef } = props;

  const [agendamento, setAgendamento] = useState({
    valor: 22,
    dataInicial: "2022-02-02",
    dataFinal: "2022-02-07",
    idHost: 22,
    idPet: 23,
    idTipo: 2,
    idCliente: 34,
  });
  console.log(agendamento);

  const handleSubmitAgendamento = (agendamento) => {
    axios
      .post("http://localhost/Cuidador/Cliente/api/agendamento", agendamento)
      .then((res) => setAgendamento(res.data));
  };

  return (
    <form onSubmit={() => handleSubmitAgendamento(agendamento)}>
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
              <select
                className="inputCompraSelect"
                value={agendamento.idTipo}
                onChange={(e) =>
                  setAgendamento({ ...agendamento, idTipo: e.target.value })
                }
              >
                <option value={1}>Pet Home</option>
                <option value={2}>Pet Trip</option>
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
                  type="datetime"
                  placeholder="Data De Inicio"
                  value={agendamento.dataInicial}
                  onChange={(e) =>
                    setAgendamento({
                      ...agendamento,
                      dataInicial: e.target.value,
                    })
                  }
                />
                <label className="labelInputCompra">
                  Data final do serviço
                </label>
                <input
                  className="inputCompraDate"
                  type="datetime"
                  placeholder="Data De Término"
                  value={agendamento.dataFinal}
                  onChange={(e) =>
                    setAgendamento({
                      ...agendamento,
                      dataFinal: e.target.value,
                    })
                  }
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
              <input
                type="button"
                className="InputConfirmarAgendamento"
                value="Confirmar Agendamento"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;
