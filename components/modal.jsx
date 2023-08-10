"use client";

import styles from "../styles/Modal.module.css";
import { useState } from "react";
import ModalForm from "./modalForm";
import ModalTerms from "./modalTerms";
import ModalSubmitted from "./modalSubmitted";
import CloseButtonForModal from "./closeButtonForModal";
import CloseButtonIconForModal from "./closeButtonIconForModal";

const Modal = ({ isVisible, onClose, modalType, openModal, setModal }) => {
  const [pageScroll] = useState(false);
  const typeForm = "modalForm";
  const typeTerms = "modalTerms";
  const typeModalSubmitted = "modalSubmitted ";

  isVisible && !pageScroll
    ? ((document.body.style.overflow = "hidden"), (document.body.style.paddingRight = "22px"))
    : ((document.body.style.overflow = "auto"), (document.body.style.paddingRight = "0")); // paddingRight задан, чтобы страница за модальным окном не дергалась из-за пропадающего/появляющегося скролла справа

  if (!isVisible) return null;

  const handleModalSubmittedIsOpen = () => {
    openModal(true), setModal(typeModalSubmitted);
  };

  return (
    <div
      className={styles.modal}
      onClick={() => {
        onClose();
      }}
    >
      {modalType === typeForm && <ModalForm onClose={onClose} openModalSubmitted={handleModalSubmittedIsOpen} setModal={setModal}></ModalForm>}
      {modalType === typeTerms && <ModalTerms onClose={onClose}></ModalTerms>}
      {modalType === typeModalSubmitted && <ModalSubmitted onClose={onClose}> </ModalSubmitted>}
      {modalType !== typeModalSubmitted && (
        <div className={styles.close_btn}>
          <CloseButtonForModal onClose={onClose}>
            <CloseButtonIconForModal></CloseButtonIconForModal>
          </CloseButtonForModal>
        </div>
      )}
    </div>
  );
};

export default Modal;
