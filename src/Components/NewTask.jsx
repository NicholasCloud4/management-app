import React, { useState } from 'react';

export default function NewTask({ onAdd }) {

    const [entererdTask, setEntererdTask] = useState("");

    function handleChange(event) {
        setEntererdTask(event.target.value);
    }

    function handleClick() {
        if (entererdTask.trim() === "") return;
        onAdd(entererdTask);
        setEntererdTask("");
    }

    return (
        <div className="flex items-center gap-4 mt-4">
            <input
                type="text"
                placeholder="Enter a new task"
                className="w-64 px-3 py-2 rounded-md bg-pokemon-light-grey text-pokemon-dark-grey placeholder-pokemon-dark-grey border border-pokemon-light-blue focus:ring-2 focus:ring-pokemon-light-blue focus:outline-none"
                onChange={handleChange}
                value={entererdTask}
            />
            <button className="px-4 py-2 rounded-md bg-pokemon-light-blue text-white hover:bg-pokemon-dark-blue transition-all duration-300"
                onClick={handleClick}>
                Add Task
            </button>
        </div>
    );
}
