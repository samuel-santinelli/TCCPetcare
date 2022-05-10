import React from "react";
import "./style/styleSideBar.css";

const Backdrop = ({sidebar, closeSidebar}) => {
  return (
    <div className={sidebar?"backdrop backdrop--open":"sidebar"} onClick={closeSidebar}>
      
    </div>
  );
};

export default Backdrop;
