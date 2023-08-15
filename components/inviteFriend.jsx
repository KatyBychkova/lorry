import InviteFriendAccentBold from './inviteFriendAccentBold.jsx';

import styles from '@/styles/InviteFriend.module.css';
import config from '@/config/index.json';

function InviteFriend() {
    const { inviteFriend } = config;
    const { title, subtitleBeforeAccent } = inviteFriend;

    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.info}>
                            <h1 className={styles.title}>{title}</h1>
                            <div className={styles.text}>
                                <p>{subtitleBeforeAccent}</p>
                                <InviteFriendAccentBold />
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
