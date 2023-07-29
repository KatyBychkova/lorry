import styles from "../styles/Benefits.module.css";
import config from "../config/index";

const Benefits = () => {
  const { benefits } = config;
  const { title, items } = benefits;

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.items}>
        {items.map((item, index) => (
          <div className={styles.item} key={`${item}-${index}`}>
            <div className={styles.item_wrapper}>
              <div className={styles.item_image}>
                <div className={styles[item.imageName]}></div>
              </div>

              <h2 className={styles.item_title}>{item.name}</h2>
              <ul className={styles.item_list}>
                {item.features.map((feature) => (
                  <li key={`${feature}-${index}`}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
