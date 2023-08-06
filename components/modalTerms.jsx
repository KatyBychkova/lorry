"use client";

import styles from "../styles/ModalTerms.module.css";
import termsContent from "../config/terms";
import { useState } from "react";

const ModalTerms = ({ isVisibleTerms, onClose, children }) => {
  const { title, paragraphs, agreement } = termsContent;
  const [pageScrollTerms] = useState(false);

  if (isVisibleTerms && !pageScrollTerms) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  if (!isVisibleTerms) return null;

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
            <div className={styles.title}>
              <h1 className={styles.title_text}>
                {title.text}
                <span className={styles.title_attrubutes}>{title.attributes}</span>
              </h1>
            </div>
            <div className={styles.paragraphs}>
              {paragraphs.map((item, index) => (
                <div className={styles.paragraph} key={index}>
                  <h4>{item.title}</h4>
                  {item.points.map((point, i) => (
                    <p className={styles.point} key={i}>
                      {point}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className={styles.agreement}>{agreement}</div>
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

export default ModalTerms;
