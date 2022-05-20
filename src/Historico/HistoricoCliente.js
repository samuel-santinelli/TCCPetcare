import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styleHistorico from "./style/styleHistorico.css";

const HistoricoCliente = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/Cuidador/Cuidador/api/cuidador")
      .then((res) => {
        setHistory(res.data);
      })
      .catch(() => {
        console.log("Deu erro na busca de cuidador");
      });
  }, []);
  return (
    <>
      <header>
        <Link to={"../"}>
          <div id="icon-close">x</div>
        </Link>
      </header>
      <main>
        <div id="titulo">
          <span id="text1">Cuidadores</span>
          <span id="text2"> Anteriores</span>
        </div>

        <div id="box-container1">
         
          <div id="pessoas">
            {history.map((historyServices, key) => (
              <div class="card-history" key={key}>
                <div class="foto" />
                <div class="texts">
                  <div class="nome1">{historyServices.nome}</div>
                  <div class="nome2"> {historyServices.moradia}</div>
                </div>
              </div>
            ))}
          </div>
   
          <div id="containerMapaHistory">
            <iframe
              className="mapHistory"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29276.363111143826!2d-46.88371138889647!3d-23.4768574223817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03aaf6d062af%3A0x2c22de58cd7f17f1!2sAlphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006542-115!5e0!3m2!1spt-BR!2sbr!4v1640096190707!5m2!1spt-BR!2sbr"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default HistoricoCliente;