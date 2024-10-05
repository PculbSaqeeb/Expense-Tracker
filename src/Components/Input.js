import React from 'react';

const Input = ({ className,value, onChange, name,error }) => {
    return (
        <div>
            <input
                className={className}
                value={value}
                name={name}
                onChange={onChange}
            />
        <p className='text-red-500 absolute'>{error}</p>
        </div>
        
    );
}

export default Input;
