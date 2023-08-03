"use client";
import Main from "./page";
import "../styles/globals.css";
import "../styles/fonts.css";
// import Modal from "@/components/modal";
// import { useState } from "react";

export const metadata = {
  title: "Lorry",
};

const RootLayout = ({ children }) => {
  // const [showModal, setShowModal] = useState(false);
  return (
    <html lang="ru">
      <body>
        <Main>{children}</Main>
        {/* <Modal isVisible={showModal} onClose={() => setShowModal(false)}></Modal> */}
      </body>
    </html>
  );
};

// const RootLayout = ({ children }) => {
//   // const [showModal, setShowModal] = useState(false);
//   return (
//     <html lang="ru">
//       <body>
//         <Main>{children}</Main>
//         {/* <Modal isVisible={showModal} onClose={() => setShowModal(false)}></Modal> */}
//       </body>
//     </html>
//   );
// };

export default RootLayout;
