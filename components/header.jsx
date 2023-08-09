import styles from "../styles/Header.module.css";
import config from "../config/index";
import LogoLorryHeader from "../components/logoLorryHeader";
import Link from "next/link";

const Header = ({ openModal, setModal }) => {
  const { company } = config;
  const { telegram, contacts, callToAction } = company;
  const { href } = telegram;
  const modalType = "modalForm";
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
            <button
              className={styles.callToAction_btn}
              onClick={() => {
                openModal(true), setModal(modalType);
              }}
            >
              {callToAction.text}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
