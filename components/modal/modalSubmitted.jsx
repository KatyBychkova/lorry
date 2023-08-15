'use client';

import CloseButtonForModal from './closeButtonForModal.jsx';

import CloseButtonIconForModalSubmitted from '@/components/images/iconCloseForModalSubmitted.jsx';
import IconSubmitted from '@/components/images/iconSubmitted.jsx';
import config from '@/config/index.json';
import styles from '@/styles/modal/ModalSubmitted.module.css';

const modalSubmitted = ({ onClose }) => {
    const { successSubmit } = config;
    const { text } = successSubmit;
    return (
        <div className={styles.container}>
            <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                <div className={styles.content}>
                    <div className={styles.icon_wrapper}>
                        <IconSubmitted />
                    </div>

                    <div className={styles.text}>{text}</div>

                    <div className={styles.close_btn}>
                        <CloseButtonForModal onClose={onClose}>
                            <CloseButtonIconForModalSubmitted />
                        </CloseButtonForModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default modalSubmitted;
