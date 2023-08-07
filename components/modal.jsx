"use client";

import styles from "../styles/Modal.module.css";
import { useState } from "react";
import ModalForm from "./modalForm";
import ModalTerms from "./modalTerms";

const Modal = ({ isVisible, onClose, modalType }) => {
  const [pageScroll] = useState(false);
  const typeForm = "modalForm";
  const typeTerms = "modalTerms";

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
        <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
          <div className={styles.content}>
            {modalType === typeForm && <ModalForm onClose={onClose}></ModalForm>}
            {modalType === typeTerms && <ModalTerms onClose={onClose}> </ModalTerms>}
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
