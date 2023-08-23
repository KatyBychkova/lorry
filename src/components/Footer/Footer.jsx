import Link from 'next/link';

import styles from '@/components/Footer/Footer.module.css';
import { content } from '@/config/index.js';

import GlobaltruckLogoIcon from '../../assets/logo/globaltruck.svg';
import LorryBlueLogoIcon from '../../assets/logo/lorry-blue.svg';

const { company, footer } = content;
const { contacts, email } = company;
const { privacy, copy } = footer;

const modalType = 'modalTerms';

function Footer({ openModal, setModal }) {
    return (
        <footer className={styles.section}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.logos}>
                        <div className={styles.logo_lorry}>
                            <LorryBlueLogoIcon height="46" />
                        </div>
                        <div className={styles.logo_gt}>
                            <GlobaltruckLogoIcon height="33" />
                        </div>
                    </div>
                    <div className={styles.contacts}>
                        <div className={styles.tel}>
                            {contacts.map((item) => (
                                <Link
                                    key={item}
                                    className={styles.tel_item}
                                    href={`tel:${item}`}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                        <div className={styles.email}>
                            <Link
                                className={styles.email_link}
                                href={`mailto:${email.href}`}
                            >
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
