"use client";

import styles from "../styles/modal/Modal.module.css";
import { useEffect, useState } from "react";
import ModalForm from "./modal/modalForm";
import ModalTerms from "./modal/modalTerms";
import ModalSubmitted from "./modal/modalSubmitted";
import CloseButtonForModal from "./modal/closeButtonForModal";
import CloseButtonIconForModal from "./images/iconCloseForModal";

const Modal = ({ isVisible, onClose, modalType, openModal, setModal }) => {
  const [pageScroll] = useState(false);
  const typeForm = "modalForm";
  const typeTerms = "modalTerms";
  const typeModalSubmitted = "modalSubmitted ";

  useEffect(() => {
    isVisible && !pageScroll
      ? ((document.body.style.overflow = "hidden"), (document.body.style.paddingRight = "22px"))
      : ((document.body.style.overflow = "auto"), (document.body.style.paddingRight = "0")); // paddingRight задан, чтобы страница за модальным окном не дергалась из-за пропадающего/появляющегося скролла справа
  });

  if (!isVisible) return null;

  const handleModalSubmittedIsOpen = () => {
    openModal(true), setModal(typeModalSubmitted);
  };

  return (
    <div
      className={styles.main}
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
