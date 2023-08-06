"use client";

import styles from "../styles/Modal.module.css";
import { useEffect, useState } from "react";
import ModalForm from "./modalForm_try_val";

const Modal = ({ isVisible, onClose, children }) => {
  const [pageScroll] = useState(false);

  isVisible && !pageScroll ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");

  if (!isVisible) return null;

  return (
    <div
      className={styles.modal}
      onClick={() => {
        onClose();
      }}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <ModalForm></ModalForm>
          </div>
        </div>
      </div>
      <button
        className={styles.close_btn}
        onClick={() => {
          onClose();
        }}
      >
        X
      </button>
    </div>
  );
};

export default Modal;
