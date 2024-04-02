import React, { useState } from "react";

const Header = () => {
  const [isCreatingNewTask, setIsCreatingNewTask] = useState();

  const handleStartAddNewTask = () => {
    setIsCreatingNewTask(true);
  };

  function handleDone() {
    setIsCreatingNewTask(flase);
  }

  return (
    <header>
      <h1>Your Tasks</h1>
      <button onClick={handleStartAddNewTask}> Add Challenge </button>
    </header>
  );
};

export default Header;
