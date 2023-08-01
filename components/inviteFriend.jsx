import styles from "../styles/InviteFriend.module.css";
import config from "../config/index";
import Image from "next/image";
import InviteFriendAccentBold from "./inviteFriendAccentBold";

const InviteFriend = () => {
  const { inviteFriend } = config;
  const { title, subtitleBeforeAccent, image } = inviteFriend;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.text}>
              <p>{subtitleBeforeAccent}</p>
              <InviteFriendAccentBold></InviteFriendAccentBold>
              <p>Больше друзей - больше бонусов!</p>
            </div>
          </div>

          <div className={styles.imageInner}>
            <div className={styles.imageWrapper}>
              <Image className={styles.image} src={image.src} width={900} height={600} alt={image.alt} priority={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InviteFriend;
