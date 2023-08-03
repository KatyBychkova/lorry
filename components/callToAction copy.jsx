"use client";

import styles from "../styles/CallToAction.module.css";
import config from "../config/index";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import inputStyles from "../styles/inputTelStyles";
import { useForm } from "react-hook-form";
import { validator } from "@/utils/validator";

const CallToAction = () => {
  const { callToAction } = config;
  const { title, imageBack, imageFront, terms, labelName, labelTel, placeholderName, placeholderTel, submitBtnText } = callToAction;
  const { inputTelStyles } = inputStyles;
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: "",
    tel: "",
  });

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
    },
  };
  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0; // возвращает true если ошибок валидации нет
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log([`"${data.name}": "${data.tel}"`]);

    // console.log([data]);
  };

  // console.log([errors]);
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.images}>
            <div className={styles.imageBack_inner}>
              <Image className={styles.imageBack} src={imageBack.src} fill sizes="(max-width: 1200px) 560" alt={imageBack.alt} priority={true}></Image>
            </div>

            <Image className={styles.imageFront} src={imageFront.src} width={412} height={483} alt={imageFront.alt} priority={true}></Image>
          </div>
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.form}>
              <form onSubmit={handleSubmit}>
                <div className={styles.form_name}>
                  <label className={styles.label_name} htmlFor="name">
                    {labelName}
                  </label>
                  {errors.name && <p>{error}</p>}
                  <input id="name" placeholder={placeholderName} type="text" name="name" value={data.name} onChange={handleNameChange} />
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
                    onChange={handleTelChange}
                    inputProps={{ required: true }}
                    inputStyle={{ ...inputTelStyles }}
                    specialLabel={null}
                  />
                </div>
                <div className={styles.callToAction}>
                  <div>
                    <button className={styles.callToAction_btn} type="submit">
                      {submitBtnText}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className={styles.terms}>
              {terms.text}
              <span>
                <button className={styles.terms_btn}>{terms.linkText}</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

/*

<form onSubmit={handleSubmit(onSubmit)}>
<div className={styles.form_name}>
  <label className={styles.label_name} htmlFor="name">
    {labelName}
  </label>
  <input
    {...register("name", {
      required: "Поле обязательно для заполнения",
    })}
    id="name"
    placeholder={placeholderName}
  />
  <ErrorMessage
    errors={errors}
    name="name"
    render={({ messages }) => {
      console.log("messages", messages);
      return messages ? Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>) : null;
    }}
  />
</div>

<div className={styles.form_tel}>
  <label className={styles.label_tel} htmlFor="tel">
    {labelTel}
  </label>

  <Controller
    control={control}
    name="tel"
    // rules={{ required: true }}
    render={({ field: { ref, ...field } }) => (
      <PhoneInput
        {...field}
        id="tel"
        country={"ru"}
        name="tel"
        {...register("tel", {
          required: "Поле обязательно для заполнения",
        })}
        // onChange={handleTelChange}
        inputProps={{ ref, required: true }}
        inputStyle={{ ...inputTelStyles }}
        specialLabel={null}
      />
    )}
  />
  {/* <ErrorMessage
    errors={errors}
    name="name"
    render={({ messages }) => {
      console.log("messages", messages);
      return messages ? Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>) : null;
    }}
  /> */}
</div>

<div className={styles.callToAction}>
  <div>
    <button className={styles.callToAction_btn} type="submit">
      {submitBtnText}
    </button>
  </div>
</div>
</form>*/
