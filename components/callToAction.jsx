"use client";

import styles from "../styles/CallToAction.module.css";
import config from "../config/index";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CallToAction = () => {
  const { callToAction } = config;
  const { title, imageBack, imageFront, terms, labelName, labelTel, placeholderName, placeholderTel, submitBtnText } = callToAction;

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [valid, setValid] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log([`"${name}": "${tel}"`]);
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleTelChange = (value) => {
    setTel(value);
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.images}>
            <Image className={styles.imageBack} src={imageBack.src} fill sizes="(max-width: 1200px) 560" alt={imageBack.alt} priority={true}></Image>

            <Image className={styles.imageFront} src={imageFront.src} fill sizes="(max-width: 1200px) 560"></Image>
          </div>
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.form}>
              <form onSubmit={handleSubmit}>
                <div className={styles.form_name}>
                  <label className={styles.label_name} htmlFor="name">
                    {labelName}
                  </label>
                  <input id="name" placeholder={placeholderName} type="text" name="name" value={name} onChange={handleNameChange} />
                </div>

                <div className={styles.form_tel}>
                  <label className={styles.label_tel} htmlFor="tel">
                    {labelTel}
                  </label>
                  <PhoneInput id="tel" placeholder={placeholderTel} country={"ru"} name="tel" value={tel} onChange={handleTelChange} inputProps={{ required: true }} />
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
              {terms.text} <button className={styles.terms_btn}>{terms.linkText}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
