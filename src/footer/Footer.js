import "./style/FooterStyle.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="containerLink">
      <Link to={"/Login"}>
      <a href="">Já tem uma conta? </a>
      <a className="linkEntreAgora">Entre agora</a>
      </Link>
    </div>
  );
}

export default Footer;