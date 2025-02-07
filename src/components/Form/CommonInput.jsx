import React from "react";

const CommonInput = ({name,label,id,placeholder,type,value,onChange}) => {
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <input
          name={name}
          id={id}
          placeholder={placeholder || "enter your value"}
          type={type}
          value={value}
          onChange={onChange}
        />
    </div>
  );
};

export default CommonInput;
