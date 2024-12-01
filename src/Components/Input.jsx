import React, { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {

    const classes = "w-full p-2 border-2 rounded-md border-pokemon-orange bg-pokemon-grey text-pokemon-dark-grey focus:outline-none focus:border-pokemon-light-blue focus:bg-white transition-all duration-200"

    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-pokemon-light-green">
                {label}
            </label>
            {textarea ? (
                <textarea
                    ref={ref}
                    className={classes}
                    {...props}
                />
            ) : (
                <input
                    ref={ref}
                    className={classes}
                    {...props}
                />
            )}
        </p>
    );
});

export default Input
