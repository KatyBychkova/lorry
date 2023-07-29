"use client";

import styles from "../styles/CallToAction.module.css";
import config from "../config/index";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const CallToAction = () => {
  const { callToAction } = config;
  const { title, imageBack, imageFront, terms, labelName, labelTel, placeholderName, placeholderTel, submitBtnText } = callToAction;
  const [name, setName] = useState("");
  //   const [tel, setTel] = useState("");

  //   const [values, setValues] = useState({
  //     name: "",
  //     tel: "",
  //   });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value);
    setName(value);
    // setValues((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* <div className={styles.images}>
            <Image className={styles.imageBack} src={imageBack} layout="intrinsic" width={560} height={440} objectPosition="right"></Image>
            <Image className={styles.imageFront} src={imageFront} layout="intrinsic" width={412} height={483}></Image>
          </div> */}
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.form}>
              <form onSubmit={handleSubmit}>
                <p>
                  <label htmlFor="name">{labelName}</label>
                  {/* <input id="name" type="text" name="email" /> */}
                  <input placeholder={placeholderName} type="text" name="name" onChange={handleChange} />
                </p>

                <p>
                  <label htmlFor="tel">{labelTel}</label>
                  <input id="tel" placeholder={placeholderTel} type="text" name="email" onChange={handleChange} />
                </p>

                <p>
                  <button type="submit">Отправить</button>
                </p>
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
