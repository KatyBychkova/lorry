"use client";

import config from "../config/index";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import inputStyles from "../styles/inputTelStyles";
import styles from "../styles/Modal.module.css";
import { object, string, number, date, InferType } from "yup";
import { validator } from "../utils/validator";
import { connect, getIn } from "formik";

const ModalForm = () => {
  const { modal, cities } = config;
  const { placeholderName, labelTel, placeholderTel, labelDept, submitBtnText } = modal;
  const { inputTelStylesModal } = inputStyles;

  //   const [name, setName] = useState("");
  //   const [tel, setTel] = useState("");
  //   const [dept, setDept] = useState("");

  const [data, setData] = useState({
    name: "",
    tel: "",
    dept: "",
  });

  const [errors, setErrors] = useState({});

  const ErrorMessage = (props) => {
    // All FormikProps available on props.formik!

    const touch = getIn(props.formik.touched, props.name);
    return touch;
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTelChange = (value) => {
    setData((prev) => ({
      ...prev,
      tel: value,
    }));
  };

  const handleDeptChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Поле обязательно для заполнения",
      },
    },
    tel: {
      isRequired: {
        message: "Поле обязательно для заполнения",
      },
      isTel: {
        message: "Номер введен некорректно",
      },
    },
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log([data]);
    // console.log(Object.keys(errors).length);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {errors.name ? <div style={{ color: "red" }}>{errors.name}</div> : null}
      <div className={styles.form_name}>
        <input id="name" placeholder={placeholderName} type="text" name="name" value={data.name} error={errors.name} onChange={handleNameChange} />
      </div>

      <div className={styles.form_tel}>
        {errors.tel ? <div style={{ color: "red" }}>{errors.tel}</div> : null}
        <label className={styles.label_tel} htmlFor="tel">
          {labelTel}
        </label>
        <PhoneInput
          id="tel"
          country={"ru"}
          name="tel"
          value={data.tel}
          error={errors.tel}
          onChange={handleTelChange}
          inputProps={{ required: true }}
          inputStyle={{ ...inputTelStylesModal, autoFocus: false }}
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
  );
};

export default ModalForm;
