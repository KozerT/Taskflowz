import Header from "../components/Header";
import TaskContextProvider from "../store/tasks-context";

const TasksPage = () => {
  return (
    <TaskContextProvider>
      <Header />
    </TaskContextProvider>
  );
};

export default TasksPage;
