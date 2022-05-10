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
          <a href="">Não tem uma conta?</a>
          <a className="linkEntreAgora">Cadastre-se já!</a>
        </Link>
      </div>
    </>
  );
}

export default FooterLogin;
