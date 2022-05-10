import React from "react";
import {
  AiOutlineSearch,
  AiOutlineHistory,
  AiOutlineExport,
} from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import "./style/styleSideBar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar }) => {
  const imagePerfil =
    "https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <Link to="/PerfilCliente">
        <img src={imagePerfil} className="imageSidebar" alt="" />

        <li className="nameCuidadorSidebar">Maria Silva</li>

        <AiOutlineSearch className="iconSidebar" />
      </Link>
      <Link to="/Agendamento">
        <li className="nameLi">Buscar</li>
        <AiOutlineHistory className="iconSidebar" />
      </Link>
      <Link to="/HistoricoCliente">
        <li className="nameLi">Histórico</li>
        <FaClipboardList className="iconSidebar" />
      </Link>
      <Link to="/HistoricoCliente">
        <li className="nameLi">Andamento</li>
      </Link>
      <AiOutlineExport className="iconSidebar" />
      <li className="nameLi">Logout</li>
    </div>
  );
};

export default Sidebar;
