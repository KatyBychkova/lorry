import styles from "../styles/Footer.module.css";
import config from "../config/index";
import LogoLorryFooter from "./logoLorryFooter";
import LogoGtFooter from "./logoGtFooter";
import Link from "next/link";

const Footer = () => {
  const { company, footer } = config;
  const { contacts, email } = company;
  const { privacy, copy } = footer;

  return (
    <footer className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logos}>
            <LogoLorryFooter></LogoLorryFooter>
            <LogoGtFooter></LogoGtFooter>
          </div>
          <div className={styles.contacts}>
            <div className={styles.tel}>
              {contacts.map((item, index) => (
                <Link className={styles.tel_item} key={`${item}-${index}`} href={`${"tel:" + item}`}>
                  {item}
                </Link>
              ))}
            </div>
            <div className={styles.email}>
              <Link className={styles.email_link} href={`${"mailto:" + email.href}`}>
                {email.name}
              </Link>
            </div>
          </div>
          <div className={styles.terms}>
            <div className={styles.privacy}>
              <Link className={styles.privacy_link} href={privacy.href}>
                {privacy.text}
              </Link>
            </div>
            <div className={styles.copy}>{copy}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
