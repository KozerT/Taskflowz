import InputField from "./InputField.jsx";
import { useRef } from "react";
import ActionButton from "./ActionButton.jsx";
import Modal from "./Modal.jsx";

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} btnCaption="Close">
        <h2 className="text-xl font-bold text-stone-600 my-4">Invalid Input</h2>
        <p className="text-stone-500 mb-4 ">Ooops! Some fields are empty.</p>
        <p className="text-stone-500 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className=" text-gray-500 font-normal px-2 py-2 text-xs md:text-base border  border-blue-200  rounded-md hover:shadow-md"
            >
              Cancel
            </button>
          </li>
          <li>
            <ActionButton onClick={handleSave}>Save</ActionButton>
          </li>
        </menu>
        <div>
          <InputField label="Title" ref={titleRef} />
          <InputField label="Description" ref={descriptionRef} textarea />
          <InputField label="Due Date" ref={dueDateRef} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
