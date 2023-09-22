'use client';

import { useEffect, useState } from 'react';
import { lock as scrollLock, unlock as scrollUnlock } from 'tua-body-scroll-lock';

import CrossIcon from '../../assets/icons/cross.svg';
import ModalForm from './ModalForm.jsx';
import ModalTerms from './ModalTerms.jsx';
import ModalSubmitted from './ModalSubmitted.jsx';
import CloseButton from './CloseButton.jsx';
import styles from './Modal.module.css';

const typeForm = 'modalForm';
const typeTerms = 'modalTerms';
const typeModalSubmitted = 'modalSubmitted';

function Modal({
    isVisible, onClose, modalType, openModal, setModal,
}) {
    useEffect(() => {
        if (isVisible) {
            scrollLock();
        } else {
            scrollUnlock();
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
            {modalType === typeForm && (
                <ModalForm
                    openModalSubmitted={handleModalSubmittedIsOpen}
                    setModal={setModal}
                    onClose={onClose}
                />
            )}
            {modalType === typeTerms && <ModalTerms onClose={onClose} />}
            {modalType === typeModalSubmitted && (
                <ModalSubmitted onClose={onClose}> </ModalSubmitted>
            )}
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
