import React from "react";
import styleHistorico from "./style/styleHistorico.css"

const HistoricoCliente = () => {
  return (
    <>
      <header>
        <div id="icon-close">x</div>
      </header>
      <main>
        <div id="titulo">
          <span id="text1">Cuidadores</span>
          <span id="text2">Anteriores</span>
        </div>

        <div id="box-container1">
          <div id="pessoas">
            <div class="card">
              <div class="foto"> </div>
              <div class="texts">
                <div class="nome1">Fernanda Silva</div>
                <div class="nome2"> Ontem as 17:30</div>
              </div>
              <div class="texts2">
                <div class="valor">R$35,00</div>
                <div class="local">Alphaville, SP</div>
              </div>
            </div>
            <div class="card">
              <div class="foto"> </div>
              <div class="texts">
                <div class="nome1">Fernanda Silva</div>
                <div class="nome2"> Ontem as 17:30</div>
              </div>
              <div class="texts2">
                <div class="valor">R$35,00</div>
                <div class="local">Alphaville, SP</div>
              </div>
            </div>
            <div class="card">
              <div class="foto"> </div>
              <div class="texts">
                <div class="nome1">Fernanda Silva</div>
                <div class="nome2"> Ontem as 17:30</div>
              </div>
              <div class="texts2">
                <div class="valor">R$35,00</div>
                <div class="local">Alphaville, SP</div>
              </div>
            </div>
            <div class="card">
              <div class="foto"> </div>
              <div class="texts">
                <div class="nome1">Fernanda Silva</div>
                <div class="nome2"> Ontem as 17:30</div>
              </div>
              <div class="texts2">
                <div class="valor">R$35,00</div>
                <div class="local">Alphaville, SP</div>
              </div>
            </div>
          </div>
          <div id="mapa"> </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default HistoricoCliente;
