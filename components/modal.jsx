"use client";

import styles from "../styles/Modal.module.css";
import config from "../config/index";

import Link from "next/link";

import { useState } from "react";

const Modal = ({ isVisible, onClose, children }) => {
  const { modal, cities } = config;
  const { placeholderName, labelTel, placeholderTel, labelDept, submitBtnText } = modal;

  const [data, setData] = useState({
    name: "",
    tel: "",
    dept: "",
  });

  if (!isVisible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log([`"${data.name}": "${data.tel}", "${data.name}": "${data.dept}"`]);
  };

  const handleChange = ({ target }) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };
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
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.form_name}>
                <input id="name" placeholder={placeholderName} type="text" name="name" value={data.name} onChange={handleChange} />
              </div>

              <div className={styles.form_tel}>
                <label htmlFor="tel">{labelTel}</label>
                <input id="tel" placeholder={placeholderTel} type="text" name="tel" value={data.tel} onChange={handleChange} />
              </div>

              <div className={styles.form_dept}>
                <div className={styles.label_dept}>{labelDept}</div>
                <select className={styles.depts} name="dept" onChange={handleChange}>
                  {cities.map((item, index) => (
                    <option className={styles.item} key={`${item}-${index}`} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.callToAction}>
                <button className={styles.callToAction_btn} type="submit">
                  {submitBtnText}
                </button>
              </div>
            </form>
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

{
  /* <div className={styles.callToAction}>
          <div>
            <Link className={styles.callToAction_btn} href={callToAction.href}>
              {callToAction.text}
            </Link>
          </div>
        </div> */
}
