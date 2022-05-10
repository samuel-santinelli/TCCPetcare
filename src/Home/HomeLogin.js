import "./style/Home.css";
import { Link} from "react-router-dom";

function HomeLogin() {
    return (
      <>
        <Link to={"../"} id="icon-close-home">
          <div >x</div>
        </Link>
        <div className="bannerLogin"></div>
        <div id="waveLogin" className="wavelogin"></div>
      </>
    );
  }

export default HomeLogin;