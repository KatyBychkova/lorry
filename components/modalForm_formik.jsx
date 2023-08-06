"use client";

import config from "../config/index";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import inputStyles from "../styles/inputTelStyles";
import styles from "../styles/Modal.module.css";
import * as Yup from "yup";
import { validator } from "../utils/validator";
import { useFormik } from "formik";

const ModalForm = () => {
  const { modal, cities } = config;
  const { placeholderName, labelTel, placeholderTel, labelDept, submitBtnText } = modal;
  const { inputTelStylesModal } = inputStyles;

  const formik = useFormik({
    initialValues: {
      name: "",
      tel: "",
      dept: "",
    },
    onSubmit: (values) => {
      console.log("submit", values);
    },

    validationSchema: Yup.object().shape({
      name: Yup.string().required("Поле обязательно для заполнения"),
      // tel: Yup.string().required("Поле обязательно для заполнения"),
      // .matches(/^[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/, "Данные некорректны"),
    }),
  });
  const [tel, setTel] = useState("");
  const handleTelChange = (value) => {
    setTel(value);
  };

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.form_name}>
        <input id="name" placeholder={placeholderName} type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
        {formik.errors.name && formik.touched.name && <div style={{ color: "red" }}> {formik.errors.name}</div>}
      </div>

      <div className={styles.form_tel}>
        <label className={styles.label_tel} htmlFor="tel">
          {labelTel}
        </label>
        <PhoneInput
          id="tel"
          country="ru"
          name="tel"
          value={tel}
          onChange={handleTelChange}
          inputProps={{ required: true }}
          inputStyle={{ ...inputTelStylesModal }}
          specialLabel={null}
        />
        {formik.errors.tel && formik.touched.tel && <div style={{ color: "red" }}> {formik.errors.tel}</div>}
      </div>

      {/* <div className={styles.form_dept}>
        <div className={styles.label_dept}>{labelDept}</div>
        <select className={styles.depts} name="dept" onChange={handleDeptChange}>
          {cities.map((item, index) => (
            <option className={styles.item} key={`${item}-${index}`} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div> */}

      <div className={styles.callToAction}>
        <button className={styles.callToAction_btn} type="submit">
          {submitBtnText}
        </button>
      </div>
    </form>
  );
};

export default ModalForm;
