import { useState } from "react";
import ActionButton from "./ActionButton";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-6">
      <input
        type="text"
        className="w-64 px-2 py-2 rounded-md  border bg-stone-50 text-stone-600 focus:outline-none focus:border-blue-200  drop-shadow-sm focus:drop-shadow-md"
        onChange={handleChange}
        value={enteredTask}
      />
      <ActionButton onClick={handleClick}>Add Task</ActionButton>
    </div>
  );
};

export default NewTask;
