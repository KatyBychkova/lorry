import styles from './AccentBold.module.css';

import { content } from '@/config/index.js';

const { inviteFriend } = content;
const { inviteFriendAccentBold } = inviteFriend;
const { subtitleAccentBegin, subtitleAccentEnd, bonusAccent } = inviteFriendAccentBold;

function AccentBold() {
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
