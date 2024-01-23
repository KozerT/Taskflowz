import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className=" backdrop:bg-stone-900/60 p-4 rounded-md  shadow-md  "
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <button className=" text-gray-600 font-medium px-2 py-2 text-xs md:text-base border  border-blue-200  rounded-md hover:shadow-md">
          {btnCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
