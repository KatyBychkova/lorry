'use client';

import { useEffect, useState } from 'react';

import ModalForm from './modal/modalForm.jsx';
import ModalTerms from './modal/modalTerms.jsx';
import ModalSubmitted from './modal/modalSubmitted.jsx';
import CloseButtonForModal from './modal/closeButtonForModal.jsx';
import CloseButtonIconForModal from './images/iconCloseForModal.jsx';

import styles from '@/styles/modal/Modal.module.css';

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
                    <CloseButtonForModal onClose={onClose}>
                        <CloseButtonIconForModal />
                    </CloseButtonForModal>
                </div>
            )}
        </div>
    );
}

export default Modal;
