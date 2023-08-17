import Link from 'next/link';

import LogoLorryHeader from './LogoLorryHeader.jsx';
import styles from './Header.module.css';

import { content } from '@/config/index.js';

const { company } = content;
const { telegram, contacts, callToAction } = company;
const { href } = telegram;
const modalType = 'modalForm';

function Header({ openModal, setModal }) {
    return (
        <header className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <LogoLorryHeader />
                </div>
                <div className={styles.telegram}>
                    <Link className={styles.telegram_link} href={href}>
                        {telegram.name}
                    </Link>
                </div>
                <div className={styles.tel}>
                    {contacts.map((item) => (
                        <Link key={item} className={styles.tel_item} href={`tel:${item}`}>
                            {item}
                        </Link>
                    ))}
                </div>

                <div className={styles.callToAction}>
                    <div>
                        <button
                            className={styles.callToAction_btn}
                            onClick={() => {
                                openModal(true);
                                setModal(modalType);
                            }}
                        >
                            {callToAction.text}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
