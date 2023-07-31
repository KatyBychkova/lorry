import styles from "../styles/About.module.css";
import config from "../config/index";
import Header from "./header";
import Image from "next/image";

const About = ({ openModal }) => {
  const { about } = config;
  const { titleBeforAccent, titleAccent, titleAfterAccent, subtitle, description, image } = about;
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <Header openModal={openModal}></Header>
          <h1 className={styles.title}>
            {titleBeforAccent}
            <span> {titleAccent}</span>
            {titleAfterAccent}
          </h1>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.image_wrapper}>
          <Image className={styles.image} src={image.src} fill sizes="(max-width: 650px) 100vw" alt={image.alt} priority={true}></Image>
        </div>
      </div>
    </section>
  );
};

export default About;
