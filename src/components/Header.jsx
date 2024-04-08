import { useState } from "react";
import NewTask from "./NewTask";
import { AnimatePresence, motion } from "framer-motion";

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
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 100 }}
          onClick={handleStartAddNewTask}
          className="primary-btn"
        >
          {" "}
          Add Task{" "}
        </motion.button>
      </header>
    </>
  );
};

export default Header;
