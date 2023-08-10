import styles from "../styles/About.module.css";
import config from "../config/index";
import Header from "./header";

const About = ({ openModal, setModal }) => {
  const { about } = config;
  const { titleBeforAccent, titleAccent, titleAfterAccent, subtitle, description, image } = about;
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <Header openModal={openModal} setModal={setModal}></Header>
          <h1 className={styles.title}>
            {titleBeforAccent}
            <span> {titleAccent}</span>
            {titleAfterAccent}
          </h1>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          <div className={styles.description}>
            {description.map((disc, index) => (
              <p className={styles.description_part} key={index}>
                {disc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
