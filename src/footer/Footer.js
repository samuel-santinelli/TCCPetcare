import "./style/FooterStyle.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="containerLink">
      <Link to={"/Login"}>
      <label className="linkHaveAccount">Já tem uma conta? </label>
      <label className="linkEntreAgora">Entre agora</label>
      </Link>
    </div>
  );
}

export default Footer;