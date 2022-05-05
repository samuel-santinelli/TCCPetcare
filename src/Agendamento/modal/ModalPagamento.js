import React from "react";
import "./style/styleModal.css";
const ModalPagamento = (props) => {
  const { classNamePag, modalRefPag } = props;

  return (
    <div className="containerInfoCuidadores">
      <div ref={modalRefPag} className={`${classNamePag} cardModalPag`}>
       <div className="containerInfoPagamento">

       </div>
      </div>
    </div>
  );
};

export default ModalPagamento;
