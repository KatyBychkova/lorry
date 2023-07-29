import styles from "../styles/About.module.css";
import config from "../config/index";
import Header from "./header";

const About = () => {
  const { about } = config;
  const { titleBeforAccent, titleAccent, titleAfterAccent, subtitle, description } = about;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Header></Header>
        <h1 className={styles.title}>
          {titleBeforAccent}
          <span> {titleAccent}</span>
          {titleAfterAccent}
        </h1>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <div className={styles.description}>{description}</div>
      </div>
    </section>
  );
};

export default About;
