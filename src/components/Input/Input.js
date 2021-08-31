import React from "react";

import "./Input.css";

function Input({
  type = "text",
  label,
  name,
  value,
  changeHandler,
  isError = false,
  errorText,
  className,
}) {
  return (
    <div className={`input ${className}`}>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={changeHandler} />
      <p className={`input_message ${isError ? "input_message--error" : ""}`}>
        {errorText}
      </p>
    </div>
  );
}

export default Input;
