import React from "react";
import NoProjectsSelected from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3 ">
            <img
                src={NoProjectsSelected}
                alt="Empty Project"
                className="w-64 h-64 object-contain mx-auto"

            />
            <h2 className="text-xl font-bold text-pokemon-dark-grey mt-4 my-4">
                No Project Selected
            </h2>
            <p className="text-pokemon-light-green mb-4">Select a project to get started or create a new one</p>
            <p className="mt-8">
                <Button onClick={onStartAddProject}>Create New Project</Button>
            </p>
        </div>
    );
}
