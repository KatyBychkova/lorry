"use client";

import styles from "../styles/ModalSubmitted.module.css";
import IconSubmitted from "./iconSubmitted";
import CloseButtonIcon from "./closeButtonIcon";

const modalSubmitted = ({ onClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <div className={styles.icon_wrapper}>
            <IconSubmitted></IconSubmitted>
          </div>

          <div className={styles.text}>Спасибо! Данные успешно отправлены!</div>

          <button
            className={styles.close_btn}
            onClick={() => {
              onClose();
            }}
          >
            <CloseButtonIcon></CloseButtonIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default modalSubmitted;
