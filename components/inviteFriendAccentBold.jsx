import config from '@/config/index.json';
import styles from '@/styles/InviteFriendAccentBold.module.css';

function InviteFriendAccentBold() {
    const { inviteFriend } = config;
    const { inviteFriendAccentBold } = inviteFriend;
    const { subtitleAccentBegin, subtitleAccentEnd, bonusAccent } = inviteFriendAccentBold;

    return (
        <p className={styles.boldText}>
            {subtitleAccentBegin}
            <span className={styles.colorText}>{bonusAccent}</span>
            {' '}
            {subtitleAccentEnd}
.
        </p>
    );
}

export default InviteFriendAccentBold;
