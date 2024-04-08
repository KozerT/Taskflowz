import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const Modal = ({ title, children, onClose, stopPropagation }) => {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose}>
        <motion.dialog
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
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
