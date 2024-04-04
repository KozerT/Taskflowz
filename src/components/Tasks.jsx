import { useContext, useState } from "react";
import TaskTabs from "./TaskTabs";
import { TasksContext } from "../store/tasks-context";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const { tasks } = useContext(TasksContext);
  const [selectedType, setSelectedType] = useState("active");
  const [expanded, setExpanded] = useState(null);

  const handleSelectType = (newType) => {
    setSelectedType(newType);
  };

  const handleViewDetails = (id) => {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    });
  };

  const filteredTasks = {
    active: tasks.filter((task) => task.status === "active"),
    completed: tasks.filter((task) => task.status === "completed"),
    failed: tasks.filter((task) => task.status === "failed"),
  };

  const displayedTasks = filteredTasks[selectedType];

  return (
    <div id="tasks">
      <TaskTabs
        tasks={filteredTasks}
        onSelectType={handleSelectType}
        selectedType={selectedType}
      >
        {displayedTasks.length > 0 && (
          <ol className="task-items">
            {displayedTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onViewDetails={() => handleViewDetails(task.id)}
                isExpanded={expanded === task.id}
              />
            ))}
          </ol>
        )}
        {displayedTasks.length === 0 && <p>No challenges found.</p>}
      </TaskTabs>
    </div>
  );
};

export default Tasks;
