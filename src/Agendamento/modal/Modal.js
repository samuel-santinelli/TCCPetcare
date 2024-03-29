import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import "./style/styleModal.css";

const Modal = (props) => {
  const { className, modalRef } = props;

  const [querystring] = useSearchParams();
  const idHost = querystring.get("idHost");

  const navigate = useNavigate()

  const date = new Date().toLocaleString();
  console.log(date);

  const foto =
    "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png";

  const idCliente = JSON.parse(localStorage.getItem("idCliente"));
  const pet = JSON.parse(localStorage.getItem("idPet"));
  const priceService = JSON.parse(localStorage.getItem("valueService"));
  const nomeCuidador = JSON.parse(localStorage.getItem("nomeCuidador"));
  const moradiaCuidador = JSON.parse(localStorage.getItem("moradiaCuidador"));
  const cidadeCuidador = JSON.parse(localStorage.getItem("cidadeCuidador"));
  const biografiaCuidador = JSON.parse(
    localStorage.getItem("biografiaCuidador")
  );

  const [agendamento, setAgendamento] = useState({
    nome: "",
    endereco: "",
    cpf: "",
    dataInicial: date,
    dataFinal: date,
    idCliente: idCliente,
    idPet: pet,
    idHost: idHost,
    idTipo: 1,
    valor: priceService ,
    status: "PROCESSO"
  });

  const dateIntial = new Date(agendamento.dataInicial).getDate();
  const dateFinally = new Date(agendamento.dataFinal).getDate();

  const resultPrice = dateFinally - dateIntial + priceService;

  console.log("a data é", resultPrice);

  console.log(agendamento);

  const handleSubmitAgendamento = (agendamento) => {
    axios
      .post("http://localhost/Cuidador/Cuidador/api/agendar", agendamento)
      .then((res) =>
        window.localStorage.setItem("agendamento", JSON.stringify(res.data))
      );
  
    alert("Agendamento realizado com sucesso!");
    navigate("/ModalPagamento")
  };

  const listServices = () => {
    axios
      .get("http://localhost/Cuidador/Cuidador/api/agendar")
      .then((res) => console.log(res.data));
  };

  useEffect(() => {
    listServices();
  }, []);

  const [messageAgendamento, setMessageAgendamento] = useState(true);

  function agendamentoProcess(e) {
    setMessageAgendamento(!messageAgendamento);
  }

  return (
    <form onSubmit={() => handleSubmitAgendamento(agendamento)}>
      <div className="containerInfoCuidadores">
        <div ref={modalRef} className={`${className} cardModalPag`}>
          <div className="containerInfoPagamento">
            <h1>Insira as Informações de Compra</h1>

            <div className="cardModal">
              <div className="containerInfoCuidadorAgendamento">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29276.363111143826!2d-46.88371138889647!3d-23.4768574223817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03aaf6d062af%3A0x2c22de58cd7f17f1!2sAlphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006542-115!5e0!3m2!1spt-BR!2sbr!4v1640096190707!5m2!1spt-BR!2sbr"
                  className="mapCardAgendamentoModal"
                />
                <div className="containerImageCuidadorAgendamento">
                  <img
                    className="imageCuidador"
                    value={foto}
                    src={foto}
                    alt="foto do cuidador"
                  />
                </div>
                <div className="infoCuidador">
                  <label className="nameCuidador" id="nome">
                    {nomeCuidador}
                  </label>
                  <label className="locationCuidadorAgendamento">
                    {moradiaCuidador} ({cidadeCuidador})
                  </label>
                  <label className="biographyCuidador">
                    {biografiaCuidador}
                  </label>
                </div>
              </div>
            </div>

            <div className="containerInputsCompra">
              <label className="labelInputCompra">Seu Nome</label>

              <input
                className="inputCompra"
                type="text"
                placeholder="Digite Seu nome"
                id="nomeAgendamento"
                value={agendamento.nome}
                onChange={(e) =>
                  setAgendamento({ ...agendamento, nome: e.target.value })
                }
              />
              <label className="labelInputCompraRight">Seu CPF</label>
              <InputMask
                className="inputCompra"
                type="text"
                placeholder="Digite Seu CPF"
                
                id="cpfAgendamento"
                value={agendamento.cpf}
                onChange={(e) =>
                  setAgendamento({ ...agendamento, cpf: e.target.value })
                }
              />
            </div>
            <div className="containerInputsCompra">
              <label className="labelInputCompra">Seu Endereço</label>
              <input
                className="inputCompra"
                type="text"
                placeholder="Digite Seu Endereço"
                id="enderecoAgendamento"
                value={agendamento.endereco}
                onChange={(e) =>
                  setAgendamento({ ...agendamento, endereco: e.target.value })
                }
              />
              <label className="labelInputCompraRight">
                Selecione o Tipo de Serviço
              </label>
              <select
                className="inputCompraSelect"
                id="tipoAgendamento"
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
                  type="datetime-local"
                  placeholder="Data De Inicio"
                  value={agendamento.dataInicial}
                  id="dataInicialAgendamento"
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
                {/* datetime-local */}
                <input
                  className="inputCompraDate"
                  type="datetime-local"
                  placeholder="Data De Término"
                  value={agendamento.dataFinal}
                  id="dataFinalAgendamento"
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
              <label className="simbolPriceAgendamento">R$</label>
              <h3
                className="typeServiceCompraServiceTotal"
                value={agendamento.valor}
                onChange={(e) =>
                  setAgendamento({ ...agendamento, valor: e.target.value })
                }
              >
                {resultPrice}
              </h3>

              <button
                type="submit"
                id="submitAgendamento"
                className="InputConfirmarAgendamento"
                onClick={agendamentoProcess}
              >
                {messageAgendamento
                  ? "Confirmar Agendamento"
                  : "Agendamento Realizado"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;
