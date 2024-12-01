import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import Sidebar from "./Components/Sidebar";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
    });

    function handleStartAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    let projectId = 0;
    function handleAddProject(projectData) {
        setProjectsState((prevState) => {
            const newProject = {
                ...projectData,
                id: projectId++
            };

            return {
                ...prevState,
                projects: [...prevState.projects, newProject]
            }
        })
    }

    console.log(projectsState);

    let content;

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} />;
    } else if (projectsState.selectedProjectId === undefined) {
        content = (
            <NoProjectSelected onStartAddProject={handleStartAddProject} />
        );
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <Sidebar onStartAddProject={handleStartAddProject} />
            {content}
        </main>
    );
}

export default App;
