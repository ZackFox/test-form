import React from "react";

import "./Button.css";

function Button({ type, className, disabled = false, children }) {
  return (
    <button className={`Button ${className}`} type={type} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
