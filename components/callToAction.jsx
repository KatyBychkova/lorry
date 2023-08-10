"use client";

import styles from "../styles/CallToAction.module.css";
import config from "../config/index";
import Image from "next/image";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import inputStyles from "../styles/inputTelStyles";
import { validator } from "../utils/validator";

const CallToAction = ({ openModal, setModal }) => {
  const { callToAction } = config;
  const { title, imageBack, imageFront, terms, labelName, labelTel, placeholderName, placeholderTel, submitBtnText } = callToAction;
  const { inputTelStyles, inputTelStylesError } = inputStyles;

  const typeTerms = "modalTerms";
  const typeModalSubmitted = "modalSubmitted ";

  const [nameDirty, setNameDirty] = useState(false);
  const [telDirty, setTelDirty] = useState(false);

  const [initialData] = useState({
    name: "",
    tel: "",
  });

  const [data, setData] = useState(initialData);

  const [errors, setErrors] = useState({});

  const blurHandlerName = (e) => {
    e.target.name == "name" ? setNameDirty(true) : null;
  };

  const cleanForm = () => {
    setNameDirty(false);
    setTelDirty(false);
    setData(initialData);
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
        value: 9,
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
    openModal(true), setModal(typeModalSubmitted);
    cleanForm();
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.images}>
            <div className={styles.imageBack_inner}>
              <Image className={styles.imageBack} src={imageBack.src} fill sizes="(max-width: 1200px) 560" alt={imageBack.alt}></Image>
            </div>

            <Image className={styles.imageFront} src={imageFront.src} width={412} height={483} alt={imageFront.alt}></Image>
          </div>
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.form}>
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
                    style={errors.name && nameDirty ? { borderColor: "#d1274a", boxShadow: "none" } : { borderColor: "#064488" }}
                  />
                  {errors.name && nameDirty ? <div className={styles.error_text}>{errors.name}</div> : null}
                </div>
                <div className={styles.form_tel}>
                  <label className={styles.label_tel} htmlFor="tel">
                    {labelTel}
                  </label>
                  <PhoneInput
                    id="tel"
                    country="ru"
                    name="tel"
                    value={data.tel}
                    error={errors.tel}
                    placeholder={placeholderTel}
                    onChange={handleTelChange}
                    inputProps={{ required: true }}
                    inputStyle={telDirty && errors.tel ? { ...inputTelStylesError } : { ...inputTelStyles }}
                    specialLabel={null}
                    onBlur={(e) => setTelDirty(true)}
                  />
                  {telDirty && errors.tel ? <div className={styles.error_text}>{errors.tel}</div> : null}
                </div>

                <div className={styles.callToAction}>
                  <div>
                    <button className={styles.callToAction_btn} disabled={!isValid} type="submit">
                      {submitBtnText}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className={styles.terms}>
              {terms.text}
              <span>
                <button
                  className={styles.terms_btn}
                  onClick={() => {
                    openModal(true), setModal(typeTerms);
                  }}
                >
                  {terms.linkText}
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
