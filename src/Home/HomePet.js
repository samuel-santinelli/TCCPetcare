import "./style/Home.css";
import {Link} from "react-router-dom"

function HomePet() {
  return (
    <>
         <Link to={"../"} id="icon-close-home">
        <div>x</div>
      </Link>
      <div id="bannerPet" className="bannerPet"></div>
      <div id="wavePetMain" ></div>
    </>
  );
}

export default HomePet;
