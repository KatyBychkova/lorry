import styles from "../styles/Header.module.css";
import config from "../config/index";
import LogoLorryHeader from "./logoLorryHeader";
import Link from "next/link";

const Header = () => {
  const { company } = config;
  const { telegram, contacts, callToAction } = company;
  const { href } = telegram;
  return (
    <header className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <LogoLorryHeader></LogoLorryHeader>
        </div>
        <div className={styles.telegram}>
          <Link className={styles.telegram_link} href={href}>
            {telegram.name}
          </Link>
        </div>
        <div className={styles.tel}>
          {contacts.map((item, index) => (
            <Link className={styles.tel_item} key={`${item}-${index}`} href={`${"tel:" + item}`}>
              {item}
            </Link>
          ))}
        </div>
        <div className={styles.callToAction}>
          <div>
            <Link className={styles.callToAction_btn} href={callToAction.href}>
              {callToAction.text}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
