import React from "react";
import Button from "./Button";

export default function Sidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-pokemon-grey text-pokemon-dark-grey md:w-72 rounded-r-xl shadow-lg">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-pokemon-light-blue">
                Your Projects
            </h2>
            <div>
                <Button onClick={onStartAddProject}>Add Project +</Button>
            </div>
            <ul className="mt-8">
                {projects.map((project) => {

                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-white hover:bg-pokemon-light-blue transition-all duration-300";

                    if (project.id === selectedProjectId) {
                        cssClasses += " bg-pokemon-light-blue text-white";
                    } else {
                        cssClasses += " text-pokemon-dark-grey";
                    }

                    return (
                        <li key={project.id}>
                            <button className={cssClasses}
                                onClick={() => onSelectProject(project.id)}>
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
