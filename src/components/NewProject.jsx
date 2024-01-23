import InputField from "./InputField.jsx";
import { useRef } from "react";
import ActionButton from "./ActionButton.jsx";

const NewProject = ({ onAdd }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className=" text-gray-500 font-normal px-2 py-2 text-xs md:text-base border  border-blue-200  rounded-md hover:shadow-md">
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
  );
};

export default NewProject;
