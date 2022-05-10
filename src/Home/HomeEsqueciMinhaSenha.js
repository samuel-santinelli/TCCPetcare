import "./style/Home.css";
import { Link } from "react-router-dom";

function HomeEsqueciMinhaSenha() {
  return (
    <>
      <Link to={"../"} id="icon-close-home">
        <div>x</div>
      </Link>
      <div class="bannerEsqueciMinhaSenha"></div>
      <div id="waveEsqueciMinhaSenha" class="waveEsqueciMinhaSenha"></div>
    </>
  );
}

export default HomeEsqueciMinhaSenha;
