import React from "react";

import styles from "./Modal.module.css";
import classes from "../UI/Card.module.css";

const Modal = (props) => {
  const exitModal = (e) => {
    console.log(e.target);
    props.changeModalState(false);
  };

  return (
    <div className={styles.modal} onClick={exitModal}>
      <div className={styles.modal__content}>
        <div className={classes.card}>
          <div className={styles.modal__text}>
            <span className={styles.modal__close} onClick={exitModal}>
              <i className={styles["modal__close--btn"]}>&times;</i>
            </span>
            <p>{props.errMsg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
