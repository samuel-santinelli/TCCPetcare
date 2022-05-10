import "./style/Home.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

function HomeCliente() {
  return (
    <>
      <Link to={"../"} id="icon-close-home">
        <div>x</div>
      </Link>
      <div id="bannerLogin" className="bannerLogin"></div>
      <div id="waveCliente"></div>
    </>
  );
}

export default HomeCliente;
