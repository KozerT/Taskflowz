import { useState } from "react";
import NewTask from "./NewTask";
import { AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
        {isCreatingNewTask && <NewTask onDone={handleDone} />}
      </AnimatePresence>

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
