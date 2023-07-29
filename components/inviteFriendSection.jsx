import styles from "../styles/InviteFriendSection.module.css";
import Image from "next/image";

const InviteFriendSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h1 className={styles.title}>ПРИГЛАСИ ДРУГА РАБОТАТЬ К НАМ</h1>
          <div className={styles.text}>
            <p>В Компании действует акция:</p>
            <strong>
              Приведи друга - получи <span>10 000 рублей</span>.
            </strong>
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

      {/* <Image className={styles.image}  layout="responsive"
          width={900}
          height={599} src="/../public/assets/images/invite-friend-bg.png" fill alt="мужчина протягивает руку в знак дружбы" /> */}
    </section>
  );
};

export default InviteFriendSection;
