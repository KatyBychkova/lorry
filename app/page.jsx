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
  const [showModal, setShowModal] = useState("true");
  return (
    <div>
      <About openModal={setShowModal}></About>
      <Benefits></Benefits>
      <CallToAction></CallToAction>
      <InviteFriend></InviteFriend>
      <Capabilities openModal={setShowModal}></Capabilities>
      <Footer></Footer>
      {/* <button onClick={() => setShowModal(true)}>Открыть модальное окно</button> */}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}></Modal>
    </div>
  );
};

export default Main;
