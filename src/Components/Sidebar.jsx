import React from "react";

export default function Sidebar() {
    return (
        <aside className="w-1/3 px-8 py-16 bg-pokemon-grey text-pokemon-dark-grey md:w-72 rounded-r-xl shadow-lg">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-pokemon-light-blue">Your Projects</h2>
            <div>
                <button className="px-4 py-2 mb-4 text-xs md:text-base rounded-md text-white bg-pokemon-light-red hover:bg-pokemon-dark-grey transition-all duration-300 ease-in-out">
                    Add Project +
                </button>
            </div>
            <ul>
                <li></li>
            </ul>
        </aside>
    );
}
