"use client";

import styles from "../styles/Modal.module.css";
import config from "../config/index";
import Link from "next/link";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import inputStyles from "../styles/inputTelStyles";

const Modal = ({ isVisible, onClose, children }) => {
  const { modal, cities } = config;
  const { placeholderName, labelTel, placeholderTel, labelDept, submitBtnText } = modal;
  const { inputTelStylesModal } = inputStyles;

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [dept, setDept] = useState("");
  const [valid, setValid] = useState("");
  const [pageScroll] = useState(false);

  // isVisible && !pageScroll ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
  if (isVisible && !pageScroll) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  if (!isVisible) return null;

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleTelChange = (value) => {
    setTel(value);
  };

  const handleDeptChange = (e) => {
    const { value } = e.target;
    setDept(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log([name, tel, dept]);
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
                <input id="name" placeholder={placeholderName} type="text" name="name" value={name} onChange={handleNameChange} />
              </div>

              <div className={styles.form_tel}>
                <label className={styles.label_tel} htmlFor="tel">
                  {labelTel}
                </label>
                <PhoneInput
                  id="tel"
                  country={"ru"}
                  name="tel"
                  value={tel}
                  onChange={handleTelChange}
                  inputProps={{ required: true }}
                  inputStyle={{ ...inputTelStylesModal }}
                  specialLabel={null}
                />
              </div>

              <div className={styles.form_dept}>
                <div className={styles.label_dept}>{labelDept}</div>
                <select className={styles.depts} name="dept" onChange={handleDeptChange}>
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
