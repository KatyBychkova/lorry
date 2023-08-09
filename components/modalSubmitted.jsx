"use client";

import styles from "../styles/ModalSubmitted.module.css";
import { useState } from "react";
import ModalForm from "./modalForm";
import ModalTerms from "./modalTerms";
import IconSubmitted from "./iconSubmitted";
import CloseButton from "./closeButton";

const modalSubmitted = ({ isVisible, onClose, modalType }) => {
  const [pageScroll] = useState(false);
  const typeForm = "modalForm";
  const typeTerms = "modalTerms";

  // isVisible && !pageScroll
  //   ? ((document.body.style.overflow = "hidden"), (document.body.style.paddingRight = "22px"))
  //   : ((document.body.style.overflow = "auto"), (document.body.style.paddingRight = "0")); // paddingRight задан, чтобы страница за модальным окном не дергалась из-за пропадающего/появляющегося скролла справа

  // if (!isVisible) return null;

  return (
    <div className={styles.modal_success}>
      <IconSubmitted></IconSubmitted>
      <div>Спасибо! Данные успешно отправлены!</div>
      <CloseButton></CloseButton>
    </div>
  );
};

export default modalSubmitted;
