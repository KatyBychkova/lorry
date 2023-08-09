import IconCloseBtnForModal from "./iconCloseBtnForModal";

const CloseButtonForModal = ({ onClose }) => {
  return (
    <button
      onClick={() => {
        onClose();
      }}
    >
      <IconCloseBtnForModal></IconCloseBtnForModal>
    </button>
  );
};

export default CloseButtonForModal;
