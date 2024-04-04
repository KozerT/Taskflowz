import { useContext } from "react";
import { TasksContext } from "../store/tasks-context";

const TaskItem = ({ task, onViewDetails, isExpanded }) => {
  const { updateTaskStatus } = useContext(TasksContext);

  const formattedDate = new Date(task.deadline).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleCancel = () => {
    updateTaskStatus(task.id, "failed");
  };

  const handleComplete = () => {
    updateTaskStatus(task.id, "completed");
  };

  return (
    <li>
      <article className="task-item">
        <header>
          <img {...task.image} />
          <div className="task-item-meta">
            <h2>{task.title}</h2>
            <p>Complete until {formattedDate}</p>
            <p className="task-item-actions">
              <button onClick={handleCancel} className="btn-negative">
                Mark as failed
              </button>
              <button onClick={handleComplete}>Mark as completed</button>
            </p>
          </div>
        </header>
        <div className="task-item-details">
          <p>
            <button onClick={onViewDetails}>
              View Details{" "}
              <span className="task-item-details-icon">&#9650;</span>
            </button>
          </p>

          {isExpanded && (
            <div>
              <p className="task-item-description">{task.description}</p>
            </div>
          )}
        </div>
      </article>
    </li>
  );
};

export default TaskItem;
