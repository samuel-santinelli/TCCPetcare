import "./style/Home.css";
import { BiArrowBack } from "react-icons/bi";
import { Link} from "react-router-dom";

function HomeCuidador() {
  return (
    <>
      <Link to={"../"} className="containerIconBack">
        <BiArrowBack className="iconBack" />
      </Link>
      <div id="banner" className="banner"></div>
      <div id="wave" className="wave"></div>
    </>
  );
}

export default HomeCuidador;
