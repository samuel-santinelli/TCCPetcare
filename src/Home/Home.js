import "./style/Home.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

function HomeCuidador() {
  return (
    <>
      <Link to={"../"} id="icon-close-home">
        <div className="containerExit">x</div>
      </Link>
      <div id="banner" className="banner"></div>
      <div id="wave" className="wave"></div>
    </>
  );
}

export default HomeCuidador;
