import AccentBold from './AccentBold.jsx';
import styles from './InviteFriend.module.css';

import { content } from '@/config/index.js';

const { inviteFriend } = content;
const { title, subtitleBeforeAccent } = inviteFriend;

function InviteFriend() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.info}>
                            <h1 className={styles.title}>{title}</h1>
                            <div className={styles.text}>
                                <p>{subtitleBeforeAccent}</p>
                                <AccentBold />
                                <p>Больше друзей - больше бонусов!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InviteFriend;
