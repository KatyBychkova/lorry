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
            {/* <Image className={styles.imageBack} src={imageBack.src} layout="intrinsic" width={412} height={483} alt={imageBack.alt} priority={true}></Image>
            {/* <Image className={styles.imageBack} src={imageBack.src} fill sizes="(max-width: 1200px) 560, (max-width: 1000px) 350px," alt={imageBack.alt} priority={true}></Image> */}

            {/* <Image className={styles.imageFront} src={imageFront} layout="intrinsic" width={412} height={483}></Image> */}
          </div>
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.form}>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">{labelName}</label>
                  {/* <input id="name" type="text" name="email" /> */}
                  <input id="name" placeholder={placeholderName} type="text" name="name" value={name} onChange={handleNameChange} />
                </div>

                <div>
                  <label htmlFor="tel">{labelTel}</label>
                  <PhoneInput id="tel" placeholder={placeholderTel} country={"ru"} name="tel" value={tel} onChange={handleTelChange} inputProps={{ required: true }} />
                </div>

                <div>
                  <button type="submit">{submitBtnText}</button>
                </div>
              </form>
            </div>
            <div className={styles.terms}>
              {terms.text}{" "}
              <span>
                <Link href={terms.href}>{terms.linkText}</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
