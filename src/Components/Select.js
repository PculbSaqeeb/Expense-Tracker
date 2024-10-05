import React from 'react';

const Select = ({ className, name, value, onChange, options, error,defaultOption }) => {
  return (
    <div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      >
        {
            defaultOption &&(
                <option hidden>{defaultOption}</option>
            )
        }
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <p className='text-red-500 absolute'>{error}</p>
    </div>
  );
};

export default Select;
