"use client";

import styles from "../styles/Modal.module.css";
import termsContent from "../config/terms";

const ModalTerms = ({ isVisible, onClose, children }) => {
  const { title, paragraphs, agreement } = termsContent;

  // isVisible && !pageScroll ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");

  // if (!isVisible) return null;

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
            <h1>
              {title.text}
              <span>{title.attributes}</span>
            </h1>

            <div className={styles.tel}>
              {paragraphs.map((item, index) => (
                <div key={index}>
                  <h4>{item.title}</h4>
                  {item.points.map((point, i) => (
                    <p key={i}>{point}</p>
                  ))}
                </div>
              ))}
            </div>
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
