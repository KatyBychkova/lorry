"use client";

import styles from "../styles/ModalTerms.module.css";
import termsContent from "../config/terms";

const ModalTerms = ({ ...props }) => {
  const { title, paragraphs, agreement } = termsContent;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1 className={styles.title_text}>
              {title.text}
              <span className={styles.title_attrubutes}>{title.attributes}</span>
            </h1>
          </div>
          <div className={styles.paragraphs}>
            {paragraphs.map((paragraph, index) => (
              <div className={styles.paragraph} key={index}>
                <h4>{paragraph.title}</h4>
                {paragraph.points.map((point, i) => (
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
  );
};

export default ModalTerms;
