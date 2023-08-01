import styles from "../styles/Capabilities.module.css";
import config from "../config/index";
import Link from "next/link";
import Image from "next/image";

const Capabilities = ({ openModal }) => {
  const { capabilities, cities } = config;
  const { title, image, text, callToAction } = capabilities;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <div className={styles.info_wrapper}>
              <div className={styles.text}>
                <p className={styles.text_top}>{text.top}</p>
                <ul className={styles.cities}>
                  {cities.map((city, index) => (
                    <p className={styles.cities_item} key={`${city}-${index}`}>
                      {city}
                    </p>
                  ))}
                </ul>
                <p className={styles.text_bottom}>{text.bottom}</p>
              </div>
            </div>

            <div className={styles.callToAction}>
              <button className={styles.callToAction_btn} onClick={() => openModal(true)}>
                {callToAction.linkText}
              </button>
              {callToAction.text}
            </div>
          </div>
          <div className={styles.imageInner}>
            <div className={styles.imageWrapper}>
              <Image className={styles.image} src={image.src} width={760} height={430} alt={image.alt} priority={true} />
            </div>
          </div>
        </div>
      </div>

      {/* <Image className={styles.image}  layout="responsive"
          width={900}
          height={599} src="/../public/assets/images/invite-friend-bg.png" fill alt="мужчина протягивает руку в знак дружбы" /> */}
    </section>
  );
};

export default Capabilities;
