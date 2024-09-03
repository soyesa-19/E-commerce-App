import { createPortal } from "react-dom";

const Backdrop = ({ children, setShowModal }) => {
  return createPortal(
    <div
      className="fixed top-0 left-0 h-screen w-screen bg-black/50 z-50"
      onClick={() => setShowModal(false)}
    >
      {children}
    </div>,
    document.getElementById("modal")
  );
};

export default Backdrop;
