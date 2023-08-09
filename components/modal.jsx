"use client";

import styles from "../styles/Modal.module.css";
import { useState } from "react";
import ModalForm from "./modalForm";
import ModalTerms from "./modalTerms";
import ModalSubmitted from "./modalSubmitted";

const Modal = ({ isVisible, onClose, modalType, openModal, setModal }) => {
  const [pageScroll] = useState(false);
  const typeForm = "modalForm";
  const typeTerms = "modalTerms";
  const typeModalSubmitted = "modalSubmitted ";

  isVisible && !pageScroll
    ? ((document.body.style.overflow = "hidden"), (document.body.style.paddingRight = "22px"))
    : ((document.body.style.overflow = "auto"), (document.body.style.paddingRight = "0")); // paddingRight задан, чтобы страница за модальным окном не дергалась из-за пропадающего/появляющегося скролла справа

  if (!isVisible) return null;

  const handleModalSubmittedOpen = () => {
    openModal(true), setModal(typeModalSubmitted);
  };

  return (
    <div
      className={styles.modal}
      onClick={() => {
        onClose();
      }}
    >
      {modalType === typeForm && <ModalForm onClose={onClose} openModalSubmitted={handleModalSubmittedOpen} setModal={setModal}></ModalForm>}
      {modalType === typeTerms && <ModalTerms onClose={onClose}></ModalTerms>}
      {modalType === typeModalSubmitted && <ModalSubmitted onClose={onClose}> </ModalSubmitted>}

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
