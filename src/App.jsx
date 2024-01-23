import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSelectionEmpty from "./components/ProjectSelectionEmpty";
import SideBar from "./components/SideBar";

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projectsGroup: [],
  });

  const handleAddProject = () => {
    setProjects((prevSate) => {
      return {
        ...prevSate,
        selectedProjectId: null,
      };
    });
  };

  let content;
  if (projects.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projects.selectedProjectId === undefined) {
    content = <ProjectSelectionEmpty onAddProject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <SideBar onAddProject={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
