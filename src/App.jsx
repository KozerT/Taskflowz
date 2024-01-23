import NewProject from "./components/NewProject";
import ProjectSelectionEmpty from "./components/ProjectSelectionEmpty";
import SideBar from "./components/SideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <SideBar />
      <ProjectSelectionEmpty />
      {/* <NewProject /> */}
    </main>
  );
}

export default App;
