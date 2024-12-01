import React from 'react'
import Tasks from './Tasks';

export default function SelectedProject({ project, onDelete }) {
    console.log('onDelete prop:', onDelete);

    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className='w-[35rem] mt-16 bg-pokemon-grey p-8 rounded-lg shadow-lg'>
            <header className='pb-4 mb-4 border-b-2 border-pokemon-light-orange'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl font-bold text-pokemon-dark-blue mb-2'>{project.title}</h1>
                    <button className='text-pokemon-light-orange hover:text-pokemon-light-red transition-all duration-200'
                        onClick={onDelete}>DELETE</button>
                </div>
                <p className='mb-4 text-pokemon-light-green'>{formattedDate}</p>
                <p className='text-pokemon-dark-grey whitespace-pre-wrap'>{project.description}</p>
            </header>
            <div className='text-stone-600'><Tasks /></div>
        </div>
    )
}
