import { content } from '@/config/index.js';

import styles from './AccentBold.module.css';

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
