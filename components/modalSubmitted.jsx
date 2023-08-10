"use client";

import styles from "../styles/ModalSubmitted.module.css";
import config from "../config/index";
import IconSubmitted from "./iconSubmitted";
import CloseButtonIconForModalSubmitted from "./closeButtonIconForModalSubmitted";
import CloseButtonForModal from "./closeButtonForModal";

const modalSubmitted = ({ onClose }) => {
  const { successSubmit } = config;
  const { text } = successSubmit;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <div className={styles.icon_wrapper}>
            <IconSubmitted></IconSubmitted>
          </div>

          <div className={styles.text}>{text}</div>

          <div className={styles.close_btn}>
            <CloseButtonForModal onClose={onClose}>
              <CloseButtonIconForModalSubmitted></CloseButtonIconForModalSubmitted>
            </CloseButtonForModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modalSubmitted;
