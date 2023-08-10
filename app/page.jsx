"use client";

import About from "@/components/about";
import Benefits from "@/components/benefits";
import CallToAction from "@/components/callToAction";
import Capabilities from "@/components/capabilities";
import Footer from "@/components/footer";
import InviteFriend from "@/components/inviteFriend";
import Modal from "@/components/modal";

import { useState } from "react";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleClose = () => {
    setShowModal(false), setModalType(null);
  };

  const handleModalType = (modalType) => {
    setModalType(modalType);
  };

  return (
    <div>
      <About openModal={setShowModal} setModal={handleModalType}></About>
      <Benefits></Benefits>
      <CallToAction openModal={setShowModal} setModal={handleModalType} onClose={handleClose}></CallToAction>
      <InviteFriend></InviteFriend>
      <Capabilities openModal={setShowModal} setModal={handleModalType}></Capabilities>
      <Footer openModal={setShowModal} setModal={handleModalType}></Footer>
      <Modal isVisible={showModal} onClose={handleClose} openModal={setShowModal} setModal={handleModalType} modalType={modalType}></Modal>
    </div>
  );
};

export default Main;
