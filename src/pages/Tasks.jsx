import Header from "../components/Header";
import Tasks from "../components/Tasks";
import TaskContextProvider from "../store/tasks-context";

const TasksPage = () => {
  return (
    <TaskContextProvider>
      <Header />
      <main>
        <Tasks />
      </main>
    </TaskContextProvider>
  );
};

export default TasksPage;
