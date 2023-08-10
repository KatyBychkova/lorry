const CloseButtonForModal = ({ onClose, children }) => {
  return (
    <button
      onClick={() => {
        onClose();
      }}
    >
      {children}
    </button>
  );
};

export default CloseButtonForModal;
