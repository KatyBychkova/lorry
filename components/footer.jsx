import Link from 'next/link';

import LogoLorryFooter from './images/logoLorryFooter.jsx';
import LogoGtFooter from './images/logoGtFooter.jsx';

import styles from '@/styles/Footer.module.css';
import config from '@/config/index.json';

function Footer({ openModal, setModal }) {
    const { company, footer } = config;
    const { contacts, email } = company;
    const { privacy, copy } = footer;
    const modalType = 'modalTerms';

    return (
        <footer className={styles.section}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.logos}>
                        <div className={styles.logo_lorry}>
                            <LogoLorryFooter />
                        </div>
                        <div className={styles.logo_gt}>
                            <LogoGtFooter />
                        </div>
                    </div>
                    <div className={styles.contacts}>
                        <div className={styles.tel}>
                            {contacts.map((item) => (
                                <Link key={item} className={styles.tel_item} href={`tel:${item}`}>
                                    {item}
                                </Link>
                            ))}
                        </div>
                        <div className={styles.email}>
                            <Link className={styles.email_link} href={`mailto:${email.href}`}>
                                {email.name}
                            </Link>
                        </div>
                    </div>
                    <div className={styles.terms}>
                        <div className={styles.privacy}>
                            <button
                                className={styles.privacy_btn}
                                onClick={() => {
                                    openModal(true);
                                    setModal(modalType);
                                }}
                            >
                                {privacy.text}
                            </button>
                        </div>
                        <div className={styles.copy}>{copy}</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
