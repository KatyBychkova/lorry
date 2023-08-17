'use client';

import CloseButton from './CloseButton.jsx';
import styles from './ModalSubmitted.module.css';

import CrossIcon from '@/icons/cross.svg';
import IconSubmitted from '@/components/Modal/IconSubmitted.jsx';

const modalSubmitted = ({ onClose }) => (
    <div className={styles.container}>
        <div
            className={styles.wrapper}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={styles.content}>
                <div className={styles.icon_wrapper}>
                    <IconSubmitted />
                </div>
                <div className={styles.text}>
                        Спасибо! Данные успешно отправлены!
                </div>
                <div className={styles.close_btn}>
                    <CloseButton onClose={onClose}>
                        <CrossIcon className={styles.closeCross} />
                    </CloseButton>
                </div>
            </div>
        </div>
    </div>
);

export default modalSubmitted;
