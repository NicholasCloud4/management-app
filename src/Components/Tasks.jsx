import React from 'react';
import NewTask from './NewTask';

export default function Tasks() {
    return (
        <section className="p-6 bg-pokemon-light-grey rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-pokemon-dark-blue my-4">Tasks</h2>
            <NewTask />
            <p className="text-pokemon-light-blue mb-4">
                This project does not have any tasks yet.
            </p>
            <ul className="list-disc list-inside text-pokemon-dark-grey">
                {/* Task items will go here */}
            </ul>
        </section>
    );
}
