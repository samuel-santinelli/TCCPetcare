import {
  AiOutlineSearch,
  AiOutlineHistory,
  AiOutlineExport,
} from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import "./style/styleSideBar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = ({ sidebar }) => {
  const [profile, setProfile] = useState([""]);
  const idCliente = window.localStorage.getItem("idCliente")
  const idCuidador = window.localStorage.getItem("idCuidadorLogin")
  console.log("o id do cliente é", idCliente);
  console.log("o id do cuidador é", idCuidador);

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("cliente"));
    if (profile) {
      setProfile(profile);
    }
  }, []);
  console.log(profile);

  const imageCliente = window.localStorage.getItem("imageCliente");
  const foto =
  "https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png";

  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <Link to={"/PerfilCliente?idCliente=" + idCliente}>
        <img src={imageCliente} className="imageSidebar" alt=""  />

        <li className="nameCuidadorSidebar">{profile[0].nome}</li>

        <AiOutlineSearch className="iconSidebar" />
      </Link>
      <Link to={"/Agendamento"}>
        <li className="nameLi">Buscar</li>
        <AiOutlineHistory className="iconSidebar" />
      </Link>
      <Link to={"/HistoricoCliente?idCliente=" + idCliente}>
        <li className="nameLi">Histórico</li>
        <FaClipboardList className="iconSidebar" />
      </Link>
      <Link to={"/HistoricoCuidador?idCuidador=" + idCuidador}>
        <li className="nameLi">Andamento</li>
      </Link>
      <AiOutlineExport className="iconSidebar" />
      <li className="nameLi">Logout</li>
    </div>
  );
};

export default Sidebar;
