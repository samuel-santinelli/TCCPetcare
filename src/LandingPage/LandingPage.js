import React, { useEffect, useState } from "react";
import styleLandingPage from "./style/styleLandingPage.css"

const LandingPage = () => {

return (
    <>
    <header>
    <div id="parteSuperior">
      <div class="boxBotao">
        <input type="button" id="login-input" value="LOGIN"/>
        <input type="button" id="cadastro-input" value="CADASTRE-SE"/>
      </div>
    </div>
    <div id="parteMeio">
      <div id="div-texto"> 
        PetCare a maior rede de cuidadores da região
      </div>
    </div>
    <div id="parteInferior">
      <input type="button" id="Agendar-agora" value="AGENDE AGORA"/>
    </div>
  </header>

  <main>
  <div class="box-container">
    <img src="./img/Good doggy-amico (2) 1.png" id="img-box-container"/>
    <div class="texto-container">
      <div class="texto-superior">
        <div class="tituloPet-servico">
          PET
        </div>
        <div class="tituloHome-servico">
          HOME
        </div>
      </div>
      <div class="texto-meio">
        O PET HOME permite que o seu PET fique na casa de excelentes cuidadores qualificados
      </div>
    </div>
  </div>
  <div class="box-container">
    <img src="./img/Good doggy-amico (2) 1.png" id="img-box-container"/>
    <div class="texto-container">
      <div class="texto-superior">
        <div class="tituloPet-servico">
          PET
        </div>
        <div class="tituloHome-servico">
          HOME
        </div>
      </div>
      <div class="texto-meio">
        O PET HOME permite que o seu PET fique na casa de excelentes cuidadores qualificados
      </div>
    </div>
  </div>
  <div class="box-container2">
    <span id="text-center">SEU PET </span>
     <span id="text-center2" >SEGURO</span>
  </div>
  <div class="box-container3">
    <div id="div-input">
      <label for="pesquisa-input" class="pesquisa-icon"></label>
      <input type="text" id="input-pesquisa" placeholder="Busque um cuidador"/>
    </div>
    <div id="cuidadores-container">
      <div class="box1">
        <div class="header-box1">
        </div>
      </div>
      <div class="box1">
        <div class="header-box1">
        </div>
      </div>
      <div class="box1">
        <div class="header-box1">
        </div>
      </div>
      <div class="box1">
        <div class="header-box1">
        </div>
      </div>
    </div>
  </div>
  <div class="feedback">
<div id="linha-feedback">
  DEIXE SEU FEEDBACK
</div>
<div id="container-feedback">
  <div id="div-form-feedback">
    <form name="frmfeedback" class="frmfeedback"action="" method="post">
      <div><input type="text" id="txtNome" class="input-feedback" placeholder="SEU NOME"/></div>
      <div><input type="email" id="txtEmail" class="input-feedback"   placeholder="SEU EMAIL"/></div>
      <div> <input type="text" id="txtNumero" class="input-feedback" placeholder="SEU NUMERO" value=""/></div>
      <div><input type="text" id="txtMensagem" class="input-feedback-mensagem" placeholder="SUA MENSAGEM"/></div>
      <div><input type="submit" id="btnEnviar" class="input-feedback-enviar" value="ENVIAR"/></div>
      
    </form>
  </div>
  <div id="img-feedback">
  </div>

</div>
    
  </div>
  </main>

  <footer></footer>
    </>
  );
}

export default LandingPage;