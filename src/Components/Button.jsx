import React from 'react'

export default function Button({ children, ...props }) {
    return (
        <button className="px-4 py-2 mb-4 text-xs md:text-base rounded-md text-white bg-pokemon-light-red hover:bg-pokemon-light-blue transition-all duration-300 ease-in-out" {...props}>
            {children}
        </button>
    )
}
