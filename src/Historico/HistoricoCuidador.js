import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import "./style/styleHistorico.css";
import SearchIcon from "@mui/icons-material/Search";

const HistoricoCuidador = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  
  const semFoto =
    "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png";
  const [querystring] = useSearchParams();

  const idCuidador = querystring.get("idCuidador");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost/Cuidador/Cuidador/api/historico/${idCuidador}`
        );
        const data = await response.json();
        setHistory(data);

        setSearchHistory(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSearchHistory = ({ target }) => {
    if (!target.value) {
      setSearchHistory(history);
      return;
    }

    const filterHistory = searchHistory.filter(({ nomePet }) =>
      nomePet.includes(target.value)
    );

    setSearchHistory(filterHistory);
  };

  const [messageDecision, setMessageDecision] = useState(true);

  const [editStatus, setEditStatus] = useState(
    {
      status: "ACEITO"
    },
  );

  const [editStatusRecused, setEditStatusRecused] = useState(
    {
      status: "RECUSADO"
    },
  );

  function detectIdService({target}) {
    const idServico = target.getAttribute("data-id");
    console.log(idServico);
    navigate("/HistoricoCuidador?idServico=" + idServico);
  }

  function DecisionCuidadorAcept() {
    const idServicoUrl = querystring.get("idServico");
    console.log(idServicoUrl);

    axios
      .put(
        `http://localhost/Cuidador/Cuidador/api/agendar/status/${idServicoUrl}`,
        editStatus,
     
      )
      .then((res) => {
        setEditStatus(console.log({ UpdatedAt: res.data.updatedAt }));
      });

    setMessageDecision(!messageDecision);
    const recused = document.getElementById("recused");
    recused.style.display = "none";
  }

  console.log(editStatus);

  function DecisionCuidadorRecused() {
    const idServicoUrl = querystring.get("idServico");
    console.log(idServicoUrl);
    axios
      .put(
        `http://localhost/Cuidador/Cuidador/api/agendar/status/${idServicoUrl}`,
        editStatusRecused,
     
      )
      .then((res) => {
        setEditStatusRecused(console.log({ UpdatedAt: res.data.updatedAt }));
      });

    setMessageDecision(!messageDecision);
    const acept = document.getElementById("acept");
    acept.style.display = "none";

  }


  return (
    <>
      <Link to={"../"}>
        <div id="icon-close">x</div>
      </Link>

      <main>
        <div id="titulo">
          <span id="text1">Serviços em </span>
          <span id="text2"> Processo</span>
        </div>
        <SearchIcon id="iconSearchHistory" />
        <input
          type="search"
          className="inputSearchHistory"
          placeholder="Busque um cuidador especifico (Ex: Maria Antonieta)"
          onChange={handleSearchHistory}
        />
        <div id="box-container1">
          <div id="pessoas">
            {searchHistory.map((historyServices, key) => (
              <div
                className="card-history"
                key={key}
                data-id={historyServices.idServico}
                onClick={detectIdService}
              >
                <div className="direcionar">
                  <div className="containerFotoHistory">
                    <img
                      className="foto"
                      src={semFoto}
                      value={semFoto}
                      alt="foto pet"
                    />
                    <img
                      className="foto"
                      src={semFoto}
                      value={semFoto}
                      alt="foto pet"
                    />
                    <img
                      className="foto"
                      src={semFoto}
                      value={semFoto}
                      alt="foto pet"
                    />
                  </div>
                </div>

                <div className="texts">
                  <div className="containerNameHistory">
                    <div className="direcionarNames">
                      <div className="nome1">{historyServices.nomeHost}</div>
                      <div className="nome1">{historyServices.nomePet}</div>
                      <div className="nome1">{historyServices.nome}</div>
                    </div>
                  </div>

                  <div className="direcionarEndereco">
                    <div className="labelEndereco">
                      {historyServices.endereco}
                    </div>
                  </div>

                  <div className="containerDateHistory">
                    <div className="nome3">
                      <label className="dateHistory">Do dia</label>
                      {historyServices.dataInicial}
                    </div>
                    <div className="nome3">
                      <label className="dateHistory2">Ao dia</label>
                      {historyServices.dataFinal}
                    </div>
                  </div>

                  <p className="valorServiceHistory">
                    Valor R$ {historyServices.valor}
                  </p>

                  <div className="containerStatusService">
                    <div className="statusService">
                      <label
                        className="respStatusAcept"
                        onClick={DecisionCuidadorAcept}
                        id="acept"
                      >
                        {messageDecision ? "Aceitar" : "Serviço aceito"}
                      </label>
                      <label
                        onClick={DecisionCuidadorRecused}
                        id="recused"
                        className="respStatusRecused"
                      >
                        {messageDecision ? "Recusar" : "Serviço Recusado"}
                      </label>
                    </div>
                  </div>
                  {/* <iframe
                    className="mapHistory"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29276.363111143826!2d-46.88371138889647!3d-23.4768574223817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03aaf6d062af%3A0x2c22de58cd7f17f1!2sAlphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006542-115!5e0!3m2!1spt-BR!2sbr!4v1640096190707!5m2!1spt-BR!2sbr"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default HistoricoCuidador;
