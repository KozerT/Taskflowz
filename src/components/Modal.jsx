import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const Modal = ({ title, children, onClose, stopPropagation }) => {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose}>
        <motion.dialog
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          open
          className="modal"
          onClick={stopPropagation}
        >
          <h2 className="modal-text-main">{title}</h2>
          {children}
        </motion.dialog>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
