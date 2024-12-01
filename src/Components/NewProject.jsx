import React, { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAdd }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;


        // validation ...
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })

    }

    return (
        <div className="w-[35rem] mt-16 bg-pokemon-grey p-8 rounded-lg shadow-lg">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-pokemon-dark-grey hover:text-pokemon-light-red transition-colors duration-200">
                        Cancel
                    </button>
                </li>
                <li>
                    <button
                        className="px-6 py-2 rounded-md bg-pokemon-light-green text-white hover:bg-pokemon-orange hover:shadow-md transition-all duration-300"
                        onClick={handleSave}>
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input ref={title} type="text" label="Title" />
                <Input ref={description} label="Description" textarea />
                <Input ref={dueDate} type="date" label="Due Date" />
            </div>
        </div>
    );
}
