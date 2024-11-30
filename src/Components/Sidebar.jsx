import React from "react";
import Button from "./Button";

export default function Sidebar({ onStartAddProject }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-pokemon-grey text-pokemon-dark-grey md:w-72 rounded-r-xl shadow-lg">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-pokemon-light-blue">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>Add Project +</Button>
            </div>
            <ul>
                <li></li>
            </ul>
        </aside>
    );
}
