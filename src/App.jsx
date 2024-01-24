import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSelectionEmpty from "./components/ProjectSelectionEmpty";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projectsGroup: [],
  });

  const handleSelectProject = (id) => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleAddProject = () => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleFinishAddProject = (projectData) => {
    setProjects((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projectsGroup: [...prevState.projectsGroup, newProject],
      };
    });
  };

  const handleDeleteProject = () => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projectsGroup: prevState.projectsGroup.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  const selectedProject = projects.projectsGroup.find(
    (project) => project.id === projects.selectedProjectId
  );

  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  );

  if (projects.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleFinishAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projects.selectedProjectId === undefined) {
    content = <ProjectSelectionEmpty onAddProject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <SideBar
        onAddProject={handleAddProject}
        projects={projects.projectsGroup}
        onSelectProject={handleSelectProject}
        selectedProjectId={projects.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
