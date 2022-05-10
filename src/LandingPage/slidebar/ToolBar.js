import React from "react";
import {
  AiOutlineSearch,
  AiOutlineHistory,
  AiOutlineExport,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import "./style/styleSideBar.css";

const ToolBar = ({ openSidebar }) => {
  return (
    <div className="tool-bar">
      <div className="burguer" onClick={openSidebar}>
        <div className="containerIconsSidebar">
          <AiOutlineMenu className="menu-line" />
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
