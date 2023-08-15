import styles from './AccentBold.module.css';

import config from '@/config/index.json';

function AccentBold() {
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

export default AccentBold;
