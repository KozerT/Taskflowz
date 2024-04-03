import { useState } from "react";
import NewTask from "./NewTask";

const Header = () => {
  const [isCreatingNewTask, setIsCreatingNewTask] = useState();

  const handleStartAddNewTask = () => {
    setIsCreatingNewTask(true);
  };

  const handleDone = () => {
    setIsCreatingNewTask(flase);
  };

  return (
    <>
      {isCreatingNewTask && <NewTask />}
      <header>
        <h1>Your Tasks</h1>
        <button onClick={handleStartAddNewTask}> Add Challenge </button>
      </header>
    </>
  );
};

export default Header;
