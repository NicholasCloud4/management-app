import React from "react";
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
    return (
        <section className="p-6 bg-pokemon-light-grey rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-pokemon-dark-blue my-4">
                Tasks
            </h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && (
                <p className="text-pokemon-light-blue mb-4">
                    This project does not have any tasks yet.
                </p>
            )}

            {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md list-disc list-inside text-pokemon-dark-grey">
                    {tasks.map((task) => {
                        return (
                            <li key={task.id} className="flex justify-between my-4">
                                <span>{task.text}</span>
                                <button className="text-pokemon-light-orange hover:text-pokemon-light-red transition-all duration-200">Clear</button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </section>
    );
}
