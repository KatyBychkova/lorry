'use client';

import { useEffect, useState } from 'react';

import ModalForm from './ModalForm.jsx';
import ModalTerms from './ModalTerms.jsx';
import ModalSubmitted from './ModalSubmitted.jsx';
import CloseButton from './CloseButton.jsx';

import CrossIcon from '@/icons/cross.svg';
import styles from './Modal.module.css';

const typeForm = 'modalForm';
const typeTerms = 'modalTerms';
const typeModalSubmitted = 'modalSubmitted';

function Modal({ isVisible, onClose, modalType, openModal, setModal }) {
    const [pageScroll] = useState(false);

    useEffect(() => {
        if (isVisible && !pageScroll) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '22px';
        } else {
            document.body.style.overflow = 'auto';
            // paddingRight задан, чтобы страница за модальным окном не дергалась из-за пропадающего/появляющегося скрола справа
            document.body.style.paddingRight = '0';
        }
    });

    if (!isVisible) {
        return null;
    }

    const handleModalSubmittedIsOpen = () => {
        openModal(true);
        setModal(typeModalSubmitted);
    };

    return (
        <div className={styles.main} onClick={onClose}>
            {modalType === typeForm && <ModalForm openModalSubmitted={handleModalSubmittedIsOpen} setModal={setModal} onClose={onClose} />}
            {modalType === typeTerms && <ModalTerms onClose={onClose} />}
            {modalType === typeModalSubmitted && <ModalSubmitted onClose={onClose}> </ModalSubmitted>}
            {modalType !== typeModalSubmitted && (
                <div className={styles.close_btn}>
                    <CloseButton onClose={onClose}>
                        <CrossIcon className={styles.closeCross} />
                    </CloseButton>
                </div>
            )}
        </div>
    );
}

export default Modal;
