import { createPortal } from "react-dom";

const Modal = ({ title, children, onClose, stopPropagation }) => {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose}>
        <dialog open className="modal" onClick={stopPropagation}>
          <h2 className="modal-text-main">{title}</h2>
          {children}
        </dialog>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
