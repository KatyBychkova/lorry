'use client';

import { useState } from 'react';

import About from '@/components/About/About.jsx';
import Benefits from '@/components/benefits.jsx';
import CallToAction from '@/components/callToAction.jsx';
import Capabilities from '@/components/capabilities.jsx';
import Footer from '@/components/footer.jsx';
import InviteFriend from '@/components/InviteFriend/InviteFriend.jsx';
import Modal from '@/components/Modal/Modal.jsx';

function Main() {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(null);

    const handleClose = () => {
        setShowModal(false);
        setModalType(null);
    };

    return (
        <div>
            <About openModal={setShowModal} setModal={setModalType} />
            <Benefits />
            <CallToAction openModal={setShowModal} setModal={setModalType} onClose={handleClose} />
            <InviteFriend />
            <Capabilities openModal={setShowModal} setModal={setModalType} />
            <Footer openModal={setShowModal} setModal={setModalType} />
            <Modal
                isVisible={showModal}
                modalType={modalType}
                openModal={setShowModal}
                setModal={setModalType}
                onClose={handleClose}
            />
        </div>
    );
}

export default Main;
