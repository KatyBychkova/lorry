import styles from "../styles/InviteFriend.module.css";
import config from "../config/index";
import Image from "next/image";
import InviteFriendAccentBold from "./inviteFriendAccentBold";

const InviteFriend = () => {
  const { inviteFriend } = config;
  const { title, subtitleBeforeAccent, subtitleAccentBold, subtitleColorAccent, bonusAccent, subtitleAfterAccent, image } = inviteFriend;

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
          {/* <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            layout="fill"
            objectFit="cover"
            objectPosition="right"
            src="/../public/assets/images/invite-friend-bg.png"
            alt="мужчина дружественно протягивает руку"
          />
        </div> */}
        </div>
      </div>

      {/* <Image className={styles.image}  layout="responsive"
          width={900}
          height={599} src="/../public/assets/images/invite-friend-bg.png" fill alt="мужчина протягивает руку в знак дружбы" /> */}
    </section>
  );
};

export default InviteFriend;
