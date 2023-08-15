'use client';

import CloseButton from './CloseButton.jsx';
import styles from './ModalSubmitted.module.css';

import CrossIcon from '@/icons/cross.svg';
import IconSubmitted from '@/components/Modal/IconSubmitted.jsx';
import config from '@/config/index.json';

const modalSubmitted = ({ onClose }) => {
    const { successSubmit } = config;
    const { text } = successSubmit;
    return (
        <div className={styles.container}>
            <div
                className={styles.wrapper}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.content}>
                    <div className={styles.icon_wrapper}>
                        <IconSubmitted />
                    </div>
                    <div className={styles.text}>{text}</div>
                    <div className={styles.close_btn}>
                        <CloseButton onClose={onClose}>
                            <CrossIcon className={styles.closeCross} />
                        </CloseButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default modalSubmitted;
