"use client";

import config from "../config/index";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import inputStyles from "../styles/inputTelStyles";
import styles from "../styles/Modal.module.css";
import * as yup from "yup";
import { validator } from "../utils/validator";

const ModalForm = ({ ...props }) => {
  const { modal, cities } = config;
  const { placeholderName, labelTel, placeholderTel, labelDept, submitBtnText } = modal;
  const { inputTelStylesModal } = inputStyles;

  //   const [name, setName] = useState("");
  //   const [tel, setTel] = useState("");
  //   const [dept, setDept] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [telDirty, setTelDirty] = useState(false);

  const [data, setData] = useState({
    name: "",
    tel: "",
    dept: "",
  });

  const [errors, setErrors] = useState({});

  const blurHandlerName = (e) => {
    e.target.name == "name" ? setNameDirty(true) : null;
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
      min: {
        message: "Имя должно содержать минимум 2 символа",
        value: 2,
      },
      isName: {
        message: "Имя некорректно",
      },
    },
    tel: {
      isRequired: {
        message: "Поле обязательно для заполнения",
      },
      isTel: {
        message: "Номер введен некорректно",
      },
      min: {
        message: "Слишком короткий номер",
        value: 4,
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
    console.log(JSON.stringify(data));
    props.onClose();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={telDirty && errors.tel ? styles.form_error : styles.form_name}>
        <input
          id="name"
          placeholder={placeholderName}
          type="text"
          name="name"
          value={data.name}
          error={errors.name}
          onChange={handleNameChange}
          onBlur={(e) => blurHandlerName(e)}
        />
        {errors.name && nameDirty ? <div className={styles.error_text}>{errors.name}</div> : null}
      </div>
      <div className={styles.form_tel}>
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
          inputStyle={{ ...inputTelStylesModal }}
          specialLabel={null}
          onBlur={(e) => setTelDirty(true)}
        />
        {telDirty && errors.tel ? <div className={styles.error_text}>{errors.tel}</div> : null}
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
        <button className={styles.callToAction_btn} disabled={!isValid} type="submit">
          {submitBtnText}
        </button>
      </div>
    </form>
  );
};

export default ModalForm;