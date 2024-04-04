import { useState } from "react";
import NewTask from "./NewTask";

const Header = () => {
  const [isCreatingNewTask, setIsCreatingNewTask] = useState();

  const handleStartAddNewTask = () => {
    setIsCreatingNewTask(true);
  };

  const handleDone = () => {
    setIsCreatingNewTask(false);
  };

  return (
    <>
      {isCreatingNewTask && <NewTask onDone={handleDone} />}
      <header id="main-header">
        <h1>Your Tasks</h1>
        <button onClick={handleStartAddNewTask} className="primary-btn">
          {" "}
          Add Task{" "}
        </button>
      </header>
    </>
  );
};

export default Header;
