import "./style/FooterStyle.css";
import { Link } from "react-router-dom";

function FooterLogin() {
  return (
    <>
      <div className="containerCheckBox">
        <label className="labelInputCheckbox">
          Lembre-se de mim
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <Link to={"/EsqueciMinhaSenha"}>
          <label>Esqueci minha senha</label>
        </Link>
      </div>
      <div id="containerLink">
        <Link to={"/Escolha"}>
          <label className="linkHaveAccount" >Não tem uma conta?</label>
          <label  className="linkEntreAgora">Cadastre-se já!</label>
        </Link>
      </div>
    </>
  );
}

export default FooterLogin;
