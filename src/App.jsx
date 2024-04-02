import { RouterProvider, createBrowserRouter } from "react-router-dom";

import WelcomePage from "./pages/Welcome.jsx";
import TasksPage from "./pages/Tasks.jsx";

const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  { path: "/tasks", element: <TasksPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
