import React from "react";

import "./Input.css";

function Input({
  type = "text",
  label,
  name,
  value,
  placeholder,
  changeHandler,
  className,
}) {
  return (
    <div className={`input ${className}`}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={changeHandler}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
