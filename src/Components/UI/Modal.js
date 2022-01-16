import React from "react";

import "./Modal.css";

const Modal = (props) => {
  const exitModal = (e) => {
    console.log(e.target);
    props.changeModalState(false);
  };

  return (
    <div className="modal" onClick={exitModal}>
      <div className="modal__content">
        <div className="card">
          <div className="modal__text">
            <span className="modal__close" onClick={exitModal}>
              <i className="modal__close--btn">&times;</i>
            </span>
            <p>{props.errMsg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
