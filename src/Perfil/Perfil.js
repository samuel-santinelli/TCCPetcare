import "./style/stylePerfil.css";
import Banner from "../Agendamento/banner/Banner";
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';

const Perfil = () => {
  return (
    <div className="containerMainPerfil">
      <div className="containerBannerPerfil">
        <Banner />
        <div className="mainCard">
          <div className="cardInfoCuidador">
            <div className="imageCuidadorPefil" />
            <div className="nameCuidadorPerfil">Maria da Silva</div>
            <div className="locationCuidadorPerfil">São Paulo</div>
            <div className="infoCardPerfil">
              <div className="titleCenterPerfil">
              {/* <StarBorderPurple500Icon id="inpuIconDesc"/> */}
                <label className="titleServicePerfil">Avaliações</label>
                <label className="titleBioServicePerfil">255</label>
              </div>
              <div className="barra"/>
              <div className="titleCenterPerfilAnimaisCuidados">
                <label className="titleServicePerfil">Animais Cuidados</label>
                <label className="titleBioServicePerfil">304</label>
              </div>
              <div className="barra"/>
              <div className="titleRightPerfil">
              {/* <StarBorderPurple500Icon id="inpuIconDesc"/> */}
                <label className="titleServicePerfil">Premium</label>
                <label className="titleBioServicePerfil">22</label>
              </div>
            </div>
          </div>
        </div>
        <div className="containerBioPerfil">
          <div className="containerTitleBioPerfil">
            <div className="textBioPerfil">Sua <p className="subtitleBio">Biografia</p> </div>
          <div className="bio">
            Sou uma senhora que ama os animais desde minha infância, estou a
            muitos anos nesse rede de cuidadores e tenho muita experiência em
            cuidar de animais.
          </div>
          </div>
          <div className="containerSelectPesoPerfil">
            <h3>Preferencia de Pesos</h3>
            <div>
              <div className="containerInputsSelectPeso2">
                <label className="containerSelectPesoMarked">
                  <div id="peso5kg" />
                </label>
                <label className="containerSelectPesoMarked">
                  <div id="peso10kg" />
                </label>
                <label className="containerSelectPesoMarked">
                  <div id="peso20kg" />
                </label>
                <label className="containerSelectPesoMarked">
                  <div id="peso40kg" />
                  
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;