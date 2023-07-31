"use client";

import styles from "../styles/CallToAction.module.css";
import config from "../config/index";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const CallToAction = () => {
  const { callToAction } = config;
  const { title, imageBack, imageFront, terms, labelName, labelTel, placeholderName, placeholderTel, submitBtnText } = callToAction;

  const [data, setData] = useState({
    name: "",
    tel: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log([`"${data.name}": "${data.tel}"`]);
  };

  const handleChange = ({ target }) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
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
                <p>
                  <label htmlFor="name">{labelName}</label>
                  {/* <input id="name" type="text" name="email" /> */}
                  <input id="name" placeholder={placeholderName} type="text" name="name" value={data.name} onChange={handleChange} />
                </p>

                <p>
                  <label htmlFor="tel">{labelTel}</label>
                  <input id="tel" placeholder={placeholderTel} type="text" name="tel" value={data.tel} onChange={handleChange} />
                </p>

                <p>
                  <button type="submit">{submitBtnText}</button>
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
